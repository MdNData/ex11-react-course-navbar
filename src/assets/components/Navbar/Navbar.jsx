import { FaBars } from "react-icons/fa";
import { links, social } from "../../../data";
import logo from "../../../logo.svg";
import { useRef, useState } from "react";

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksNum = links.length;
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

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
              console.log(linksContainerRef.current);
              console.log(linksRef.current.getBoundingClientRect());
            }}
          >
            <FaBars />
          </button>
        </div>
        <div
          className="links-container"
          ref={linksContainerRef}
          style={showLinks ? { height: linksNum * 32 } : { height: 0 }}
        >
          <ul ref={linksRef}>
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
