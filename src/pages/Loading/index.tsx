import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import styled from "styled-components";

interface Location {
  memberName: string;
}

const Container = styled("div")`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoadingText = styled("p")`
  color: black;
  font-size: 30px;
  text-align: center;
`;

const LoadingDots = styled("div")`
  position: relative;
  width: 50px;
  margin: 0 auto;
`;

const Dot = styled("div")`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 5px;
  height: 5px;
  margin: auto;
  border-radius: 10px;
  background-color: black;
  transform: scale(0);
  animation: dot 1.5s linear infinite;

  &:nth-child(1) {
    left: -30px;
    animation-delay: -0.1s;
  }

  &:nth-child(3) {
    right: -30px;
    animation-delay: 0.1s;
  }

  @keyframes dot {
    0% {
      transform: scale(0);
    }
    35% {
      transform: scale(1);
    }
    70% {
      transform: scale(0);
    }
    100% {
      transform: scale(0);
    }
  }
`;

const LoadingImg = styled("img")`
  width: 500px;
  margin-top: 20px;
`;

export const Loading: React.FC = () => {
  const history = useHistory();
  const location = useLocation<Location>();
  useEffect(() => {
    setTimeout(() => {
      history.push({
        pathname: "/bts/result",
        state: {
          memberName: location.state.memberName,
        },
      });
    }, 4000);
  });

  return (
    <Container>
      <div style={{ display: "flex" }}>
        <LoadingText>Loading</LoadingText>
        <LoadingDots>
          <Dot />
          <Dot />
          <Dot />
        </LoadingDots>
      </div>
      <LoadingImg src="/images/Loading/loading-img.gif" alt="loading-img" />
    </Container>
  );
};
