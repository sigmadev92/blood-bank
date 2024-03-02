import { Table, message } from "antd";
import { useEffect, useState } from "react";
import InventoryForm from "./InventoryForm";

import { GetInventoryRecords } from "../../../apicalls/inventory";

export default function Inventory() {
  const [details, SetDetails] = useState(null);
  const [show, setShow] = useState(false);

  async function getInventory() {
    try {
      const response = await GetInventoryRecords();

      if (response.success) SetDetails(response.records);
    } catch (error) {
      console.log(error);

      message.error("can't obtain records");
    }
  }
  useEffect(() => {
    getInventory();
  }, []);

  const cols = [
    { title: "Inventory Type", dataIndex: "inventoryType" },
    {
      title: "Blood Group",
      dataIndex: "bloodGroup",
    },
    {
      title: "Units",
      dataIndex: "units",
    },
    {
      title: "Reference Email",
      dataIndex: "email",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
    },
  ];

  return (
    <div className="p-3">
      <button
        className="border-solid border-black border-2 p-2 hover:bg-green-400"
        onClick={() => setShow(true)}
      >
        Add Inventory
      </button>

      <Table columns={cols} dataSource={details} className="mx-[100px]"></Table>
      {show && <InventoryForm open={show} close={setShow} />}
    </div>
  );
}
