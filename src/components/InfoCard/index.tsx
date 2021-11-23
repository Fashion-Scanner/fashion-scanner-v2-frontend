import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useHistory } from "react-router";
import { BlackButton } from "components";

interface InfoCardProps {
  isClicked: boolean;
}

declare global {
  interface Window {
    Kakao: any;
  }
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

  useEffect(() => {
    kakaoLinkInit();
  }, []);

  const kakaoLinkInit = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_INIT_KEY);
      }
    }
  };

  const kakaoShare = () => {
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "FASHION SCANNER",
        description: "#AI #FASHION #SCANNING #BLACKPINK #MATCHING",
        imageUrl: "http://localhost:3000/images/PhotoCard/photo_card_cover_1.jpeg",
        link: {
          mobileWebUrl: `http://localhost:3000/bts/result`,
          webUrl: `http://localhost:3000/bts/result`,
        },
      },
      buttons: [
        {
          title: "매칭 결과 보기",
          link: {
            mobileWebUrl: `http://localhost:3000/bts/result`,
            webUrl: `http://localhost:3000/bts/result`,
          },
        },
      ],
    });
  };

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
          onClick={kakaoShare}
        />
        <SharingButton src="/images/InfoCard/twitter_logo.png" alt="twitter" />
        <SharingButton src="/images/InfoCard/facebook_logo.png" alt="facebook" />
      </SharingButtonContainer>
    </Container>
  );
};
