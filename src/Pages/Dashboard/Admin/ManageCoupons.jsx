import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { GrUpdate } from "react-icons/gr";
const ManageCoupons = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const axiosSecure = useAxiosSecure();

  const { data: coupons = [], refetch } = useQuery({
    queryKey: ["couponCodes"],
    queryFn: async () => {
      const res = await axiosSecure.get("/couponCodes");
      return res.data;
    },
  });

  const handleAddCoupon = (e) => {
    e.preventDefault();
    const couponCode = e.target.couponCode.value;
    const discountPercentage = parseInt(e.target.discountPercentage.value);
    const couponDescription = e.target.couponDescription.value;
    const couponInfo = {
      couponCode,
      discountPercentage,
      couponDescription,
    };
    axiosSecure.post("/couponCodes", couponInfo).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Coupon code added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setOpen(false);
        refetch();
      }
    });
  };

  const handleRemove = (id) => {
    Swal.fire({
      title: "Do you want to delete this coupon code?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axiosSecure.delete(`/couponCodes/${id}`).then((res) => {
          if(res.data.deletedCount){
                    Swal.fire("Deleted", "", "not deleted");
                    refetch()
          }
        });
       
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <div className="mt-20">
      <div>
        <div className="flex items-center justify-between">
          <button
            className="btn bg-green-500 py-1 px-4 text-white"
            onClick={onOpenModal}
          >
            Add Coupon
          </button>
          <button className="btn bg-orange-600 text-white py-1 px-4">
            All Coupons: {coupons.length}
          </button>
        </div>
        <Modal open={open} onClose={onCloseModal} center>
          <form onSubmit={handleAddCoupon}>
            <div className="form-control">
              <label className="label">
                <span className="label-text ml-4">coupon code</span>
              </label>
              <input
                type="text"
                name="couponCode"
                placeholder="enter coupon code"
                className="input input-bordered mx-5"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ml-4">discount percentage</span>
              </label>
              <input
                type="number"
                name="discountPercentage"
                placeholder="enter discount percentage"
                className="input input-bordered mx-5"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ml-4">coupon description</span>
              </label>
              <textarea
                name="couponDescription"
                type="text"
                placeholder=" coupon description"
                className="input input-bordered mx-5"
              ></textarea>
            </div>
            <div className="flex justify-end mt-4">
              <button className="btn bg-orange-400 text-white text-xl font-medium">
                Submit
              </button>
            </div>
          </form>
        </Modal>
      </div>
      <div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>coupon code</th>
              <th>discount percentage</th>
              <th>coupon description</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>{item.couponCode}</td>
                <td>{item.discountPercentage}%</td>
                <td>{item.couponDescription}</td>
                <td className="flex gap-2">
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="text-3xl font-medium text-red-600"
                  >
                    <MdDeleteForever />
                  </button>
                  <button
                    onClick={() => handleUpdate(item._id)}
                    className="text-2xl font-medium text-red-600"
                  >
                    <GrUpdate />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCoupons;
