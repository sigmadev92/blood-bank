import React from "react";
import { useSelector } from "react-redux";

export default function MyProfile() {
  const { currentUser } = useSelector((state) => state.users);
  return (
    <div className="px-40">
      {currentUser.userType === "hospital" && (
        <h1 className="text-center">Hospital Details</h1>
      )}
      {currentUser.userType === "donor" && (
        <h1 className="text-center">Donor Details</h1>
      )}
      {currentUser.userType === "organization" && (
        <h1 className="text-center">Organization Details</h1>
      )}
      <div className="flex justify-center bg-blue-200">
        <ul className="">
          <li>
            Name :{" "}
            {currentUser.hospitalName ||
              currentUser.name ||
              currentUser.orgName}
          </li>
          {currentUser.userType !== "donor" && (
            <>
              <li>Address : {currentUser.address}</li>
              <li>Website: {currentUser.website}</li>
            </>
          )}
          <li>Email : {currentUser.email}</li>

          <li>Phone: {currentUser.phone}</li>
          <li>Joined At : {currentUser.createdAt}</li>
        </ul>
      </div>
    </div>
  );
}
