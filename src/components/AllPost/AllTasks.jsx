import useGetTask from "../../hooks/useGetTask";
import SingleTask from "./SingleTask/SingleTask";

const AllTasks = () => {
  const [tasks] = useGetTask();
  console.log(tasks);
  return (
    <div className="bg-base-200 py-6">
      <h2 className="text-4xl text-center font-bold">Task Management Posts</h2>
      <div className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  text-left">
        {tasks.map((task) => (
          <SingleTask key={task._id} task={task}></SingleTask>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
