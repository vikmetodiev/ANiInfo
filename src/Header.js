import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, Tooltip } from "reactstrap";
import { ReactComponent as HomeImg } from "./Images/home-icon-silhouette.svg";
import { ReactComponent as AboutImg } from "./Images/quill-drawing-a-line.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYinYang } from "@fortawesome/free-solid-svg-icons";
import otaku from "./Images/otaku.png";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const toggleToolTip = () => setTooltipOpen(!tooltipOpen);


  return (
    <div>
      
      <Navbar expand="md" light>
        <a href="/" >
          <img
          id="TooltipExample"
            className="home-image"
            src={otaku}
            alt="Otaku"
          />
        </a>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" style={{ margin: "auto" }} navbar>
            <div
              className={
                window.location.href === "http://localhost:3000/"
                  ? "nav-item main-icon-color"
                  : "nav-item"
              }
            >
              <a className="nav-link" href="/">
                <HomeImg className="nav-icons" />
                Home
              </a>
            </div>
            <div
              className={
                window.location.href.indexOf("Animes") > -1
                  ? "nav-item main-icon-color"
                  : "nav-item"
              }
            >
                <Tooltip placement="bottom" isOpen={tooltipOpen} target="TooltipExample" toggle={toggleToolTip}>
        Back to Home Page
      </Tooltip>
              <a className="nav-link" href="/Animes">
                <FontAwesomeIcon icon={faYinYang} className="nav-icons" />
                Animes
              </a>
            </div>
            <div
              className={
                window.location.href.indexOf("About") > -1
                  ? "nav-item main-icon-color"
                  : "nav-item"
              }
            >
              <a className="nav-link" href="/About">
                {" "}
                <AboutImg className="nav-icons" /> About
              </a>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
