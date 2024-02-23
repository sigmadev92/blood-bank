import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { currentUser } = useSelector((state) => state.users);
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-center text-[40px]">HOME</h1>
      <button
        className="bg-red-400 px-2 py-1 ml-[20px] uppercase hover:bg-blue-400"
        type="button"
        onClick={() => {
          localStorage.removeItem("Token");
          navigate("/login");
        }}
      >
        Log out
      </button>
      <h1>{currentUser && currentUser.email}</h1>
    </div>
  );
}
