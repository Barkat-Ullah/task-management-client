import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://task-management-server-2pz52kaob-barkat-ullah.vercel.app",
});
const useTask = () => {
  return axiosPublic;
};

export default useTask;
