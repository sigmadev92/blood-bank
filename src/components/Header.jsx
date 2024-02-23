import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 z-9">
      <header className="bg-white flex shadow justify-around py-2">
        <div className="w-[50%]">
          <h1 className="uppercase text-red-500 text-full font-bold">
            Shey Blood Bank
          </h1>
        </div>
        <div className="w-50%">
          <ul className="flex space-x-6 ">
            {localStorage.Token !== undefined ? (
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
      </header>
    </div>
  );
}
