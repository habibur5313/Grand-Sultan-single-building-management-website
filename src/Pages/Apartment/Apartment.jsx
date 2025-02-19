import React, { useEffect, useState } from "react";
import ApartmentCard from "./AparmentCard";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Apartment = () => {
    useEffect(() => {
      document.title = "Apartments | Grand Sultan";
    }, []);
  const [apartments, setApartments] = useState([]);
  const axiosPublic = useAxiosPublic();

  const handleSearchByRent = (e) => {
    e.preventDefault();
    const search = e.target.value;
    if (search.length === 0) {
      setApartments(data);
    } else {
      axiosPublic.get(`/search?search=${search}`).then((res) => {
        setApartments(res.data);
      });
    }
  };
  // pagination

  const [selectedCount, setSelectedCount] = useState(1);
  const [total, setTotal] = useState(0);
  // console.log(count);
  const countPages = Math.ceil(total / 6);
  const pages = [...Array(countPages).keys()];

  useEffect(() => {
    axiosPublic.get("/apartmentsCount").then((res) => {
      setTotal(res.data.total);
    });
  }, []);

  useEffect(() => {
    axiosPublic.get(`/apartments?page=${selectedCount}&limit=6`).then((res) => {
      setApartments(res.data);
    });
  }, [selectedCount]);

  const handlePrevPage = () => {
    if (selectedCount > 1) {
      setSelectedCount(selectedCount - 1);
    }
  };

  const handleNextPage = () => {
    if (selectedCount < countPages) {
      setSelectedCount(selectedCount + 1);
    }
  };

  const handleSort = e => {
    e.preventDefault()
    const sort = e.target.value
    axios.get(`${import.meta.env.VITE_api}/apartments/${sort}`)
    .then(res => {
      setApartments(res.data);
    
  }
)}
  return (
    <div>
      
        <div className=" flex flex-col sm:flex-row justify-end gap-4 mb-8">
          <input
            type="search"
            name="search"
            onChange={handleSearchByRent}
            placeholder="search by rent (less than or equal)"
            className="input text-black input-bordered h-14 max-w-md w-full mx-auto lg:mx-0"
            id=""
          />
        
        <select onChange={handleSort} className="select select-bordered h-14 max-w-md lg:max-w-xs mx-auto lg:mx-0 w-full">
        <option>sorting</option>
          <option>sort by price (Descending)</option>
          <option>sort by price (ascending)</option>
        </select>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {apartments.map((apartment) => (
          <ApartmentCard
            key={apartment._id}
            apartment={apartment}
          ></ApartmentCard>
        ))}
      </div>
      {apartments.length >= 1 && (
        <div className="flex items-center justify-center gap-3 mt-5">
          <button
            className="btn mx-3 bg-purple-700 sm:text-xl sm:font-medium text-white"
            onClick={handlePrevPage}
          >
            Prev
          </button>
          {pages.map((page) => (
            <button
              onClick={() => setSelectedCount(page + 1)}
              className={`${
                selectedCount === page + 1 ? "selected btn" : undefined
              } sm:text-xl sm:font-medium sm:m-3`}
              key={page}
            >
              {page + 1}
            </button>
          ))}
          <button
            className="btn mx-3 bg-purple-700 sm:text-xl sm:font-medium text-white"
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Apartment;
