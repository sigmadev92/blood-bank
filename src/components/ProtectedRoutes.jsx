import React, { useEffect, useState } from "react";

import { Navigate, Outlet } from "react-router-dom";
import { getCurrentUser } from "../apicalls/users";

import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { SetCurrentUser } from "../redux/userSlice";
export default function ProtectedRoutes() {
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const GetCurrentUser = async () => {
    try {
      const response = await getCurrentUser();
      if (response.success) {
        message.success(response.message);
        dispatch(SetCurrentUser(response.userData));
      } else {
        throw new Error(response.message);
      }
    } catch (err) {
      console.log(err);
      message.error("Something went wrong");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("Token")) GetCurrentUser();
  }, []);

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}
