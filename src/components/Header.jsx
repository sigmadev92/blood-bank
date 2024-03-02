import { Link, useNavigate } from "react-router-dom";
import { getLoggedInUserName } from "../utils/helpers";
import { SetCurrentUser } from "../redux/userSlice";

import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.users);

  return (
    <div className="sticky top-0 z-9">
      <header className="bg-white flex shadow justify-around py-2">
        <div className="w-[50%] font-bold">
          <h1 className="uppercase text-red-500 mb-[-8px] text-full font-bold ">
            Shey Blood Bank
          </h1>
          {currentUser !== null && (
            <span className="uppercase text-xs ">{currentUser.userType}</span>
          )}
        </div>
        <div className="w-50%">
          <ul className="flex space-x-6 ">
            {currentUser !== null ? (
              <>
                {" "}
                <li className="hover:text-blue-400">
                  <Link to="/">Home</Link>{" "}
                </li>
                <li className="hover:text-blue-400">
                  <Link to="/profile">Profile</Link>{" "}
                </li>
              </>
            ) : (
              <li className="hover:text-blue-400">
                <Link to="/login">Login</Link>{" "}
              </li>
            )}
          </ul>
        </div>
        {currentUser !== null && (
          <div>
            <span className="text-red-600 font-bold">
              {getLoggedInUserName(currentUser)}
            </span>
            <br />
            <button
              className="text-xs text-center w-full font-bold text-white bg-blue-300 hover:bg-black"
              onClick={() => {
                localStorage.setItem("Token", "");
                dispatch(SetCurrentUser(null));
                navigate("/login");
              }}
            >
              LOG OUT
            </button>
          </div>
        )}
      </header>
    </div>
  );
}
