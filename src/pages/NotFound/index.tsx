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
  width: 30vw;
`;

const Title = styled("p")`
  text-align: center;
  line-height: 1.2;
  color: #de989c;
  font-size: 3rem;
  margin: 3rem 0 0 0;
`;

const Content = styled("p")`
  color: #de989c;
  font-size: 1.3rem;
  margin: 2.5rem 0 4rem 0;
`;

export const NotFound: React.FC = () => {
  const history = useHistory();
  const onClick = () => {
    history.push({
      pathname: "/bts",
    });
  };
  return (
    <Container>
      <Img src="/images/Failure/failure.jpg" alt="failure-img" />
      <Title>
        Oops!
        <br />
        페이지를 찾을 수 없습니다.
      </Title>
      <Content>입력하신 주소를 다시 한번 확인해 주세요.</Content>
      <BlackButton onClick={onClick}>메인 페이지로 가기</BlackButton>
    </Container>
  );
};
