import { Elements } from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckForm";
const stripePromise = loadStripe("pk_test_51QfeQcG01kWL4rRaQ75WuUQEGfhA7KluV4TNvISCXVYv5yORnmgJSL0t5BzP3aX3gjxJz8nF3aMjZvsrnk02USrg002n0cWdHX");
const Payments = () => {
    useEffect(() => {
      document.title = "Payment | Grand Sultan ";
    }, []);
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckOutForm></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payments;