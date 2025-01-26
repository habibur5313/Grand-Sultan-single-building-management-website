import React from "react";
import useCoupons from "../../Hooks/useCoupons";
import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { FaRegCopy } from "react-icons/fa";

const AllCoupons = () => {
  const [coupons] = useCoupons();
  return (
    <>
      <h1 className="text-4xl mt-20 text-purple-600 uppercase font-bold text-center">
        all coupons is here
      </h1>
      <p className="text-xl font-medium text-center max-w-xl mx-auto mt-4">
        Use these coupon codes to get discount while making payment.
      </p>
      <div className="grid gap-4 mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {coupons.map((coupon) => (
          <div key={coupon._id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-2">
              <h2 className="card-title">{coupon?.couponCode}</h2>
              <CopyToClipboard text={coupon?.couponCode}>
                                     <button className='text-xl font-medium' onClick={() => toast.success('copied successfully')}><FaRegCopy /></button> 
                                        </CopyToClipboard>  
              </div>
              <p>{coupon?.couponDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllCoupons;
