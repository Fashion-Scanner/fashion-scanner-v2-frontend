import React from "react";
import styled from "styled-components";

const CoverContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoverBackground = styled.img`
  filter: grayscale(100%);
  opacity: 0.8;
  height: 100vh;
  width: 100vw;
`;

const CoverImage = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  height: 80vh;
  z-index: 5;
`;

const CoverText = styled.div`
  position: absolute;
  transform: rotate(-17deg) translate(0, -50%);
  top: 50%;
  font-size: 120px;
  text-align: center;
  color: white;
  z-index: 7;
`;

const BTSText = styled.div`
  position: absolute;
  transform: rotate(-17deg);
  right: 20%;
  bottom: 20%;
  font-size: 260px;
  text-align: end;
  color: #bf81ca;
  z-index: 7;
`;

export const MatchCover: React.FC = () => {
  return (
    <CoverContainer>
      <CoverImage src="/images/Match/cover_image.jpg" />
      <CoverBackground src="/images/Match/cover_background.jpg" alt="cover-background" />
      <CoverText>WHICH MEMBER ARE YOU?</CoverText>
      <BTSText>bts</BTSText>
    </CoverContainer>
  );
};
