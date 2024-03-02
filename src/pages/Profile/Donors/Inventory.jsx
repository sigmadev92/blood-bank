import { Table, message } from "antd";

import { useEffect, useState } from "react";

import { InventoryForDonors } from "../../../apicalls/users";

export default function Inventory() {
  const [details, SetDetails] = useState(null);

  async function getInventory() {
    try {
      const response = await InventoryForDonors();

      if (response.success) {
        SetDetails(response.orgData);
      }
    } catch (error) {
      console.log(error);

      message.error("can't obtain records");
    }
  }
  useEffect(() => {
    getInventory();
  }, []);

  const cols = [
    { title: "Organization Email", dataIndex: "orgEmail" },
    {
      title: "Organization Name",
      dataIndex: "orgName",
    },
    {
      title: "Donation Date",
      dataIndex: "createdAt",
    },
  ];

  return (
    <>
      <h1>
        This section tells that how many times you have donated blood to
        different organizations
      </h1>
      <Table columns={cols} dataSource={details}></Table>
    </>
  );
}
