import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled, { keyframes, css } from "styled-components";
import { PhotoCard, InfoCard } from "components";

interface Location {
  memberName: string;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const ResultContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ResultTitle = styled.div`
  height: 70px;
  ${(props: { isClicked: boolean }) =>
    !props.isClicked &&
    css`
      display: none;
    `}
  font-weight: bold;
  font-size: 40px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const WhiteSpace = styled.div`
  ${(props: { isClicked: boolean }) =>
    props.isClicked &&
    css`
      display: none;
    `};
  height: 70px;
`;

export const Result: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation<Location>();
  useEffect(() => {
    console.log(location.state.memberName);
  }, [location]);
  const handleClick = (): void => {
    setIsClicked(!isClicked);
  };

  return (
    <ResultContainer>
      <ResultTitle isClicked={isClicked}>WHICH MEMBER ARE YOU?</ResultTitle>
      <WhiteSpace isClicked={isClicked} />
      <div style={{ display: "flex" }}>
        <PhotoCard isClicked={isClicked} handleClick={handleClick} />
        <InfoCard isClicked={isClicked} />
      </div>
    </ResultContainer>
  );
};
