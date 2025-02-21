import { useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";


const Home = () => {

    const { user } = useAuth();
    const navigate = useNavigate();


    // Redirect user and return early if user is logged in
    useEffect(() => {
        if (user) {
            navigate("/my-faztudo-board");
        }
    }, [user, navigate]);

    // If user is logged in, nothing will render
    if (user) return null;

    return (
        <div className="text-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-neutral-800 font-medium pt-12 md:pt-24 lg:pt-40 pb-3.5 md:pb-6 lg:pb-10 px-10">Welcome to FazTudo, Sign In to Continue!</h2>
            <SocialLogin></SocialLogin>
        </div>
    );




    // old code below

    // return (
    //     <>
    //         <div className="text-center">
    //             <h2 className="text-2xl md:text-4xl lg:text-5xl text-neutral-800 font-medium pt-12 md:pt-24 lg:pt-40 pb-3.5 md:pb-6 lg:pb-10 px-10">Welcome to FazTudo, Sign In to Continue!</h2>
    //             <SocialLogin></SocialLogin>
    //         </div>
    //     </>
    // );

    // old code above


};

export default Home;