import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";
import Loader from "../components/Loader";
import { firestoreGetJWT } from "../config/cmsAuth";

const AuthContext = createContext([]);

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [strapiUser, setStrapiUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log("AuthCtx Init", user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      console.log("Auth Changed !!!", authUser);

      const resetStrapiUser = async (uid) => {
        const jwtData = await firestoreGetJWT(uid);
        if (jwtData) {
          console.log("jwtData.jwt:", jwtData.jwt);
          setStrapiUser(jwtData);
        }
      };

      if (authUser) {
        const { uid, email, displayName } = authUser;
        setUser({ uid, email, displayName });
        resetStrapiUser(uid);
      } else {
        setStrapiUser(null);
        setUser(null);
      }

      console.log("Before Loading", isLoading);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signup = (username, email, password) => {
    // return () => {
    //   // createUserWithEmailAndPassword(auth, email, password).then(() => {
    //   //   registerCMS(username, email, password);
    //   // });
    //   createUserWithEmailAndPassword(auth, email, password);
    //   registerCMS(username, email, password);
    // };
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    // return () => {
    //   signInWithEmailAndPassword(auth, email, password);
    //   loginCMS(email, password);
    // };
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{ user, strapiUser, setStrapiUser, signup, login, logout }}
    >
      {isLoading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};
