import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get("/announcements").then((res) => {
                    setAnnouncements(res.data);
    });
  }, []);
  return (
    <>
    <h1 className="text-4xl mt-20 mb-4 font-bold text-center uppercase text-purple-700">
        All Announcements is Here
      </h1>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>title</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {announcements.map((item, idx) => (
            <tr key={item._id} className="">
              <th>{idx + 1}</th>
              <td className="text-xl font-medium">{item.title}</td>
              <td className="text-xl">{item.description} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Announcement;
