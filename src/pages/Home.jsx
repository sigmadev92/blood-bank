import { useSelector } from "react-redux";
import BloodGroup from "./Profile/Organization/BloodGroup";
import { useEffect, useState } from "react";
import { fetchBloodDetails } from "../apicalls/dashboard";
export default function Home() {
  const { currentUser } = useSelector((state) => state.users);
  const bloods = ["A+", "B+", "AB+", "AB-", "A-", "B-", "O+", "O-"];
  const [data, setData] = useState(null);

  async function BloodDetails() {
    try {
      const response = await fetchBloodDetails();
      if (response.success) setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    BloodDetails();
  }, []);

  return (
    <div>
      <h1
        className="text-center text-[40px]"
        onClick={() => console.log(currentUser)}
      >
        HOME
      </h1>
      {currentUser && <h1 className="text-center">{currentUser.email}</h1>}
      {/* {currentUser.userType === "organisation" && (
        <div className="grid  md:grid md:grid-cols-4 gap-2 px-[100px] mt-20">
          {bloods.map((type) => {
            return <BloodGroup bloodGroup={type} key={type} />;
          })}
        </div>
      )} */}
      {currentUser.userType === "organisation" && (
        <>
          <div className="md:grid md:grid-cols-4  md:px-[200px] gap-2 mt-5">
            {data &&
              data.map((grp, index) => {
                return (
                  <div
                    className="border-2 border-black text-center"
                    key={index}
                    id={index}
                  >
                    <h1 className="font-bold">{grp.bloodGroup}</h1>
                    <h1>Donations : {grp.totalIn}</h1>
                    <h1>Consumptions : {grp.totalOut}</h1>
                    <h1>Units Left : {grp.available}</h1>
                  </div>
                );
              })}
          </div>
          <div className="mt-5">
            <h1 className="text-center font-bold">5 recent invetories</h1>
          </div>
        </>
      )}
    </div>
  );
}
