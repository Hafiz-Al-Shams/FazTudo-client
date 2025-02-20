import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.init";
import AuthContext from "./AuthContext";
import useAxiosPublic from "../../hooks/useAxiosPublic";



const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            // if (currentUser) {
            //     const userInfo = { email: currentUser.email };
            //     axiosPublic.post('/jwt', userInfo)
            //         .then(res => {
            //             // if (res.data.token) {
            //             //     localStorage.setItem('access-token', res.data.token);
            //                 setLoading(false);
            //             // }
            //         })
            // }
            // else {
            //     localStorage.removeItem('access-token');
            //     setLoading(false);
            // }
            // setLoading(false);
            // console.log('state captured', currentUser);
        })

        return () => {
            unSubscribe();
        }

    }, [axiosPublic])



    const authInfo = {
        user,
        loading,
        signInWithGoogle,
        signOutUser,

    }

    // console.log(user);


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;