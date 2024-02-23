import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Register from "./pages/Register/Register";
import Login from "./pages/Login";
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Header from "./components/Header"
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
export default function App() {
  const {loading} = useSelector((state)=> state.loaders);
  return <main>
    {loading && <Spinner />}
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<ProtectedRoutes />} >
      <Route path="/" element={<Home />} />
      </Route>
      <Route path="/profile" element={<ProtectedRoutes />} >
      <Route path="/profile" element={<Profile />} />
      </Route>
      {/* open paths */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  </main>
   
   
  
}


