import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
            })
    }
    return {
        user,
        signInUsingGoogle
    }

}

export default useFirebase;