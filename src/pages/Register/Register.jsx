import { Button, Form, Input, Radio, message } from "antd";
import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import OrgHospRegister from "./OrgHospRegister";
import { LoginUser, RegisterUser, getCurrentUser } from "../../apicalls/users";
import { useDispatch } from "react-redux";
import { SetLoading } from "../../redux/loaderSlice";
import { getAntdInputValidation } from "../../utils/helpers";
export default function Register() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.Token !== undefined
  );
  const dispatch = useDispatch();
  const [type, setType] = useState("");
  const navigate = useNavigate();

  async function onFinish(values) {
    if (type === "") {
      message.error("First select the radio button");
      return;
    }
    try {
      dispatch(SetLoading(true));
      const response = await RegisterUser({ ...values, userType: type });
      dispatch(SetLoading(false));
      if (response.success) {
        console.log("success in making Account. Now getting auth.");
        localStorage.setItem("Token", "1");
        navigate("/");
      }
    } catch (error) {
      dispatch(SetLoading(false));
      console.log("error came");
      message.error(error.message);
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
          className="bg-white shadow w-full md:w-1/2 md:grid grid-cols-2  p-5 rounded gap-2 mb-[30px] mt-[50px] sm:flex "
          onFinish={(value) => onFinish(value)}
        >
          <h1 className="col-span-2 uppercase">
            {type ? type + " - " : ""}Registeration
          </h1>
          <hr className="col-span-2 mb-3" />
          <Radio.Group
            onChange={(e) => {
              console.log(type);
              setType(e.target.value);

              console.log(e.target.value);
              console.log(type);
            }}
          >
            <Radio value="donor">Donor</Radio>
            <Radio value="hospital">Hospital</Radio>
            <Radio value="organisation">Organisation</Radio>
          </Radio.Group>
          <hr className="col-span-2 mt-3" />

          {type === "donor" && (
            <>
              <Form.Item
                label="Name"
                name="name"
                rules={getAntdInputValidation()}
              >
                <Input type="text" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={getAntdInputValidation()}
              >
                <Input type="email" />
              </Form.Item>
              <Form.Item
                label="Phone"
                name="phone"
                rules={getAntdInputValidation()}
              >
                <Input type="tel" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={getAntdInputValidation()}
              >
                <Input type="password" />
              </Form.Item>
            </>
          )}
          {type !== "" && type !== "donor" && <OrgHospRegister type={type} />}

          <Button
            className="col-span-2 w-full uppercase bg-green-500"
            htmlType="submit"
            disabled={type === ""}
          >
            Register
          </Button>
          <div className="w-full  text-center">
            <Link to="/login" className="  col-span-2 text-center">
              Already have an account ? Login
            </Link>
          </div>
        </Form>
      )}
    </div>
  );
}
