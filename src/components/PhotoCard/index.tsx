import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { Trans } from "react-i18next";

interface PhotoCardProps {
  isClicked: boolean;
  memberName: string;
  handleClick: () => void;
}

function shuffleCards(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const PhotoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  p {
    font-size: 20px;
    font-weight: bold;
  }

  img {
    width: 300px;
    height: 480px;
    border-radius: 20px;
    border: 1px solid black;
    margin-top: 30px;
    backface-visibility: hidden;
    transition: all 1s;
  }

  img.front:hover {
    cursor: pointer;
  }

  & img:nth-child(1) {
    position: absolute;
    transform: rotateY(0deg);
  }
  & img:nth-child(2) {
    transform: rotateY(-180deg);
  }

  ${(props: { isClicked: boolean }) =>
    props.isClicked &&
    css`
      & img:nth-child(1) {
        position: absolute;
        transform: rotateY(180deg);
      }
      & img:nth-child(2) {
        transform: rotateY(0deg);
      }
    `}
`;

export const PhotoCard: React.FC<PhotoCardProps> = ({ isClicked, memberName, handleClick }) => {
  const cardIndex = useRef<number | undefined>();
  cardIndex.current = cardIndex.current || shuffleCards(1, 3);
  return (
    <PhotoCardContainer isClicked={isClicked}>
      <p style={{ display: isClicked ? "none" : "block" }}>
        <Trans i18nKey="result:guide" />
      </p>
      <div>
        <img
          className="front"
          src={`/images/PhotoCard/photo_card_cover_${cardIndex.current}.jpeg`}
          alt="photo-card"
          onClick={handleClick}
        />
        <img src={`/images/PhotoCard/${memberName}.jpeg`} alt="photo-card" />
      </div>
    </PhotoCardContainer>
  );
};
