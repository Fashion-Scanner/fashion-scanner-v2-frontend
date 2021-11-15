import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "styles/Theme";

interface StyledHeaderPropType {
  // readonly align: "left" | "center";
  readonly elevation?: 0 | 1;
  readonly color?: string;
}

interface HeaderPropType extends StyledHeaderPropType {
  subNav?: React.ReactNode;
  logo: string;
}

export const Header: React.FC<HeaderPropType> = ({ color, logo, subNav, children }) => {
  const [ev, setEv] = useState<StyledHeaderPropType["elevation"]>(0);
  useEffect(() => {
    window.onscroll = () => {
      window.scrollY >= 80 ? setEv(1) : setEv(0);
    };
  }, []);
  return (
    <StyledHeader color={color} elevation={ev}>
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="FASHION_SCANNER" />
        </NavLink>
        {subNav || undefined}
      </div>
      {children}
    </StyledHeader>
  );
};

export const StyledHeader = styled.header<StyledHeaderPropType>`
  position: fixed;
  top: 0;
  display: flex;
  padding: 20px 60px;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  font-family: ${theme.font.roboto};
  background-color: ${(props) => props.color || "#ffffffe0"};
  z-index: 9999;
  box-shadow: ${(props) => (props.elevation ? "0 3px 10px rgb(0 0 0 / 0.2)" : "unset")};

  .logo {
    display: inherit;
    gap: 56px;
  }
`;

// & .logo {
//   position: absolute;
//   align-self: center;
//   left: ${(props) => (props.align === "left" ? "10%" : "50%")};
//   transform: translate(-50%, 0%);
//   cursor: pointer;
// }
