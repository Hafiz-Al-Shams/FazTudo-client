import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 text-gray-800">
                <div className="text-center">
                    <h1 className="text-9xl font-extrabold drop-shadow-md" style={{ color: "#2865A0" }}>404</h1>
                    <p className="mt-4 mb-10 text-xl md:text-4xl font-semibold">Oops! It seems like you may have taken a wrong turn!</p>
                    <p className="mt-3 text-neutral/85 text-xl font-medium">{`Let's get you back home safely!`}</p>
                    <div className="mt-2">
                        <Link to="/my-faztudo-board" className="">
                            <button className="btn btn-wide btn-neutral">Back to Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;