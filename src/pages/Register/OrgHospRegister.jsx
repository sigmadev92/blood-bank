import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

export default function OrgHospRegister({ type }) {
  return (
    <>
      <Form.Item
        label={type === "hospital" ? "Hospital Name" : "Organization Name"}
        name={type === "hospital" ? "hospitalName" : "orgName"}
      >
        <Input />
      </Form.Item>
      <Form.Item name="owner" label="Owner">
        <Input type="text" />
      </Form.Item>
      <Form.Item label="Email" name="email">
        <Input type="email" />
      </Form.Item>
      <Form.Item label="Phone" name="phone">
        <Input type="tel" />
      </Form.Item>
      <Form.Item label="Website" name="website">
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input type="password" />
      </Form.Item>
      <Form.Item label="Address" name="address">
        <TextArea className="col-span-2" />
      </Form.Item>
    </>
  );
}
