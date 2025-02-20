import SocialLogin from "../../components/SocialLogin/SocialLogin";


const Home = () => {
    return (
        <>
            <div className="text-center">
                <h2 className="text-2xl md:text-4xl lg:text-5xl text-neutral-800 font-medium pt-12 md:pt-24 lg:pt-40 pb-3.5 md:pb-6 lg:pb-10 px-10">Welcome to FazTudo, Sign In to Continue</h2>
                <SocialLogin></SocialLogin>
            </div>
        </>
    );
};

export default Home;