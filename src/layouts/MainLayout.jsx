import { Outlet } from "react-router-dom";
import NavBar from "../pages/shared/NavBar/NavBar";
import Footer from "../pages/Footer";


const MainLayout = () => {


    return (
        <>
            <NavBar></NavBar>
            <div className="bg-base-200 min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;