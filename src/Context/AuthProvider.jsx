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
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
const axiosPublic = useAxiosPublic()
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
    return updateProfile(auth.currentUser, {
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

      
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiosPublic.post('/jwt', userInfo)
            .then(res => {
                if (res.data.token) {
                    localStorage.setItem('access-token', res.data.token);
                    setLoading(false);
                }
            })
    }
    else {
        localStorage.removeItem('access-token');
        setLoading(false);
    }
      
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const AuthInfo = {
    user,
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
