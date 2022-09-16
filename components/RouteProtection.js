import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const RouteProtection = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      console.log("Cannot access Dashboard");
      router.push("/login");
    }
  }, [router, user]);

  return <>{user ? children : null}</>;
};

export default RouteProtection;
