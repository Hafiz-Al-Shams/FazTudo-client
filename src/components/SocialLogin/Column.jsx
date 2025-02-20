import { SortableContext } from "@dnd-kit/sortable";
import TaskCard from "./TaskCard";



const Column = ({ title, tasks, category }) => {
    return (
        <div>
            <div className="card lg:w-96 bg-base-100 card-lg shadow-xl">
                <div className="card-body space-y-5">
                    <h2 className="card-title text-neutral-700 font-bold text-2xl">{title}</h2>

                    <SortableContext items={tasks.map(task => task.id)}>
                        {tasks.map(task => (
                            <TaskCard key={task.id} task={task} category={category} />
                        ))}
                    </SortableContext>
                </div>
            </div>
        </div>
    );
};

export default Column;