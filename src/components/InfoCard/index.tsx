import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useHistory } from "react-router-dom";
import { BlackButton } from "components";
import { Trans } from "react-i18next";

interface InfoCardProps {
  isClicked: boolean;
  memberName: string;
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
    font-weight: bold;
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

export const InfoCard: React.FC<InfoCardProps> = ({ isClicked, memberName }) => {
  const shareLink = useRef<string>("");
  shareLink.current = `https://www.fashion-scanner.site//bts/result/${memberName}`;
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
        imageUrl: "https://www.fashion-scanner.site/images/InfoCard/bts_logo.jpg",
        link: {
          mobileWebUrl: shareLink.current,
          webUrl: shareLink.current,
        },
      },
      buttons: [
        {
          title: "매칭 결과 보기",
          link: {
            mobileWebUrl: shareLink.current,
            webUrl: shareLink.current,
          },
        },
      ],
    });
  };

  // 페이스북 공유하기 핸들러
  const onSharingFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareLink.current}`);
  };

  // 트위터 공유하기 핸들러
  const onSharingTwitter = () => {
    window.open(`https://www.twitter.com/intent/tweet?&url=${shareLink.current}`);
  };

  const onClick = (): void => {
    history.push({
      pathname: "/bts/lookbook",
      state: {
        memberName: memberName,
      },
    });
  };

  if (!isClicked) {
    return null;
  }

  return (
    <Container>
      {console.log(<Trans i18nKey="result:btn1" />)}
      <span>
        <Trans i18nKey={`result:info.${memberName}.t1`} />
      </span>
      <span>
        <Trans i18nKey={`result:info.${memberName}.t2`} />
      </span>
      <span>
        <Trans i18nKey={`result:info.${memberName}.t3`} />
      </span>
      <span>
        <Trans i18nKey={`result:info.${memberName}.t4`} />
      </span>
      <StyledButton onClick={onClick}>
        <Trans i18nKey="result:btn1" />
      </StyledButton>
      <p>
        <Trans i18nKey="result:btn2" />
      </p>
      <SharingButtonContainer>
        <SharingButton
          src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
          alt="kakao"
          onClick={kakaoShare}
        />
        <SharingButton src="/images/InfoCard/twitter_logo.png" alt="twitter" onClick={onSharingTwitter} />
        <SharingButton src="/images/InfoCard/facebook_logo.png" alt="facebook" onClick={onSharingFacebook} />
      </SharingButtonContainer>
    </Container>
  );
};
