import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import TaskCard from "./TaskCard";
import { useDroppable } from "@dnd-kit/core";



const Column = ({ title, tasks, category }) => {



    return (




        // old code below
        <div>
            <div className="card lg:w-96 bg-base-100 card-lg shadow-xl min-h-48 md:min-h-64 lg:min-h-96">
                <div className="card-body space-y-3 md:space-y-5">
                    <h2 className="card-title text-neutral-700 font-bold text-2xl">{title}</h2>

                    <SortableContext items={tasks.map(task => task.id)} strategy={verticalListSortingStrategy}>
                        {tasks.map(task => (
                            <TaskCard key={task.id} task={task} category={category} />
                        ))}
                    </SortableContext>

                    <div className="justify-end card-actions pt-1 pb-1 md:pb-2 lg:pb-3.5">
                        <button disabled className="btn">Add New Task</button>
                    </div>

                </div>
            </div>
        </div>
        // old code above



    );
};

export default Column;