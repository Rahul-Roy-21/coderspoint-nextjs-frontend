import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../context/AuthContext";
import NFWrapper from "../components/NFWrapper";

const Dashboard = () => {
  const router = useRouter();
  const { user, strapiUser, logout } = useAuth();
  console.log("Dashboard: ", user, strapiUser);
  return (
    <NFWrapper>
      <div className="m-3 vh-100">
        {user && strapiUser ? (
          <>
            <h2>
              Welcome{" "}
              {user ? strapiUser.user.username || user.email : "Anonymous-User"}
            </h2>
            <p>Email: {user.email}</p>
            <p>Strapi-ID: {strapiUser.user.id}</p>
            <p>JWT: {strapiUser.jwt}</p>
          </>
        ) : (
          <h1>
            Welcome {user ? user.displayName || user.email : "Anonymous-User"}
            !!
          </h1>
        )}

        <p>This route is Protected !!</p>

        <button
          className="btn btn-primary"
          onClick={() => {
            logout();
            // router.push("/login");
          }}
        >
          Logout
        </button>
      </div>
    </NFWrapper>
  );
};

export default Dashboard;
