import { Outlet } from "react-router-dom";
import NavBar from "../pages/shared/NavBar/NavBar";


const MainLayout = () => {


    return (
        <>
            <NavBar></NavBar>
            <div className="bg-base-200 min-h-screen">
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default MainLayout;