import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Header from "./components/Header"

export default function App() {
  return <main>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" elemen={<Home />} />
      <Route path="/profile" elemen={<Profile />} />
      <Route path="/register" elemen={<Register />} />
      <Route path="/sign-in" elemen={<SignIn />} />
    </Routes>
    </BrowserRouter>
  </main>
   
   
  
}


