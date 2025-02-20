import NavBar from "../pages/shared/NavBar/NavBar";



const Board = () => {
    return (
        <div>
            <NavBar></NavBar>
            {/* <h5>my faztudo board</h5> */}

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

        </div>
    );
};

export default Board;