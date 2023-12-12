import { Link } from "gatsby";
import React from "react";
import COLORS from "../../theme/color";
import { styled } from "styled-components";

const NavbarWrapper = styled.div`
padding-top:20px;
padding-bottom:20px;
margin-bottom:20px;
padding-left:150px;
padding-right:150px;
.txt {
  font-weight:500;
  text-decoration:none;
  margin-right:8px;
}
`

const NavBar = () => {
  return (
    <NavbarWrapper>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link
          to="/"
          className="txt"
          style={{ color: COLORS.white }}
        >
          Home
        </Link>
        <Link
          to="/about-us"
          className="txt"
          style={{ color: COLORS.white }}
        >
          About us
        </Link>
        <Link
          to="/academics"
          className="txt"
          style={{ color: COLORS.white }}
        >
          Academics
        </Link>
        <Link
          to="/people"
          className="txt"
          style={{ color: COLORS.white }}
        >
          People
        </Link>
        <Link
          to="/research"
          className="txt"
          style={{ color: COLORS.white }}
        >
          Research
        </Link>
        <Link
          to="/students-corner"
          className="txt"
          style={{ color: COLORS.white }}
        >
          Students
        </Link>
        <Link
          to="/facilities"
          className="txt"
          style={{ color: COLORS.white }}
        >
          Facilities
        </Link>
        {/* <Link
          to="/events"
          className="txt"
          style={{ color: COLORS.white }}
        >
          Events
        </Link> */}
        <Link
          to="/alumni"
          className="txt"
          style={{ color: COLORS.white }}
        >
          Alumni
        </Link>
        <Link
          to="/newsletter"
          className="txt"
          style={{ color: COLORS.white }}
        >
          Newsletter
        </Link>
      </div>
    </NavbarWrapper>
  );
}

export default NavBar;