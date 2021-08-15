import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo-2x.png";
import "../assets/style/Navbar.scss";
import wave from "../assets/img/emoji.svg";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaBtc,
  FaYoutube,
  FaTelegramPlane,
  FaReddit,
  FaDiscord,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { AiOutlineBars } from "react-icons/ai";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  const style = { color: "white", fontSize: "1.5em", cursor: "pointer" };
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 1200;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  // return (
  //     <p className={`${isMobile ? "mobile-class" : "non-mobile-class"}`}>Your text here</p>
  // );
  return (
    <div className={`${isMobile ? "container-fluid" : "container-sm"}`}>
      <nav className="my-nav mt-4 mb-4">
        <div className="nav-logo-bar d-flex justify-content-between">
          <div className="mylogo d-flex align-items-center">
            <img src={logo} className="header-logo" alt="logo" />
            <h3 className="text-capitalize text-light">WeCare Charity</h3>
          </div>
          <div onClick={() => setMenuOpen(!menuOpen)}>
            <AiOutlineBars className="bar" style={style} />
          </div>
        </div>

        <div className="socials-bar">
          <div className="d-flex align-items-center icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <SiTiktok />
            <FaYoutube />
            {/* <FaRegHandSpock /> */}
            <img src={wave} style={{ width: "22px" }} alt="wave" />
            <h5 className="mb-0">Clubhouse</h5>
            <FaTelegramPlane />
            <FaReddit />
            <FaDiscord />
          </div>

          <form action="">
            <select name="langs" id="langs" className="selector">
              <option value="">ENG</option>
              <option value="">TUR</option>
            </select>
          </form>
        </div>
      </nav>
      <ul className={"menu " + (menuOpen && "active")}>
        <li>Home</li>
        <li className="dropdown">
          Resources <IoMdArrowDropdown />
          <ul className="d-flex flex-column sub-menu">
            <li>White Paper</li>
            <li>White Paper</li>
          </ul>
        </li>
        <li>Campaigns</li>
        <li>Finance</li>
        <li>faq</li>
        <li>launchpad</li>
        <li>Team</li>
        <li className="weCareLab">
          <span>
            {" "}
            <FaBtc /> WECARE LAB
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
