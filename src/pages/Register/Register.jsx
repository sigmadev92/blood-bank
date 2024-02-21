import { Button, Form, Input, Radio } from "antd";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import OrgHospRegister from "./OrgHospRegister";
export default function Register() {
  const [type, setType] = useState("");
  function onFinish(values) {
    console.log(values);
  }

  return (
    <div className="flex justify-center items-center bg-blue-400 min-h-screen p-5 md:p-0">
      <Form
        layout="vertical"
        className="bg-white shadow w-full md:w-1/2 md:grid grid-cols-2  p-5 rounded gap-2 mb-[30px] mt-[50px]"
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
          <Radio value="organization">Organisation</Radio>
        </Radio.Group>
        <hr className="col-span-2 mt-3" />

        {type === "donor" && (
          <>
            <Form.Item label="Name" name="name">
              <Input type="text" />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input type="email" />
            </Form.Item>
            <Form.Item label="Phone" name="phone">
              <Input type="tel" />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>
          </>
        )}
        {type !== "" && type !== "donor" && <OrgHospRegister type={type} />}

        <Button
          className="col-span-2 w-full uppercase bg-green-500"
          htmlType="submit"
        >
          Register
        </Button>
        <Link to="/login" className="  col-span-2 text-center ">
          Already have an account ? Login
        </Link>
      </Form>
    </div>
  );
}
