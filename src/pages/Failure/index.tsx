import React from "react";
import styled from "styled-components";
import { BlackButton } from "components";
import { useHistory } from "react-router-dom";

const Container = styled("div")`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled("img")`
  width: 50vw;
`;

const Title = styled("p")`
  background-color: black;
  color: white;
  padding: 10px;
  font-size: 40px;
  margin: 30px 0;
`;

const Content = styled("p")`
  color: gray;
  font-size: 15px;
  margin: 0 0 50px 0;
`;

export const Failure: React.FC = () => {
  const history = useHistory();
  const onClick = () => {
    history.push({
      pathname: "/bts/match",
    });
  };
  return (
    <Container>
      <Img src="/images/NotFound/not-found-img.jpg" alt="not-found-img" />
      <Title>잠시 후 다시 시도해 주세요</Title>
      <Content>같은 문제가 계속되면 다른 이미지를 사용해주세요.</Content>
      <BlackButton onClick={onClick}>이전으로 돌아가기</BlackButton>
    </Container>
  );
};