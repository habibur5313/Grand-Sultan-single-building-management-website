import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
import auth from "../Firebase/firebase.init";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const SignUpEmailAndPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const SignInEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SignInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const Update_information = (name, photo) => {
    setLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const handleSignOut = () => {
    setLoading(true);
    signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      const user = { email: currentUser?.email };
      //       if (currentUser?.email) {
      //         axios
      //           .post(`${import.meta.env.VITE_server}/jwt`, user, {
      //             withCredentials: true,
      //           })
      //           .then((res) => {
      //             setLoading(true);
      //           });
      //       } else {
      //         axios
      //           .post(
      //             `${import.meta.env.VITE_server}/logout`,
      //             {},
      //             { withCredentials: true }
      //           )
      //           .then((res) => {
      //             setLoading(true);
      //           });
      //       }
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const AuthInfo = {
    user,
    setUser,
    SignInEmailAndPassword,
    SignUpEmailAndPassword,
    handleSignOut,
    SignInGoogle,
    Update_information,
    loading,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
