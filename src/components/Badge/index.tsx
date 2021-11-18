import { HTMLAttributes } from "react";
import styled from "styled-components";

export interface BadgeTypes extends HTMLAttributes<HTMLElement> {
  onClick?: () => void;
}
export const Badge: React.FC<BadgeTypes> = ({ style, onClick, children }) => {
  return (
    <StyledBadge style={style} onClick={onClick}>
      {children}
    </StyledBadge>
  );
};
export const StyledBadge = styled.span`
  padding: 5px;
  border-radius: 20px;
  background-color: #3a3a3a;
  color: black;
  font-size: 16px;
  margin-right: 10px;
  cursor: pointer;
`;
