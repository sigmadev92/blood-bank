import { Table, message } from "antd";
import { useEffect, useState } from "react";
import { GetOrgs } from "../../../apicalls/users";

export default function Organisations() {
  const [details, setDetails] = useState(null);
  async function getRecords() {
    try {
      const response = await GetOrgs("donor");

      if (response.success) {
        setDetails(response.orgsData);
      }
    } catch (error) {
      console.log(error);
      message.error("Problems showing records");
    }
  }
  useEffect(() => {
    getRecords();
  }, []);
  const columns = [
    { title: "Email", dataIndex: "email" },
    { title: "Organisation Name", dataIndex: "orgName" },
    { title: "Contact", dataIndex: "phone" },
    { title: "Website", dataIndex: "website" },
    { title: "Joined On", dataIndex: "createdAt" },
  ];
  return (
    <div className="p-3">
      <h1 className="text-center bg-blue-100">
        Your Donations History with the Organizations
      </h1>
      <Table dataSource={details} columns={columns}></Table>
    </div>
  );
}
