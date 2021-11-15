import styled from "styled-components";

export const BlackButton = styled.button`
  border-radius: 10px;
  border: 4px solid black;
  padding: 5px 30px;
  background-color: black;
  color: white;
  font-size: 20px;
  font-weight: bold;

  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    color: black;
    background-color: gray;
  }
`;
