import { Table, message } from "antd";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SetLoading } from "../../../redux/loaderSlice";
import { InventoryForHospitals } from "../../../apicalls/users";

export default function Inventory() {
  const [details, SetDetails] = useState(null);
  const dispatch = useDispatch();

  async function getInventory() {
    dispatch(SetLoading(true));
    try {
      const response = await InventoryForHospitals();

      dispatch(SetLoading(false));
      if (response.success) {
        SetDetails(response.orgData);
      }
    } catch (error) {
      console.log(error);
      dispatch(SetLoading(false));
      message.error("can't obtain records");
    }
  }
  useEffect(() => {
    getInventory();
  }, []);

  const cols = [
    { title: "Blood Group", dataIndex: "bloodGroup" },
    { title: "Units", dataIndex: "units" },
    { title: "Organization Email", dataIndex: "orgEmail" },
    {
      title: "Organization Name",
      dataIndex: "orgName",
    },
    {
      title: "Consumption Date",
      dataIndex: "createdAt",
    },
  ];

  return (
    <>
      <Table columns={cols} dataSource={details}></Table>
    </>
  );
}
