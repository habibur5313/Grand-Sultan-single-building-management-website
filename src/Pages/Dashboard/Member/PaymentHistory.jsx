import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Context/AuthProvider";

const PaymentHistory = () => {
    useEffect(() => {
      document.title = "History | Grand Sultan ";
    }, []);
  const [paymentHistory, setPaymentHistory] = useState();
  
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axiosSecure.get(`/paymentHistory/${user?.email}`).then((res) => {
      setPaymentHistory(res.data);
    });
  }, []);
  return (
    <>
      <h1 className="text-4xl mt-20 mb-4 font-bold text-center uppercase text-purple-700">
        Your Payment History is Here
      </h1>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>email</th>
            <th>price</th>
            <th>transaction id</th>
          </tr>
        </thead>
        <tbody>

            <tr>
              <th>1</th>
              <td>{paymentHistory?.email}</td>
              <td>{paymentHistory?.price} tk</td>
              <td>{paymentHistory?.transactionId}</td>
            </tr>

        </tbody>
      </table>
    </>
  );
};

export default PaymentHistory;
