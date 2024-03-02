import { useState } from "react";
import Inventory from "./Inventory";
import Organizations from "./Organizations";
import MyProfile from "../MyProfile";

export default function Hospitals() {
  const [type, setType] = useState("1");

  return (
    <div className="p-3">
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
          Organizations
        </li>
        <li
          className={`cursor-pointer ${type === "3" && "bg-blue-400 p-2"}`}
          key="3"
          id="3"
          onClick={(e) => setType(e.target.id)}
        >
          Hospital Details
        </li>
      </ul>
      {type === "1" && <Inventory />}
      {type === "2" && <Organizations />}
      {type === "3" && <MyProfile />}
    </div>
  );
}
