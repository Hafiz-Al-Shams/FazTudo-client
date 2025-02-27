import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities"
import { Link } from "react-router-dom";



const TaskCard = ({ task }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: task._id,
        animateLayoutChanges: () => false, // Prevent slow animations
    });

    // Fixing the transform issue directly
    const style = {
        // transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : "none",
        // transition: isDragging ? "none" : "transform 0.12s cubic-bezier(0.3, 1.3, 0.3, 1)",
        // opacity: isDragging ? 0.8 : 1,
        // boxShadow: isDragging ? "0px 5px 15px rgba(0,0,0,0.2)" : "none",

        transition,
        transform: CSS.Transform.toString(transform),
        opacity: isDragging ? 0.8 : 1,
    };





    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="card card-xs lg:w-64 bg-base-300 shadow-md p-1 lg:p-2 cursor-grab active:cursor-grabbing task"
        >
            <div className="card-body">
                <h2 className="card-title">{task.title}</h2>

                {/* <p className="text-sm text-gray-600">{task.description}</p> */}

                {/* Action Buttons */}
                <div className="flex justify-end gap-2 mt-1">
                    <Link to={`/update-tasks/${task._id}`}>
                        <button

                            className="btn btn-sm md:btn-md btn-P">Details</button>
                    </Link>
                </div>
            </div>



        </div>
    );
};

export default TaskCard;