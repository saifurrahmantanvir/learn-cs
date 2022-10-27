import React, { useState, createContext } from 'react';
import {
   getAuth,
   // onAuthStateChanged,
   createUserWithEmailAndPassword,
   GoogleAuthProvider,
   GithubAuthProvider,
   signInWithPopup,
   signInWithEmailAndPassword,
   signOut
} from "firebase/auth";
import app from '../firebase/firebase';

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [isLoggedIn, setIsLoggedIn] = useState(false)
   const googleProvider = new GoogleAuthProvider();
   const githubProvider = new GithubAuthProvider();

   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   }
   const googleSignIn = () => {
      return signInWithPopup(auth, googleProvider);
   }
   const signInWithGithub = () => {
      return signInWithPopup(auth, githubProvider);
   }

   const signInWithEmail = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   }

   const logOut = () => {
      localStorage.removeItem('user')
      setUser(null)
      setIsLoggedIn(false)
      return signOut(auth);
   }

   React.useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'))

      setUser(user)
      /*
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         setUser(user)
      })

      return () => {
         unsubscribe()
      }
      */
   }, [])


   const authInfo = {
      user, setUser, isLoggedIn, setIsLoggedIn, createUser, googleSignIn, signInWithEmail,
      logOut, signInWithGithub
   }
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthContextProvider;