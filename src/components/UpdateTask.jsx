import { useLoaderData, useNavigate } from "react-router-dom";
import NavBar from "../pages/shared/NavBar/NavBar";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";



const UpdateTask = () => {

    const { _id, title, description, category } = useLoaderData();



    // code from 27th february below
    const navigate = useNavigate();


    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        // console.log(data);
        const updatedTask = {
            title: data.title,
            description: data.description,
            category: data.category,

        }
        // console.log(updatedCategory);
        const updateRes = await axiosPublic.patch(`/update-task/${_id}`, updatedTask);
        // console.log(cateUpdateRes.data);
        if (updateRes.data.modifiedCount > 0) {
            reset();
            Swal.fire({
                position: "top",
                icon: "success",
                title: `UPDATED`,
                showConfirmButton: false,
                timer: 1000
            });
            navigate('/my-tudo-board');
        }
    };


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.delete(`/tasks/${id}`);
                navigate('/my-tudo-board');
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        position: "center-right",
                        icon: "success",
                        title: `${title} has been deleted`,
                        showConfirmButton: false,
                        timer: 1000
                    });
                }


            }
        });
    }
    // code from 27th february above



    return (
        <>
            <NavBar></NavBar>
            <div className="max-w-5xl mx-auto mb-10 lg:mb-0">
                <h3 className="text-xl md:text-2xl lg:text-3xl my-3 md:my-5 lg:my-9 font-semibold px-9 lg:px-0">Update {title} from <span className="text-gray-600">{category}</span></h3>
                <div className="px-9 lg:px-0">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control mb-4">

                            <legend className="fieldset-legend">Title</legend>

                            <textarea defaultValue={title} {...register("title", { required: true })} className="textarea textarea-bordered h-16"></textarea>
                        </div>



                        <div className="form-control mb-4">
                            <legend className="fieldset-legend">Description</legend>
                            <textarea defaultValue={description} {...register("description", { required: true })} className="textarea textarea-bordered h-28"></textarea>
                        </div>

                        {/* Category */}
                        <div className="form-control">
                            <label className="label block pb-1">
                                <span className="label-text">Update Category</span>
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

                        <button className="btn btn-P mt-2 md:mt-3 lg:mt-4">
                            Update Task
                        </button>
                    </form>
                    <div className="">
                        <button onClick={() => handleDelete(_id)} className="btn bg-neutral-300 btn-block mt-4 lg:mt-5">
                            Delete Task
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateTask;