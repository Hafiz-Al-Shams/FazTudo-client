import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";



const SocialLogin = () => {

    const { signInWithGoogle } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const navigate = useNavigate();


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    role: 'user',
                }
                // console.log('Login successful: ', result.user.email);
                // console.log('userInfo: ', userInfo);


                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        // console.log(res.data);
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: 'Google Login Successful',
                            showConfirmButton: false,
                            timer: 1000
                        });
                        // console.log('axios working !!!!yessssss!!!!', res.data.message);
                        navigate('/my-faztudo-board');
                    })

            })
            .catch(error => {
                console.log('ERROR', error.message);
            })
    }


    return (
        <div className=''>
            {/* Google */}
            <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5] sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
                <svg aria-label="Google logo" width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
            </button>
        </div>
    );
};

export default SocialLogin;