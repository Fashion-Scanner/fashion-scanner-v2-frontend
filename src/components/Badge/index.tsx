import { HTMLAttributes } from "react";
import styled from "styled-components";

export interface BadgeTypes extends HTMLAttributes<HTMLElement>, StyledBadgePropType {
  onClick?: () => void;
}
export const Badge: React.FC<BadgeTypes> = (props) => {
  return <StyledBadge {...props} />;
};

interface StyledBadgePropType {
  selected?: boolean;
  bColor?: string;
  fColor?: string;
}

export const StyledBadge = styled.span<StyledBadgePropType>`
  padding: 5px;
  border-radius: 20px;
  background-color: ${(props) => (props.selected ? props.bColor + "!important" : "#3a3a3a")};
  color: ${(props) => (props.selected ? props.fColor + "!important" : "#ffffff")};
  box-shadow: ${(props) => (props.selected ? "1px 1px 10px rgba(0, 0, 0, 0.7)" : "unset")};
  font-size: 16px;
  margin-right: 10px;
  cursor: pointer;

  &.hover-evt:hover {
    background-color: ${(props) => (props.selected ? props.bColor : "#3a3a3a")} !important;
    color: ${(props) => (props.selected ? props.fColor : "#ffffff")} !important;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.7) !important;
  }
`;
