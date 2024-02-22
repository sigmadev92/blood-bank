import { Button, Form, Input, Radio, message } from "antd";
import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../apicalls/users";

export default function Login() {
  const [type, setType] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.Token !== undefined
  );
  const navigate = useNavigate();

  async function onFinish(value) {
    try {
      const response = await LoginUser(value);
      if (response.success) {
        console.log("LOGGED IN SUCCESSFULLY");
        message.success(response.message);
        localStorage.setItem("Token", response.Token);
        setIsLoggedIn(true);
        message.success("User Credentials Valid Till 1 day");
        navigate("/");
      } else {
        console.log(response.message);
        message.error(response.message);
      }
    } catch (error) {
      console.log(error);
      message.error(error);
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
              localStorage.removeItem("Token");
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
          >
            <Radio value="donor">Donor</Radio>
            <Radio value="hospital">Hospital</Radio>
            <Radio value="organisation">Organisation</Radio>
          </Radio.Group>
          <hr className="mt-3" />

          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>

          <Button className=" w-full uppercase bg-green-500" htmlType="submit">
            Login
          </Button>
          <Link to="/register" className=" w-full text-center ">
            Don't have an account ? Register
          </Link>
        </Form>
      )}
    </div>
  );
}
