import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../../Context/AuthProvider";
import useAcceptedRequest from "../../../../Hooks/useAcceptedRequest";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { acceptRequest, refetch } = useAcceptedRequest();
  const { user } = useContext(AuthContext);
  const price = parseInt(acceptRequest.rent);

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-checkout-session", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price]);

  const handleCouponCode = (e) => {
    e.preventDefault();
    const couponCode = e.target.couponCode.value;
    if (price > 50 && couponCode) {
      axiosSecure
        .get(`/couponCheck/${couponCode}?email=${user.email}`)
        .then((res) => {
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Coupon Code Accepted",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      // console.log('payment error', error);
      setError(error.message);
    } else {
      // console.log('payment method', paymentMethod)
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      setError(confirmError.message);
    } else {
      setError("");
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        const payment = {
          email: user.email,
          name: user.displayName,
          price,
          transactionId: paymentIntent.id,
          acceptDate: new Date(),
          acceptRequestId: acceptRequest._id,
          floorNo: acceptRequest.floor_no,
          blockName: acceptRequest.block_name,
          apartmentNo: acceptRequest.apartment_no,
          month: acceptRequest.month,
        };

        const res = await axiosSecure.post(
          `/payments?acceptRequestId=${acceptRequest._id}&email=${user.email}`,
          payment
        );
        console.log("payment saved", res.data.message);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Thank you for the taka paisa",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/paymentHistory");
        } else {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
  };

  return (
    <div className="mt-20">
      <div className="flex flex-col md:flex-row items-center gap-5 mb-10">
        <form
          onSubmit={handleCouponCode}
          className="flex-1 flex items-center gap-4"
        >
          <div className="form-control w-full">
            <input
              placeholder="enter Coupon code"
              name="couponCode"
              type="text"
              className="input input-bordered h-14  "
            />
          </div>
          <button className="btn btn-accent text-xl font-medium text-white">
            Submit
          </button>
        </form>
        <h1 className="flex-1 text-2xl font-semibold text-red-700">
          Total Cost : {price}tk
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn mt-10 btn-primary"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-700">{error}</p>
        <p className="text-green-600">{success}</p>
      </form>
    </div>
  );
};

export default CheckOutForm;
