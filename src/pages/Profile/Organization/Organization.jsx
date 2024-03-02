import { useState } from "react";
import Inventory from "./Inventory";
import MyProfile from "../MyProfile";
import Donors from "./Donors";
import Hospitals from "./Hospitals";

export default function Organization() {
  const [type, setType] = useState("1");
  return (
    <>
      <ul className="flex space-x-3 text-sm">
        <li
          className={` cursor-pointer ${type === "1" && "bg-blue-400 p-2"}`}
          key="1"
          id="1"
          onClick={(e) => setType(e.target.id)}
        >
          Inventory
        </li>
        <li
          className={`cursor-pointer ${type === "2" && "bg-blue-400 p-2"}`}
          key="2"
          id="2"
          onClick={(e) => setType(e.target.id)}
        >
          Donors
        </li>
        <li
          className={`cursor-pointer ${type === "3" && "bg-blue-400 p-2"}`}
          key="3"
          id="3"
          onClick={(e) => setType(e.target.id)}
        >
          Hospitals
        </li>
        <li
          className={`cursor-pointer ${type === "4" && "bg-blue-400 p-2"}`}
          key="4"
          id="4"
          onClick={(e) => setType(e.target.id)}
        >
          Organization Details
        </li>
      </ul>

      {type === "1" && <Inventory />}
      {type === "2" && <Donors />}
      {type === "3" && <Hospitals />}
      {type === "4" && <MyProfile />}
    </>
  );
}
