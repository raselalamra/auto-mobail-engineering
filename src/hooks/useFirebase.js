import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Pages/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signINUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
        })
        .finally(() => setIsLoading(false));
        
    }

    // observe user state change
    useEffect(() =>{
      const unSubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unSubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(() =>{ })
        .finally(() => isLoading(false));
    }

    return {
        user,
        isLoading,
        signINUsingGoogle,
        logOut

    }

}

export default useFirebase;