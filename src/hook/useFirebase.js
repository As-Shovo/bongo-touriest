import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';
import initilizeAuthentication from "../Firebase/firebase.init";

initilizeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();


    const signInUseGoogle = ()=>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        setIsLoading(false)
        return signInWithPopup(auth, googleProvider)
        
    };


    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user);
            }
            else{
                // User is sign Out
                setUser()
            }
            setIsLoading(false);
        })
    },[])

    const logOut = ()=>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{
            setUser('')
        })
        .finally(()=>setIsLoading(false))
    }



    return {
        signInUseGoogle,
        user,
        setIsLoading,
        isLoading,
        logOut
    }
};

export default useFirebase;