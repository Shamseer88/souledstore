import "./BottomNavbar.css";
import { SlHandbag, SlHeart, SlUser } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

export default function BottomNavbar() {
  const navigate = useNavigate();
  return (
    <nav className="bottom-nav">
      <div className="left">
        <p>Shirt</p>
        <p>Jeans</p>
        <p>Jogger</p>
        <p>Pants</p>
        <RxHamburgerMenu
          size={20}
          color="#58595b"
          className="hamburger-mewnu"
        />
      </div>
      <div className="right">
        <input type="text" placeholder="Search..." />
        <SlUser
          size={20}
          onClick={() => navigate("/sign-in")}
          className="navbar-icons"
        />
        <SlHeart size={20} className="navbar-icons" />
        <SlHandbag size={20} className="navbar-icons" />
      </div>
    </nav>
  );
}
