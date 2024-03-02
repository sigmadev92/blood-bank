import { Form, Modal, Radio, message } from "antd";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { SetLoading } from "../../../redux/loaderSlice";
import { AddInventory } from "../../../apicalls/inventory";

export default function InventoryForm({ open, close }) {
  const [inventoryType, SetInventoryType] = useState("IN");
  const [bloodGroup, setBloodGroup] = useState("A+");
  const { currentUser } = useSelector((state) => state.users);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    console.log(values);
    dispatch(SetLoading(true));
    try {
      const response = await AddInventory({
        ...values,
        organization: currentUser._id,
      });
      dispatch(SetLoading(false));

      if (response.success) {
        message.success("Added to the database");
        close(false);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(SetLoading(false));
      console.log(error);
      message.error("Error came");
    }
  };

  return (
    <Modal
      title={"Add Inventory".toUpperCase()}
      open={open}
      onCancel={() => close(false)}
      centered
      onOk={() => {
        form.submit();
      }}
    >
      <Form layout="vertical" onFinish={(value) => onFinish(value)} form={form}>
        <Form.Item
          label="Inventory Type"
          name="inventoryType"
          initialValue={inventoryType}
          required
        >
          <Radio.Group
            name="inventoryType"
            value={inventoryType}
            onChange={(e) => {
              SetInventoryType(e.target.value);
            }}
          >
            <Radio value="IN">IN</Radio>
            <Radio value="OUT"> OUT</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Blood Group"
          name="bloodGroup"
          initialValue={"A+"}
          required
        >
          <select
            value={currentUser.bloodGroup}
            disabled={inventoryType === "IN"}
            onChange={(e) => setBloodGroup(e.target.value)}
          >
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </Form.Item>

        <Form.Item
          label={inventoryType === "OUT" ? "Hospital email" : "Donor Email"}
          name="email"
          initialValue=""
          required
        >
          <input type="email" value="" />
        </Form.Item>
        <Form.Item label="Units" name="units" required initialValue="1">
          <input type="number" disabled={inventoryType === "IN"} />
        </Form.Item>
        {inventoryType === "IN" &&
          "You should give your blood within 3 months of duration."}
      </Form>
    </Modal>
  );
}
