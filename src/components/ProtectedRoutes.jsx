import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../apicalls/users";
import { message } from "antd";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
export default function ProtectedRoutes() {
  const [currentUser, setCurrentUser] = useState(
    localStorage.Token !== undefined
  );
  const navigate = useNavigate();
  const getCurrentUserInfo = async () => {
    try {
      const response = await getCurrentUser();
      if (response.success) {
        setCurrentUser(true);

        message.success(response.message);
      } else {
        console.log(response);

        message.error("User Authentication failed");
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
      message.error("SOME API PROBLEM");
    }
  };
  useEffect(() => {
    if (localStorage.Token === undefined) getCurrentUserInfo();
  }, []);

  return { currentUser } ? <Outlet /> : <Navigate to="/login" />;
}
