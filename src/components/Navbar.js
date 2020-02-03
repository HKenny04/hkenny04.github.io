import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends Component {
  render() {
    return (
        <nav className="nav" id="navbar">
            <div className="nav-content">
                <ul className="nav-items">
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}  >
                            Skills
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
  };
}

export default Navbar;