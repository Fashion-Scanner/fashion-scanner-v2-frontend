import React from "react";
import styled, { keyframes } from "styled-components";
import { useHistory } from "react-router";
import { BlackButton } from "components";

interface InfoCardProps {
  isClicked: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(50px);
  }

  to {
    transform: translateY(0px);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 100px;
  span {
    font-size: 20px;
  }

  span + span {
    margin-top: 10px;
  }

  animation: ${fadeIn} 1s ease-in-out, ${slideUp} 0.5s ease-in-out;
`;

const StyledButton = styled(BlackButton)`
  margin: 30px 0;
`;

const SharingButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% 0;
`;

const SharingButton = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
  & + & {
    margin-left: 1rem;
  }
`;

export const InfoCard: React.FC<InfoCardProps> = ({ isClicked }) => {
  const history = useHistory();

  if (!isClicked) {
    return null;
  }

  const onClick = (): void => {
    history.push({
      pathname: "/bts/match",
    });
  };
  return (
    <Container>
      <span>당신은 패완얼의 정석 뷔</span>
      <span>남다른 패션센스를 자랑하지만</span>
      <span>가끔 얼굴 때문에 그 센스가 묻히는군요</span>
      <span>뷔의 룩북을 참고해보세요!</span>
      <StyledButton onClick={onClick}>룩북 바로가기</StyledButton>
      <p>공유하기</p>
      <SharingButtonContainer>
        <SharingButton
          src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
          alt="kakao"
        />
        <SharingButton src="/images/InfoCard/twitter_logo.png" alt="twitter" />
        <SharingButton src="/images/InfoCard/facebook_logo.png" alt="facebook" />
      </SharingButtonContainer>
    </Container>
  );
};
