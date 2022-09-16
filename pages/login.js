import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { loginCMS } from "../config/cmsAuth";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const { user, setStrapiUser, login } = useAuth();
  const [data, setData] = useState({});

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Data: ", data);
    console.log(user);
    try {
      await login(data.email, data.password);
      const respData = await loginCMS(data.email, data.password);
      // console.log("Login SuccessFul !!", respData);
      // console.log("Before Login: ", user);
      setStrapiUser(respData);
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  function handleInputs(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log("Input: ", data);
  }

  return (
    <div className="w-75 mx-auto">
      <h1 className="text-center my-3 ">Login</h1>
      <form onSubmit={handleLogin}>
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
        <button type="submit" className="btn btn-primary">
          Login Now
        </button>
        <Link href="/register">
          <button className="btn btn-danger">Signup</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
