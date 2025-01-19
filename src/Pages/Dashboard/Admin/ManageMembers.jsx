import React from "react";
import useMembers from "../../../Hooks/useMembers";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageMembers = () => {
  const [members, refetch] = useMembers();
  // console.log(members);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete member",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axiosSecure.patch(`members/${id}`).then((res) => {
                    refetch()
          Swal.fire("Deleted");
        });
      } else if (result.isDenied) {
        Swal.fire("Not Deleted");
      }
    });
  };
  return (
    <div>
                    <h1 className="text-3xl uppercase mt-10 font-semibold  text-purple-700 text-center">All Members are here</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>Auction</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, idx) => (
              <tr key={member._id} className="bg-base-200">
                <th>{idx + 1}</th>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>
                  <button
                    onClick={() => handleDelete(member._id)}
                    className="btn bg-red-700 text-white"
                  >
                    remove
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

export default ManageMembers;
