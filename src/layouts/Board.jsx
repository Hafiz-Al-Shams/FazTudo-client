import NavBar from "../pages/shared/NavBar/NavBar";
import { useState } from "react";
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import Column from "../components/SocialLogin/Column";
import Footer from "../pages/Footer";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../src/hooks/useAxiosPublic";



const Board = () => {


    const [tasks, setTasks] = useState([
        { id: "task-1", title: "demo ToDo-1", description: 'this is demo task description', category: 'To-Do' },
        { id: "task-2", title: "demo In-Progress-1", description: 'this is demo task description', category: 'In Progress' },
        { id: "task-3", title: "demo Done-1", description: 'this is demo task description', category: 'Done' },
        { id: "task-4", title: "demo ToDo-2", description: 'this is demo task description', category: 'To-Do' },
        { id: "task-5", title: "demo In-Progress-2", description: 'this is demo task description', category: 'In Progress' },
        { id: "task-6", title: "demo Done-2", description: 'this is demo task description', category: 'Done' },
        // { id: "task-7", title: "Task 7", description: 'this is demo task description', category: 'To-Do' },
        // { id: "task-8", title: "Task 8", description: 'this is demo task description', category: 'In Progress' },
        // { id: "task-9", title: "Task 9", description: 'this is demo task description', category: 'Done' },
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


    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    )


    // react hook form below
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const axiosPublic = useAxiosPublic();
    // const axiosSecure = useAxiosSecure();

    // const { data: categories = [], refetch } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/categories');
    //         return res.data;
    //     }
    // });



    // testing area
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const { register, handleSubmit, formState: { errors } } = useForm();

    // const onSubmit = async (data) => {
    //     // console.log(data);
    //     const imageFile = { image: data.image[0] }
    //     const res = await axiosPublic.post(image_hosting_api, imageFile, {
    //         headers: {
    //             'content-type': 'multipart/form-data'
    //         }
    //     });
    //     // console.log(res.data);
    //     if (res.data.success) {
    //         const newCategory = {
    //             name: data.name,
    //             count: 0,
    //             image: res.data.data.display_url,
    //             details: data.details,
    //         }
    //         // console.log(newCategory);
    //         const categoryRes = await axiosSecure.post('/categories', newCategory);
    //         // console.log(categoryRes.data);

    //         if (categoryRes.data.insertedId) {

    //             // adding to new DBcollection
    //             const categoryImage = {
    //                 categoryName: data.name,
    //                 imageUrl: res.data.data.display_url,
    //             };
    //             await axiosSecure.post('/categoryImages', categoryImage);



    //             reset();
    //             refetch();
    //             setIsModalOpen(false);
    //             Swal.fire({
    //                 position: "center",
    //                 icon: "success",
    //                 title: `${data.name} is added to the category`,
    //                 showConfirmButton: false,
    //                 timer: 1000
    //             });
    //         }
    //     }


    //     // setIsModalOpen(false); // Closing modal after submission
    // };


    // testing area





    // const handleDelete = (category) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then(async (result) => {
    //         if (result.isConfirmed) {
    //             const res = await axiosSecure.delete(`/categories/${category._id}`);

    //             if (res.data.deletedCount > 0) {

    //                 refetch();
    //                 Swal.fire({
    //                     position: "center-left",
    //                     icon: "success",
    //                     title: `${category.name} has been deleted`,
    //                     showConfirmButton: false,
    //                     timer: 1000
    //                 });
    //             }


    //         }
    //     });
    // }
    // react hook form above


    return (
        <div>
            <NavBar></NavBar>
            {/* <h5>my faztudo board</h5> */}



            {/* new working code below */}
            <div className="min-h-screen bg-base-200 px-7 md:px-14 lg:px-28 pt-4 md:pt-7 lg:pt-12 pb-14 lg:pb-28">

                {/* add task button */}
                <div className="pl-2.5 md:pl-5 lg:pl-7 pb-5 md:pb-8 lg:pb-10">
                    <button className="btn btn-S" onClick={() => setIsModalOpen(true)}>Add New Task</button>
                </div>

                <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
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




            {/* 

            <br />
            <br />
            <hr />
            <hr />
            <hr /> */}

            {/* old code below */}
            {/* <div className="min-h-screen bg-base-200 px-7 md:px-14 lg:px-28">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-14 lg:pb-0 pt-4 md:pt-7 lg:pt-12 gap-10"> */}


            {/* Card-1 -- To-Do */}
            {/* <div className="card lg:w-96 bg-base-100 card-lg shadow-xl">
                        <div className="card-body space-y-2.5 md:space-y-4 lg:space-y-5">
                            <h2 className="card-title mb-2.5 md:mb-3.5 lg:mb-7 text-neutral-700 font-bold text-2xl">To-Do</h2> */}

            {/* task card 1 */}
            {/* <div className="card lg:w-64 bg-base-300 card-xs shadow-md p-1 md:p-1.5 lg:p-2">
                                <div className="card-body">


                                    <input type="text" placeholder="Title" className="input input-sm" />
                                    <textarea placeholder="Description" className="textarea textarea-xs"></textarea>


                                    <div className="justify-end card-actions">
                                        <button className="btn btn-P">Add</button>
                                    </div>
                                </div>
                            </div> */}

            {/* task card 2(older) */}
            {/* <div className="card lg:w-64 bg-base-300 card-xs shadow-md p-1 md:p-1.5 lg:p-2">
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
                    </div> */}

            {/* Card-2 -- In Progress */}
            {/* <div className="card lg:w-96 bg-base-100 card-lg shadow-xl">
                        <div className="card-body space-y-2.5 md:space-y-4 lg:space-y-5">
                            <h2 className="card-title mb-2.5 md:mb-3.5 lg:mb-7 text-neutral-700 font-bold text-2xl">In Progress</h2> */}

            {/* task card 1 */}
            {/* <div className="card lg:w-64 bg-base-300 card-xs shadow-md p-1 md:p-1.5 lg:p-2">
                                <div className="card-body">


                                    <input type="text" placeholder="Title" className="input input-sm" />
                                    <textarea placeholder="Description" className="textarea textarea-xs"></textarea>


                                    <div className="justify-end card-actions">
                                        <button className="btn btn-P">Add</button>
                                    </div>
                                </div>
                            </div> */}

            {/* task card 2 */}
            {/* <div className="card lg:w-64 bg-base-300 card-xs shadow-md p-1 md:p-1.5 lg:p-2">
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
                    </div> */}

            {/* Card-3 -- Done */}
            {/* <div className="card lg:w-96 bg-base-100 card-lg shadow-xl">
                        <div className="card-body space-y-2.5 md:space-y-4 lg:space-y-5">
                            <h2 className="card-title mb-2.5 md:mb-3.5 lg:mb-7 text-neutral-700 font-bold text-2xl">Done</h2> */}

            {/* task card 1 */}
            {/* <div className="card lg:w-64 bg-base-300 card-xs shadow-md p-1 md:p-1.5 lg:p-2">
                                <div className="card-body">


                                    <input type="text" placeholder="Title" className="input input-sm" />
                                    <textarea placeholder="Description" className="textarea textarea-xs"></textarea>


                                    <div className="justify-end card-actions">
                                        <button className="btn btn-P">Add</button>
                                    </div>
                                </div>
                            </div> */}

            {/* task card 2 */}
            {/* <div className="card lg:w-64 bg-base-300 card-xs shadow-md p-1 md:p-1.5 lg:p-2">
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
            </div> */}
            {/* old code above */}





            <Footer></Footer>


            {/* add new Task Modal below */}
            {isModalOpen && (
                <div className="fixed inset-0 flex justify-center items-center bg-white/25">
                    <div className="modal modal-open">
                        <div className="modal-box p-7 md:p-8 lg:p-10">

                            {/* Form */}
                            <form
                            // onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Title"
                                        {...register("name", { required: "Category Name is required" })}
                                        className="input input-bordered w-full"
                                    />
                                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                                </div>

                                <div className="form-control my-4">
                                    <label className="label block pb-1">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea
                                        {...register("details", { required: "Details are required" })}
                                        className="textarea textarea-bordered h-5 md:h-7 lg:h-28 w-full"
                                        placeholder="Description"
                                    ></textarea>
                                    {errors.details && <p className="text-red-500">{errors.details.message}</p>}
                                </div>


                                {/* Category */}
                                <div className="form-control">
                                    <label className="label block pb-1">
                                        <span className="label-text">Select Category</span>
                                    </label>
                                    <select
                                        {...register("company", { required: "Please select a category" })}
                                        className="select select-bordered"
                                        defaultValue=""
                                    >
                                        <option value="">Category Name</option>
                                        <option value="To-Do">To-Do</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Done">Done</option>
                                    </select>
                                    {errors.company && <p className="text-red-500">{errors.company.message}</p>}
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