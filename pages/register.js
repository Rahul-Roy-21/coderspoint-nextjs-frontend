import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { firestoreAddJWT, loginCMS, registerCMS } from "../config/cmsAuth";
import { useAuth } from "../context/AuthContext";
import {
  notifyError,
  notifySuccess,
  notifyWarning,
} from "../config/toastFunctions";

const Register = () => {
  const { user, signup, setStrapiUser } = useAuth();
  const [data, setData] = useState({});
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Data: ", data);
    // console.log(user);
    try {
      const fbResp = await signup(data.username, data.email, data.password);
      console.log("firebase SignUp Response: ", fbResp);
      const responseData = await registerCMS(
        data.username,
        data.email,
        data.password
      );
      // console.log("Succesfully Registered !!");
      console.log("RegisterCMS: ", responseData); // Error Handle like User ALready exists
      const respData = await loginCMS(data.email, data.password);
      console.log("LoginCMS: ", respData);

      setStrapiUser(respData);

      firestoreAddJWT(fbResp.user.uid, respData.jwt, respData.user);

      notifySuccess("Registration Successful !!");
      notifySuccess("Logging In... !!");
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          notifyError("Email is Invalid !!");
          break;
        case "auth/weak-password":
          notifyWarning("Password should be at least 6 characters");
          break;
        case "auth/email-already-in-use":
          notifyError("Email Already Taken !!");
          break;

        default:
          notifyError(error.code);
          break;
      }
    }
  };

  function handleInputs(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log("Input: ", data);
  }

  return (
    <div className="w-75 mx-auto">
      <h1 className="text-center my-3 ">Sign Up</h1>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail0">UserName</label>
          <input
            name="username"
            type="text"
            className="form-control"
            id="exampleInputEmail0"
            aria-describedby="emailHelp"
            placeholder="Enter username"
            onChange={handleInputs}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleInputs}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={handleInputs}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Register Now
        </button>
        <Link href="/login">
          <button className="btn btn-danger">
            Login, if already Registered
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Register;
