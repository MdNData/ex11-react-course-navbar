import { FaBars } from "react-icons/fa";
import { links, social } from "../../../data";
import logo from "../../../logo.svg";
import { useRef, useState } from "react";

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef(null);

  const linkStyles = {
    height: showLinks
      ? linksRef.current.getBoundingClientRect().height + "px"
      : 0,
  };

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
        <div className="links-container" style={linkStyles}>
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
        <div className="social-links">
          <ul>
            {social.map((item) => {
              const { id, url, icon } = item;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
