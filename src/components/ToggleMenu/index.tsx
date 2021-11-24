import React, { HTMLAttributes } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

interface ToggleMenuTypes<T> extends HTMLAttributes<T> {
  menu: string[];
}

export const ToggleMenu: React.FC<ToggleMenuTypes<HTMLDivElement>> = ({ menu, className }) => {
  const { i18n } = useTranslation();
  return (
    <div className={className}>
      {menu.map((v, i) => {
        const lan = v.toLowerCase().slice(0, 2);
        return i < menu.length - 1 ? (
          <div
            key={`v${i}`}
            className={lan.includes(i18n.language) ? "active" : ""}
            onClick={() => i18n.changeLanguage(lan)}
          >
            <span>{v}</span> /{" "}
          </div>
        ) : (
          <div
            key={`v${i}`}
            className={lan.includes(i18n.language) ? "active" : ""}
            onClick={() => i18n.changeLanguage(lan)}
          >
            <span>&nbsp;{v}</span>
          </div>
        );
      })}
    </div>
  );
};

export const StyledToggleMenu = styled(ToggleMenu)`
  display: inline-flex;
  & > div {
    cursor: pointer;
  }
  & > div.active {
    span {
      color: #5f7389;
      font-weight: 600;
    }
  }
`;
