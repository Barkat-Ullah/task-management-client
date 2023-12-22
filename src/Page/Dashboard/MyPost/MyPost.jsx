import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useGetTask from "../../../hooks/useGetTask";
import useTask from "../../../hooks/useTask";
import { Link } from "react-router-dom";

const MyPost = () => {
  const { user } = useAuth();
  const axiosPublic = useTask();
  const [tasks, refetch] = useGetTask();
  console.log(tasks);
  const userTasks = tasks?.filter((task) => task?.userEmail === user?.email);
  console.log(userTasks.length);

  const handleDeleteUser = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/tasks/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  //   const onDragEnd = (result) => {
  //     const { destination, source } = result;

  //     if (
  //       !destination ||
  //       (destination.droppableId === source.droppableId &&
  //         destination.index === source.index)
  //     ) {
  //       return;
  //     }

  //     const movedTask = userTasks[source.index];

  //     axiosPublic
  //       .patch(`/tasks/${movedTask.id}`, { status: destination.droppableId })
  //       .then((res) => {
  //         if (res.status === 200) {
  //           refetch();
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  return (
    <div>
      <h2 className="text-4xl text-center my-4">Total List of task</h2>
      <div className="flex p-2">
        <div className="w-1/3 border border-teal-500">
          <h2 className="text-center underline text-2xl">To Do</h2>

          <div>
            {userTasks.map((userTask) => (
              <div key={userTask._id} className="card bg-teal-100 m-2">
                <div className="card-body">
                  <div className="card-actions justify-end">
                    <button
                      onClick={() => handleDeleteUser(userTask._id)}
                      className="btn btn-square btn-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    <Link
                      to={`/dashboard/update/${userTask._id}`}
                      className="btn btn-square btn-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </Link>
                  </div>
                  <p className="text-xl">{userTask.title}</p>
                  <h2>Date: {userTask.date}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/3 border border-teal-500">
          <h2 className="text-center underline text-2xl">Ongoing</h2>
        </div>
        <div className="w-1/3 border border-teal-500">
          <h2 className="text-center underline text-2xl">Completed</h2>
        </div>
      </div>
    </div>
  );
};

export default MyPost;
