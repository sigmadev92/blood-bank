import { useSelector } from "react-redux";
import Organization from "./Organization/Organization";
import Donors from "./Donors/Donors";
import Hospitals from "./Hosptals/Hospitals";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.users);
  return (
    <div className="p-5">
      {currentUser.userType === "organisation" && <Organization />}

      {currentUser.userType === "donor" && <Donors />}

      {currentUser.userType === "hospital" && <Hospitals />}
    </div>
  );
}
