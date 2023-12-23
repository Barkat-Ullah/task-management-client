import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://task-management-server-e1y6401g3-barkat-ullah.vercel.app",
});
const useTask = () => {
  return axiosPublic;
};

export default useTask;
