import React from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";

const CoverContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoverBackground = styled.img`
  opacity: 0.5;
  height: 90vh;
  width: 100vw;
`;

const CoverImage = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  height: 70vh;
  z-index: 5;
`;

const CoverText = styled.div`
  position: absolute;
  transform: rotate(-17deg) translate(0, -50%);
  top: 50%;
  font-size: 7.5vw;
  font-weight: bold;
  text-align: center;
  color: white;
  z-index: 7;
`;

const BTSText = styled.div`
  position: absolute;
  transform: rotate(-17deg);
  right: 20%;
  bottom: 13%;
  font-size: 17vw;
  font-family: "Sarina", cursive;
  text-align: end;
  color: #bf81ca;
  z-index: 7;
`;

const GoMatching = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 5vh;
  text-decoration: none;
  font-size: 3rem;
  color: black;
  &:hover {
    cursor: pointer;
    color: white;
  }
  animation: breath 0.5s infinite alternate;

  @keyframes breath {
    from {
      transform: translate(0, 50%) scale(1);
    }

    to {
      transform: translate(0, 50%) scale(1.2);
    }
  }
`;

export const MatchCover = ({ matchExampleComponent }: { matchExampleComponent: React.RefObject<HTMLDivElement> }) => {
  return (
    <CoverContainer>
      <CoverImage src="/images/Match/cover_image.jpg" />
      <CoverBackground src="/images/Match/cover_background.jpg" alt="cover-background" />
      <CoverText>WHICH MEMBER ARE YOU?</CoverText>
      <BTSText>bts</BTSText>
      <GoMatching
        onClick={() => {
          matchExampleComponent.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <FaChevronDown />
      </GoMatching>
    </CoverContainer>
  );
};
