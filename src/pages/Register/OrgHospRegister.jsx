import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { getAntdInputValidation } from "../../utils/helpers";

export default function OrgHospRegister({ type }) {
  return (
    <>
      <Form.Item
        label={type === "hospital" ? "Hospital Name" : "Organization Name"}
        name={type === "hospital" ? "hospitalName" : "orgName"}
        rules={getAntdInputValidation()}
      >
        <Input />
      </Form.Item>
      <Form.Item name="owner" label="Owner" rules={getAntdInputValidation()}>
        <Input type="text" />
      </Form.Item>
      <Form.Item label="Email" name="email" rules={getAntdInputValidation()}>
        <Input type="email" />
      </Form.Item>
      <Form.Item label="Phone" name="phone" rules={getAntdInputValidation()}>
        <Input type="tel" />
      </Form.Item>
      <Form.Item
        label="Website"
        name="website"
        rules={getAntdInputValidation()}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={getAntdInputValidation()}
      >
        <Input type="password" />
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        rules={getAntdInputValidation()}
      >
        <TextArea className="col-span-2" />
      </Form.Item>
    </>
  );
}
