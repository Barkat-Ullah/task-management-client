import { useQuery } from "@tanstack/react-query";
import useTask from "./useTask";

const useGetTask = () => {
  const axiosPublic = useTask();
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tasks");
      console.log(res.data);
      return res.data;
    },
  });

  return [tasks, refetch];
};

export default useGetTask;
