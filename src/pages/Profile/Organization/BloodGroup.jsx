import React, { useEffect, useState } from "react";
import { FetchBloodDetails } from "../../../apicalls/inventory";
export default function BloodGroup({ bloodGroup }) {
  const [details, setDetails] = useState(null);
  async function fetchDetails() {
    try {
      const response = await FetchBloodDetails(bloodGroup);
      if (response.success) setDetails(response.details);
      else console.log(response.message);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <div className="border-2 border-black text-center w-[80%] hover:bg-red-300">
      <h1 className="uppercase font-bold">{bloodGroup}</h1>
      {details !== null && (
        <>
          <h1>Units Donated : {details.donations}</h1>
          <h1>Units Consumed : {details.consumptions}</h1>
          <h1>Units Available : {details.unitsLeft}</h1>
        </>
      )}
    </div>
  );
}
