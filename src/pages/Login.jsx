import { Button, Form, Input, Radio } from "antd";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export default function Register() {
  const [type, setType] = useState("");
  function onFinish(values) {
    console.log(values);
  }

  return (
    <div className="flex justify-center items-center bg-blue-400 min-h-screen p-5 md:p-0">
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
          <Radio value="organization">Organisation</Radio>
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
    </div>
  );
}
