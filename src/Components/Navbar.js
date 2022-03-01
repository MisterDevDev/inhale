import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  const path = useLocation();

  const toggleOff = () => {
    setToggle(false)
  }

  return (
    <div className={`navbar ${toggle ? 'nav-open' : ''}`}>
      <div className="navbar-logo">
        <img src='https://inhale-breather.s3.us-east-2.amazonaws.com/logo.jpg' />
        <Link to="/" className="navbar-home">
          <h3 className="fp-underline">Inhale&#8482;</h3>
        </Link>
      </div>
      <button className="nav-toggle" aria-label="toggle naviation"
        onClick={() => setToggle(!toggle)}
      >
        <span className="hamburger"></span>
      </button>
      <div className="navbar-wrapper">
        {/* changing navbar-wrapper to hamburger */}
        <ul className="nav__list">
          <li className="navbar__item">
            <Link to="/" className="navbar-link">
              <h4 onClick={toggleOff} className="fp-underline">HOME</h4>
            </Link>
          </li>
          <li className="navbar__item">
            <a  className="navbar-link" href="https://www.amazon.com/Inhale-Respiratory-Trainer-Breathing-Exercise/dp/B091L441KW/ref=sr_1_5?crid=36QXB5CVFJQ2L&keywords=inhale+breather&qid=1646154061&sprefix=inhale+breather%2Caps%2C87&sr=8-5">
              <h4 onClick={toggleOff} className="fp-underline">PRODUCT</h4>
            </a>
          </li>
          <li className="navbar__item">
            <Button
              variant="contained"
              startIcon={<EmailIcon />}
              size="small"
              onClick={() =>
                (window.location.href = `mailto:acmecorp@gmail.com`)
              }
            >
              Contact
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
