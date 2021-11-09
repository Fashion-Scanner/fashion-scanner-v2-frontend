import React, { HTMLAttributes } from "react";
import styled from "styled-components";

interface ToggleMenuTypes<T> extends HTMLAttributes<T> {
  menu: string[];
}

export const ToggleMenu: React.FC<ToggleMenuTypes<HTMLDivElement>> = ({ menu, className }) => {
  return (
    <div className={className}>
      {menu.map((v, i) => {
        return i < menu.length - 1 ? <div key={`v${i}`}>{v} / </div> : <div key={`v${i}`}>&nbsp;{v}</div>;
      })}
    </div>
  );
};

export const StyledToggleMenu = styled(ToggleMenu)`
  display: flex;
  & > div {
    cursor: pointer;
  }
  & > div.active {
    color: #5f7389;
  }
`;
