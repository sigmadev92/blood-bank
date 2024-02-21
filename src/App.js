import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Register from "./pages/Register/Register";
import Login from "./pages/Login";
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Header from "./components/Header"

export default function App() {
  return <main>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  </main>
   
   
  
}


