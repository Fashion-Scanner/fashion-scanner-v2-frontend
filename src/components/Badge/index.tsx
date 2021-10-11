import styled from "styled-components";

export interface BadgeTypes {
  readonly bColor?: string;
  readonly fColor?: string;
}

export const Badge = styled.span<BadgeTypes>`
  padding: 5px;
  border-radius: 20px;
  background-color: ${(props) => (props.bColor ? props.bColor : "#3a3a3a")};
  color: ${(props) => (props.fColor ? props.fColor : "#ffffff")};
  font-size: 16px;
  margin-right: 10px;
`;
