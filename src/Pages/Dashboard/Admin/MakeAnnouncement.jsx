import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MakeAnnouncement = () => {
  const axiosSecure = useAxiosSecure();
  const handleMakeAnnouncement = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const announcementInfo = { title, description };
    axiosSecure.post("/makeAnnouncements", announcementInfo).then((res) => {
      if (res.data.insertedId) {
                    e.target.title.value = ''   
                    e.target.description.value = ''  
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Make Announcement Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="mt-10">
      <div className="max-w-xl mx-auto bg-gray-200 rounded-xl py-20">
        <form className="text-black" onSubmit={handleMakeAnnouncement}>
          <div className="form-control">
            <label className="label">
              <span className="label-text ml-4">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="enter title"
              className="input input-bordered mx-5"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text ml-4">Title</span>
            </label>
            <textarea
              className="textarea textarea-bordered mx-4"
              name="description"
              placeholder="enter description"
            ></textarea>
          </div>
          <div className="flex justify-end mr-4 mt-5">
            <button className="btn border-b-4 text-xl font-medium border-b-red-700 text-red-700 hover:bg-red-700 hover:text-white">
              Make Announcement
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakeAnnouncement;
