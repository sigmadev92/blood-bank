import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../apicalls/users";
import { message } from "antd";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SetCurrentUser } from "../redux/userSlice";
export default function ProtectedRoutes() {
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getCurrentUserInfo = async () => {
    try {
      const response = await getCurrentUser();
      console.log(response);
      if (response.success) {
        dispatch(SetCurrentUser(response.Token));
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
