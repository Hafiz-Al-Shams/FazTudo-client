import NavBar from "../pages/shared/NavBar/NavBar";
import { useState } from "react";
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import Column from "../components/SocialLogin/Column";
import Footer from "../pages/Footer";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../src/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";



const Board = () => {

    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();


    // old working code
    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/tasks`);
            return res.data;
        }
    });


    // new code for email query
    // const { data: tasks = [], refetch } = useQuery({
    //     queryKey: ['tasks', user.email], // Ensures query is updated when email changes
    //     queryFn: async () => {
    //         const res = await axiosPublic.get(`/tasks`, {
    //             params: { email: user.email }, // Pass email as a query parameter
    //         });
    //         return res.data;
    //     }
    // });


    // Handles drag end event
    const handleDragEnd = async (event) => {
        const { active, over } = event;
        if (!over) return;

        // Find the dragged task
        const draggedTask = tasks.find(task => task._id === active.id);
        const targetTask = tasks.find(task => task._id === over.id);

        if (!draggedTask || !targetTask) return;

        // If the category changed, update it
        if (draggedTask.category !== targetTask.category) {
            await updateTaskOnServer(draggedTask._id, targetTask.category);
        }

        // Refetch data to update UI
        refetch();
    };

    // Function to update MongoDB
    const updateTaskOnServer = async (taskId, newCategory) => {
        try {
            await axiosPublic.patch(`/tasks/${taskId}`, { category: newCategory });
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };


    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    )


    // react hook form below
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [isModalOpen, setIsModalOpen] = useState(false);



    const onSubmit = async (data) => {
        // console.log(data);

        const newTask = {
            title: data.title,
            description: data.description,
            category: data.category,
            user: user.email,
            time: new Date(),
        }

        // console.log(newTask);
        const taskRes = await axiosPublic.post('/tasks', newTask);
        // console.log(taskRes.data);

        if (taskRes.data.insertedId) {

            reset();
            refetch();
            setIsModalOpen(false);
            Swal.fire({
                position: "center",
                icon: "success",
                title: `${data.title} is added to the ${data.category}`,
                showConfirmButton: false,
                timer: 2000
            });
        }


    };



    return (
        <div>
            <NavBar></NavBar>
            <div className="min-h-screen bg-base-200 px-7 md:px-14 lg:px-28 pt-4 md:pt-7 lg:pt-12 pb-14 lg:pb-28">

                <p className="pb-1.5 md:pb-2.5 lg:pb-5 text-gray-600 text-2xl md:text-3xl lg:text-4xl text-center font-semibold">Total Tasks: {tasks.length}</p>
                <p className="bg-neutral-600/90 px-1 lg:w-6/12 mx-auto mt-3 lg:mt-0.5 mb-7 lg:mb-1.5 text-center text-white text-lg md:text-2xl py-4 lg:py-2.5">{`##Note## dnD works only one Column to another Column.`} <br /> {`***dnD inside same Column doesn't work!!!!***`}</p>

                {/* add task button */}
                <div className="pl-2.5 md:pl-5 lg:pl-7 pb-4 md:pb-6 lg:pb-5">
                    <button className="btn btn-S" onClick={() => setIsModalOpen(true)}>Add New Task</button>
                </div>
                <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                        <Column title="To-Do" tasks={tasks.filter(task => task.category === "To-Do")} category="To-Do" />


                        <Column title="In Progress" tasks={tasks.filter(task => task.category === "In Progress")} category="In Progress" />


                        <Column title="Done" tasks={tasks.filter(task => task.category === "Done")} category="Done" />
                    </div>
                </DndContext>

            </div>
            <Footer></Footer>


            {/* add new Task Modal below */}
            {isModalOpen && (
                <div className="fixed inset-0 flex justify-center items-center bg-black/50">
                    <div className="modal modal-open">
                        <div className="modal-box p-7 md:p-8 lg:p-10">

                            {/* Form */}
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Title"
                                        {...register("title", { required: "Title is required" })}
                                        className="input input-bordered w-full"
                                    />
                                    {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                                </div>

                                <div className="form-control my-4">
                                    <label className="label block pb-1">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea
                                        {...register("description", { required: "Description is required" })}
                                        className="textarea textarea-bordered h-5 md:h-7 lg:h-28 w-full"
                                        placeholder="Description"
                                    ></textarea>
                                    {errors.description && <p className="text-red-500">{errors.description.message}</p>}
                                </div>


                                {/* Category */}
                                <div className="form-control">
                                    <label className="label block pb-1">
                                        <span className="label-text">Select Category</span>
                                    </label>
                                    <select
                                        {...register("category", { required: "Please select a category" })}
                                        className="select select-bordered"
                                        defaultValue=""
                                    >
                                        <option value="">Category Name</option>
                                        <option value="To-Do">To-Do</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Done">Done</option>
                                    </select>
                                    {errors.category && <p className="text-red-500">{errors.category.message}</p>}
                                </div>



                                <div className="modal-action flex justify-between mt-4">
                                    <button
                                        type="button"
                                        className="btn bg-neutral-500/70 text-white"
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn btn-P">
                                        Add Task
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            {/* add new Task Modal above */}


        </div>
    );
};

export default Board;