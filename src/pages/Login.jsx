import { Button, Form, Input, Radio, message } from "antd";
import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../apicalls/users";
import { getAntdInputValidation } from "../utils/helpers";

import { useDispatch } from "react-redux";
import { SetLoading } from "../redux/loaderSlice";
import { SetCurrentUser } from "../redux/userSlice";

export default function Login() {
  const dispatch = useDispatch();
  const [type, setType] = useState("donor");

  const navigate = useNavigate();
  const [isLoggedIn, SetIsLoggedIn] = useState(
    localStorage.getItem("Token") !== ""
  );
  async function onFinish(value) {
    try {
      dispatch(SetLoading(true));
      const response = await LoginUser({ ...value, userType: type });
      dispatch(SetLoading(false));
      if (response.success) {
        dispatch(SetCurrentUser(response.userData));
        console.log("LOGGED IN SUCCESSFULLY");
        message.success(
          response.message + ".  User Credentials Valid Till 1 day"
        );
        localStorage.setItem("Token", response.Token);

        navigate("/");
      } else {
        console.log(response.message);
        message.error(response.message);
      }
    } catch (error) {
      dispatch(SetLoading(false));
      console.log(error);
      message.error("Something went wrong");
    }
  }

  return (
    <div className="flex justify-center items-center bg-blue-400 min-h-screen p-5 md:p-0">
      {isLoggedIn ? (
        <div>
          <h1>
            You are already logged in . If you want to sign up for a new account
            , Please first log out.
          </h1>
          <button
            onClick={() => {
              localStorage.setItem("Token", "");
              navigate("/login");
            }}
            type="button"
            className="uppercase text-[20px] bg-green-300"
          >
            Log OUt
          </button>
        </div>
      ) : (
        <Form
          layout="vertical"
          className="bg-white shadow w-full md:w-1/2 md:grid grid-cols-1  p-5 rounded gap-2 mb-[30px] mt-[50px]"
          onFinish={(value) => onFinish(value)}
        >
          <h1 className=" uppercase">{type ? type + " - " : ""}Login</h1>
          <hr className="mb-3" />
          <Radio.Group
            onChange={(e) => {
              setType(e.target.value);
            }}
            value={type}
          >
            <Radio value="donor">Donor</Radio>
            <Radio value="hospital">Hospital</Radio>
            <Radio value="organisation">Organisation</Radio>
          </Radio.Group>
          <hr className="mt-3" />

          <Form.Item
            label="Email"
            name="email"
            rules={getAntdInputValidation()}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={getAntdInputValidation()}
          >
            <Input type="password" />
          </Form.Item>

          <Button
            className=" w-full uppercase bg-green-500"
            htmlType="submit"
            disabled={type === ""}
          >
            Login
          </Button>
          <div className="w-full  text-center">
            <Link to="/register" className="  col-span-2 text-center">
              Don't have an account ? Register.
            </Link>
          </div>
        </Form>
      )}
    </div>
  );
}
