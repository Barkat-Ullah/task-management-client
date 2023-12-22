import { Draggable, Droppable } from "react-beautiful-dnd";
import useAuth from "../../../hooks/useAuth";
import useGetTask from "../../../hooks/useGetTask";

const Dnd = () => {
  const { user } = useAuth();
  const [tasks] = useGetTask();
  const userTasks = tasks?.filter((task) => task?.userEmail === user?.email);
  console.log(userTasks.length);
  return (
    <Droppable droppableId="todo">
      {(provided) => (
        <div
          className="w-1/3 border border-teal-500"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {userTasks.map((task, index) => (
            <Draggable draggableId={task.id} index={index} key={task.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  {/* Render your task content here */}
                  {/* For example: */}
                  <p>{task.title}</p>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Dnd;
