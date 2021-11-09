import React from "react";
import styled from "styled-components";
import { theme } from "styles/Theme";

interface NavProps {
  id: number;
  component: string | React.ReactNode;
}

interface StyledHeaderPropType {
  readonly align: "left" | "center";
  readonly color?: string;
}

interface HeaderPropType extends StyledHeaderPropType {
  nav: NavProps[];
  logo: string;
}

export const Header: React.FC<HeaderPropType> = ({ align, color, logo, nav }) => {
  return (
    <StyledHeader align={align} color={color}>
      <div className="logo">
        <img src={logo} alt="FASHION_SCANNER" />
      </div>
      <ul className="nav">
        {nav.map((v) => (
          <li key={v.id}>{v.component}</li>
        ))}
      </ul>
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
  justify-content: flex-end;
  font-family: ${theme.font.roboto};
  background-color: ${(props) => props.color || "#ffffffe0"};
  z-index: 9999;

  & .logo {
    position: absolute;
    align-self: center;
    left: ${(props) => (props.align === "left" ? "10%" : "50%")};
    transform: translate(-50%, 0%);
    cursor: pointer;
  }

  & .nav {
    display: flex;
    gap: 56px;
    color: #b0b8c1;
  }
`;
