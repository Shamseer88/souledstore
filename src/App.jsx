import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Men from "./Pages/Men/Men";
import Women from "./Pages/Women/Women";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";
import TopNavbar from "./Components/Navbar/TopNavbar/TopNavbar";
import BottomNavbar from "./Components/Navbar/BottomNavbar/BottomNavbar";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <TopNavbar />
      <BottomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
App;
