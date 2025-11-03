import {  createContext, useEffect } from "react";
import { useState } from "react"
import app from "../FireBase/Firebase_confi";
import {
    createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged,
    signInWithEmailAndPassword, signInWithPopup, signOut,
    updateProfile
} from "firebase/auth"
export const ToysContext = createContext();

export const ToysProvider = ({ children }) => {
    const auth = getAuth(app)
    const [toys, setToys] = useState([])
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth,email,password)
    }
       useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
           setUser(currentUser)
                console.log("Current User:", currentUser);
      })  
     return () => {
       unSubscribe()
     }
       }, [])
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
     useEffect(() => {
         fetch('/Toys.json').then((res) => res.json()).then((data) => {
                 setToys(data);
                 setLoading(false);
             }).catch((error) => {
                 console.log(error)
                 setLoading(false);
         })
     }, [])
    const provider =new GoogleAuthProvider()
    const signInwithGoogle = () => {
        return signInWithPopup(auth,provider)
    }
    const updatePr = (displayName, photoUrl,about) => {
        return updateProfile(auth.currentUser, {
            displayName,photoUrl,about
        })
    }
    const logOut = () => {
        return signOut(auth)
    }
    const allData = {
        toys,loading,user,setUser,signIn,createUser,signInwithGoogle,logOut,setLoading,updatePr
    }
     return (
    <ToysContext.Provider value={allData}>
        {children}
    </ToysContext.Provider>
)
}
