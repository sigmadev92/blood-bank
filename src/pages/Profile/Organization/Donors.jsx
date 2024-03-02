import { Table, message } from "antd";
import { useEffect, useState } from "react";
import { GetDonorsOfOrg } from "../../../apicalls/inventory";

export default function Donors() {
  const [details, setDetails] = useState(null);
  async function getRecords() {
    try {
      const response = await GetDonorsOfOrg();

      if (response.success) {
        setDetails(response.donorsData);
      }
    } catch (error) {
      message.error("Problems showing records");
    }
  }
  useEffect(() => {
    getRecords();
  }, []);
  const columns = [
    { title: "Donor Name", dataIndex: "name" },

    { title: "Blood Group", dataIndex: "bloodGroup" },
    { title: "Contact", dataIndex: "phone" },
    { title: "Donor Email", dataIndex: "email" },
    { title: "Joined On", dataIndex: "createdAt" },
  ];
  return (
    <div className="p-3">
      <h1 className="text-center bg-blue-100">Your Associated Donors</h1>
      <Table
        dataSource={details}
        columns={columns}
        className="mx-[70px]"
      ></Table>
    </div>
  );
}
