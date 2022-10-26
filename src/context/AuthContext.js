import React, { useState, createContext } from 'react';
import {
   getAuth,
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
   const [user, setUser] = useState();
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
      return signOut(auth);
   }


   const authInfo = {
      user, setUser, createUser, googleSignIn, signInWithEmail,
      logOut, signInWithGithub
   }
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthContextProvider;