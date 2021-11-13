import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled, { css } from "styled-components";
import { BlackButton } from "components";

const MatchSystemContainer = styled.div`
  margin: 10vh 0;
  opacity: 0;
  transform: translateY(20vh);
  visibility: hidden;
  transition: opacity 1s ease-out, transform 1.2s ease-out;
  will-change: opacity, visibility;
  ${({ isVisible }: { isVisible: boolean }) => {
    return (
      isVisible &&
      css`
        opacity: 1;
        transform: none;
        visibility: visible;
      `
    );
  }}
`;

const MatchFlexDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 5vh 0;
`;

const MatchSystemTitle = styled.span`
  font-size: 50px;
  text-align: center;
`;

export const MatchSystem: React.FC = () => {
  const [isVisible, setVisible] = useState(false);
  const matchSystemRef = useRef<HTMLDivElement>(null);
  const history = useHistory();

  useEffect(() => {
    let observer: IntersectionObserver;
    if (matchSystemRef.current) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(entry.isIntersecting);
            observer.unobserve(entry.target);
          }
        });
      });
      observer.observe(matchSystemRef.current);
    }
    return () => observer && observer.disconnect();
  });

  const onSubmit = () => {
    history.push({
      pathname: "/bts/loading",
    });
  };

  return (
    <MatchSystemContainer isVisible={isVisible} ref={matchSystemRef}>
      <MatchFlexDiv>
        <MatchSystemTitle>가장 자주 입는 옷 사진을 올려주세요</MatchSystemTitle>
      </MatchFlexDiv>
      <MatchFlexDiv>
        <BlackButton>FILE UPLOAD</BlackButton>
      </MatchFlexDiv>
      <MatchFlexDiv>
        <p>첨부된 사진은 매칭 후 내부 방침 및 기타 관련 법률에 따라 일정기간 저장됩니다.</p>
      </MatchFlexDiv>
      <MatchFlexDiv>
        <input type="checkbox" />
        <span>동의합니다.</span>
      </MatchFlexDiv>
      <MatchFlexDiv>
        <BlackButton onClick={onSubmit}>결과보기</BlackButton>
      </MatchFlexDiv>
    </MatchSystemContainer>
  );
};
