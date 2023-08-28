import { FaBars } from "react-icons/fa";
import { links, social } from "../../../data";
import logo from "../../../logo.svg";
import { useRef, useState } from "react";

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksNum = useRef(links.length);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button
            style={
              showLinks
                ? {
                    transform: "rotate(90deg)",
                  }
                : {
                    transform: "rotate(0deg)",
                  }
            }
            className="nav-toggle"
            onClick={() => {
              setShowLinks(!showLinks);
            }}
          >
            <FaBars />
          </button>
        </div>
        <div
          className="links-container"
          style={showLinks ? { height: linksNum.current * 32 } : { height: 0 }}
        >
          <ul>
            {links.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.url}>{item.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
