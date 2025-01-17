import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_api,
});
const useAxiosSecure = () => {
  const navigate = useNavigate()
  const {handleSignOut} = useContext(AuthContext)
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
    const status = error.response.status
    if(status === 401 || status === 403){
      handleSignOut()
      navigate('/login')
    }
      
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;