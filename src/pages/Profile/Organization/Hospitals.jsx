import { Table, message } from "antd";
import { useEffect, useState } from "react";
import { GetHospitalsOfOrg } from "../../../apicalls/inventory";

export default function Hospitals() {
  const [details, setDetails] = useState(null);
  async function getRecords() {
    try {
      const response = await GetHospitalsOfOrg();

      if (response.success) {
        setDetails(response.hospitalsData);
      }
    } catch (error) {
      message.error("Problems showing records");
    }
  }
  useEffect(() => {
    getRecords();
  }, []);
  const columns = [
    { title: "Hospital Name", dataIndex: "hospitalName" },

    { title: "Address", dataIndex: "address" },
    { title: "Website", dataIndex: "website" },
    { title: "Contact", dataIndex: "phone" },
    { title: "Hospital Email", dataIndex: "email" },
    { title: "Joined On", dataIndex: "createdAt" },
  ];
  return (
    <div className="p-3">
      <h1 className="text-center bg-blue-100">Your Associated Hospitals</h1>
      <Table
        dataSource={details}
        columns={columns}
        className="mx-[70px]"
      ></Table>
    </div>
  );
}
