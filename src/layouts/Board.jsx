import NavBar from "../pages/shared/NavBar/NavBar";
import { useState } from "react";
import { closestCorners, DndContext } from "@dnd-kit/core";
import Column from "../components/SocialLogin/Column";
import Footer from "../pages/Footer";



const Board = () => {


    const [tasks, setTasks] = useState([
        { id: "task-1", title: "Task 1", description: 'this is demo task description', category: 'To-Do' },
        { id: "task-2", title: "Task 2", description: 'this is demo task description', category: 'In Progress' },
        { id: "task-3", title: "Task 3", description: 'this is demo task description', category: 'Done' },
        { id: "task-4", title: "Task 4", description: 'this is demo task description', category: 'To-Do' },
        { id: "task-5", title: "Task 5", description: 'this is demo task description', category: 'In Progress' },
        { id: "task-6", title: "Task 6", description: 'this is demo task description', category: 'Done' },
        { id: "task-7", title: "Task 7", description: 'this is demo task description', category: 'To-Do' },
        { id: "task-8", title: "Task 8", description: 'this is demo task description', category: 'In Progress' },
        { id: "task-9", title: "Task 9", description: 'this is demo task description', category: 'Done' },
    ]);

    // Handles drag end event
    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (!over) return;

        setTasks((prevTasks) => {
            let updatedTasks = [...prevTasks];

            const draggedTaskIndex = updatedTasks.findIndex(task => task.id === active.id);
            const targetTaskIndex = updatedTasks.findIndex(task => task.id === over.id);

            if (draggedTaskIndex === -1) return prevTasks;

            // If dragged onto a different category, update category
            if (updatedTasks[draggedTaskIndex].category !== updatedTasks[targetTaskIndex]?.category) {
                updatedTasks[draggedTaskIndex].category = updatedTasks[targetTaskIndex].category;
            }

            // Reorder within category
            const [movedTask] = updatedTasks.splice(draggedTaskIndex, 1);
            updatedTasks.splice(targetTaskIndex, 0, movedTask);

            return updatedTasks;
        });
    };


    return (
        <div>
            <NavBar></NavBar>
            {/* <h5>my faztudo board</h5> */}



            {/* new working code below */}
            <div className="min-h-screen bg-base-200 px-7 md:px-14 lg:px-28 pt-4 md:pt-7 lg:pt-12 pb-14 lg:pb-28">

                <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* To-Do Column */}
                        <Column title="To-Do" tasks={tasks.filter(task => task.category === "To-Do")} category="To-Do" />

                        {/* In Progress Column */}
                        <Column title="In Progress" tasks={tasks.filter(task => task.category === "In Progress")} category="In Progress" />

                        {/* Done Column */}
                        <Column title="Done" tasks={tasks.filter(task => task.category === "Done")} category="Done" />
                    </div>
                </DndContext>
            </div>

            {/* new working code above */}




            <br />
            <br />
            <hr />
            <hr />
            <hr />

            {/* old code below */}
            <div className="min-h-screen bg-base-200 px-7 md:px-14 lg:px-28">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-14 lg:pb-0 pt-4 md:pt-7 lg:pt-12 gap-10">


                    {/* Card-1 -- To-Do */}
                    <div className="card lg:w-96 bg-base-100 card-lg shadow-xl">
                        <div className="card-body space-y-2.5 md:space-y-4 lg:space-y-5">
                            <h2 className="card-title mb-2.5 md:mb-3.5 lg:mb-7 text-neutral-700 font-bold text-2xl">To-Do</h2>

                            {/* task card 1 */}
                            <div className="card lg:w-64 bg-base-300 card-xs shadow-md p-1 md:p-1.5 lg:p-2">
                                <div className="card-body">


                                    <input type="text" placeholder="Title" className="input input-sm" />
                                    <textarea placeholder="Description" className="textarea textarea-xs"></textarea>


                                    <div className="justify-end card-actions">
                                        <button className="btn btn-P">Add</button>
                                    </div>
                                </div>
                            </div>

                            {/* task card 2(older) */}
                            <div className="card lg:w-64 bg-base-300 card-xs shadow-md p-1 md:p-1.5 lg:p-2">
                                <div className="card-body">
                                    <h2 className="card-title pb-1.5 md:pb-3">{`Title(Task Name)`}</h2>
                                    <div className="justify-end card-actions">
                                        <button className="btn btn-P btn-sm">Edit</button>
                                        <button className="btn btn-sm btn-D">Delete</button>
                                    </div>
                                </div>
                            </div>



                            <div className="justify-end card-actions pt-1 md:pt-2 lg:pt-3.5 pb-2.5 md:pb-10 lg:pb-16">
                                <button className="btn btn-S">Add New Task</button>
                            </div>
                        </div>
                    </div>

                    {/* Card-2 -- In Progress */}
                    <div className="card lg:w-96 bg-base-100 card-lg shadow-xl">
                        <div className="card-body space-y-2.5 md:space-y-4 lg:space-y-5">
                            <h2 className="card-title mb-2.5 md:mb-3.5 lg:mb-7 text-neutral-700 font-bold text-2xl">In Progress</h2>

                            {/* task card 1 */}
                            <div className="card lg:w-64 bg-base-300 card-xs shadow-md p-1 md:p-1.5 lg:p-2">
                                <div className="card-body">


                                    <input type="text" placeholder="Title" className="input input-sm" />
                                    <textarea placeholder="Description" className="textarea textarea-xs"></textarea>


                                    <div className="justify-end card-actions">
                                        <button className="btn btn-P">Add</button>
                                    </div>
                                </div>
                            </div>

                            {/* task card 2 */}
                            <div className="card lg:w-64 bg-base-300 card-xs shadow-md p-1 md:p-1.5 lg:p-2">
                                <div className="card-body">
                                    <h2 className="card-title pb-1.5 md:pb-3">{`Title(Task Name)`}</h2>
                                    <div className="justify-end card-actions">
                                        <button className="btn btn-P btn-sm">Edit</button>
                                        <button className="btn btn-sm btn-D">Delete</button>
                                    </div>
                                </div>
                            </div>



                            <div className="justify-end card-actions pt-1 md:pt-2 lg:pt-3.5 pb-2.5 md:pb-10 lg:pb-16">
                                <button className="btn btn-S">Add New Task</button>
                            </div>
                        </div>
                    </div>

                    {/* Card-3 -- Done */}
                    <div className="card lg:w-96 bg-base-100 card-lg shadow-xl">
                        <div className="card-body space-y-2.5 md:space-y-4 lg:space-y-5">
                            <h2 className="card-title mb-2.5 md:mb-3.5 lg:mb-7 text-neutral-700 font-bold text-2xl">Done</h2>

                            {/* task card 1 */}
                            <div className="card lg:w-64 bg-base-300 card-xs shadow-md p-1 md:p-1.5 lg:p-2">
                                <div className="card-body">


                                    <input type="text" placeholder="Title" className="input input-sm" />
                                    <textarea placeholder="Description" className="textarea textarea-xs"></textarea>


                                    <div className="justify-end card-actions">
                                        <button className="btn btn-P">Add</button>
                                    </div>
                                </div>
                            </div>

                            {/* task card 2 */}
                            <div className="card lg:w-64 bg-base-300 card-xs shadow-md p-1 md:p-1.5 lg:p-2">
                                <div className="card-body">
                                    <h2 className="card-title pb-1.5 md:pb-3">{`Title(Task Name)`}</h2>
                                    <div className="justify-end card-actions">
                                        <button className="btn btn-P btn-sm">Edit</button>
                                        <button className="btn btn-sm btn-D">Delete</button>
                                    </div>
                                </div>
                            </div>



                            <div className="justify-end card-actions pt-1 md:pt-2 lg:pt-3.5 pb-2.5 md:pb-10 lg:pb-16">
                                <button className="btn btn-S">Add New Task</button>
                            </div>
                        </div>
                    </div>





                </div>
            </div>
            {/* old code above */}



            <Footer></Footer>
        </div>
    );
};

export default Board;