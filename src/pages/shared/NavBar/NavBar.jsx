import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";



const NavBar = () => {

    const { user, signOutUser } = useAuth();


    // basic
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        if (user) {
            setProfilePhoto(user.photoURL);
            setUserName(user.displayName);
        }
    }, [user]);


    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                // console.log('user signOut successful');
                Swal.fire({
                    position: "center",
                    icon: 'warning',
                    title: 'Log out done!',
                    showConfirmButton: false,
                    timer: 1000
                    // confirmButtonText: 'ok'
                });
                // setProfilePhoto('');
                // setUserName('');
            })
            .catch(error => console.log('ERROR', error.message))
    }

    // basic




    return (
        <>
            <div className="navbar shadow-sm px-2.5 md:px-8 lg:px-16" style={{ backgroundColor: "#2865A0" }}>
                <div className="flex-1 text-white">
                    <a className="btn btn-ghost text-xl">FazTudo</a>
                </div>
                {
                    user &&
                    <>
                        <div className="flex gap-2">
                            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src={profilePhoto} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li>
                                        <a className="justify-between">
                                            {userName}
                                            <span className="badge badge-success">active</span>
                                        </a>
                                    </li>
                                    <li><a onClick={handleLogOut}>
                                        Logout
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </>
                }
            </div >
        </>
    );
};

export default NavBar;