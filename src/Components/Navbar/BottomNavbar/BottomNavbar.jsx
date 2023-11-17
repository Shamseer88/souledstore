import "./BottomNavbar.css";
import { SlHandbag, SlHeart, SlUser } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";

export default function BottomNavbar() {
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
        <SlUser size={20} color="#58595b" />
        <SlHeart size={20} color="#58595b" />
        <SlHandbag size={20} color="#58595b" />
      </div>
    </nav>
  );
}
