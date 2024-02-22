import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Profile</h1>
      <button
        type="button"
        className="bg-green-300"
        onClick={() => {
          localStorage.removeItem("Token");
          navigate("/login");
        }}
      >
        Log out
      </button>
    </div>
  );
}
