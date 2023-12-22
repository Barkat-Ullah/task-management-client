// import { useForm } from "react-hook-form";
// import { FaBook } from "react-icons/fa";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useTask from "../../../hooks/useTask";
import Swal from "sweetalert2";

const AddPost = () => {
  const { user } = useAuth();
  // console.log("User:", user);
  const axiosPublic = useTask();

  //   const { register, handleSubmit } = useForm();

  const [startDate, setStartDate] = useState(new Date());

  //   const onSubmit = async(data) => {
  //     console.log("form submitted", data);
  //     console.log(data);
  //     const taskData = {
  //       userName: user?.displayName,
  //       userEmail: user?.email,
  //       userImage: user?.photoURL,
  //       taskName: data.task,
  //       category: data.category,
  //       details: data.taskDetails,
  //       deadline: data.date,
  //     };
  //     console.log(taskData);
  //   };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const taskData = {
      userName: user?.displayName,
      userEmail: user?.email,
      userImage: user?.photoURL,
      title: formData.get("title"),
      level: formData.get("level"),
      date: formData.get("date"),
      description: formData.get("description"),
    };
    const res = await axiosPublic.post("/tasks", taskData);
    if (res.data?.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${taskData?.title} is added to the Posts.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }

    console.log(taskData);
  };

  

  return (
    <div className="my-5 ml-5">

        <h2 className="text-center text-4xl font-bold">Add Your Task</h2>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Task Name*</span>
          </label>
          <input
            type="text"
            name="text"
            placeholder="Task Name"
            {...register("task", { required: true })}
            required
            className="input input-bordered input-info w-full"
          />
        </div>
        <div className="flex gap-6">
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              defaultValue=""
              {...register("category", { required: true })}
              className="select select-bordered select-info w-full"
            >
              <option  disabled selected>
                Select a tag
              </option>
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Task Details</span>
          </label>
          <textarea
            {...register("taskDetails")}
            className="textarea textarea-info textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <DatePicker
            className="input input-bordered input-info w-full mb-3"
            selected={startDate}
            {...register("date", { required: true })}
            onChange={(date) => setStartDate(date)}
          />
        </div>

        <button className="btn text-white duration-300 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-300 rounded w-full">
          Add Post <FaBook></FaBook>
        </button>
      </form> */}

      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            type="text"
            name="title"
            placeholder="Task Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <select
            name="level"
            className="select select-bordered md:w-full "
            required
          >
            <option value="" disabled>
              Level
            </option>
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>

        <div className="form-control">
          <DatePicker
            className="input input-bordered input-info w-full mb-3"
            selected={startDate}
            name="date"
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="form-control">
          <textarea
            name="description"
            className="textarea textarea-bordered"
            placeholder="task details"
          ></textarea>
        </div>
        <div className="form-control mt-4">
          <input
            type="submit"
            value="Create Task"
            className="btn text-white duration-300 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-300 rounded w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default AddPost;
