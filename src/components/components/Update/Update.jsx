import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// import useTask from "../../../hooks/useTask";
// import useGetTask from "../../../hooks/useGetTask";
import useTask from "../../../hooks/useTask";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

const Update = () => {
 const tasks = useLoaderData()
  const {
    date,
    description,
    level,
    title,
    _id,
  } = tasks;
  const axiosPublic = useTask()
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate()

  const handleUpdate = async(event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const updatedTaskData = {
      title: formData.get("title"),
      level: formData.get("level"),
      date: formData.get("date"),
      description: formData.get("description"),
    };
    const res = await axiosPublic.put(`/tasks/${_id}`, updatedTaskData);

    if (res.data.modifiedCount > 0) {
        
        Swal.fire({
          title: "Success!",
          text: "Task details successfully Updated",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate('/dashboard/post')
      }
  };
  return (
    <div className="my-5 ml-5">
      <h2 className="text-center text-4xl font-bold">Update Your Task</h2>

      <form className="card-body" onSubmit={handleUpdate}>
        <div className="form-control">
          <input
            type="text"
            name="title"
            defaultValue={title}
            placeholder="Task Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <select
            name="level"
            defaultValue={level}
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
            defaultValue={date}
            className="input input-bordered input-info w-full mb-3"
            selected={startDate}
            name="date"
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="form-control">
          <textarea
            defaultValue={description}
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

export default Update;
