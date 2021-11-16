import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

interface PhotoCardProps {
  isClicked: boolean;
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
  }

  img {
    width: 300px;
    height: 400px;
    margin-top: 30px;
    backface-visibility: hidden;
    transition: all 1s;
  }

  img:hover {
    cursor: pointer;
  }

  & img:nth-child(1) {
    position: absolute;
    border-radius: 20px;
    border: 1px solid black;
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

export const PhotoCard: React.FC<PhotoCardProps> = ({ isClicked, handleClick }) => {
  const [cardIndex, setCardIndex] = useState<number | null>(null);
  useEffect(() => {
    if (cardIndex === null) {
      setCardIndex(shuffleCards(1, 3));
    }
  }, [cardIndex]);
  return (
    <PhotoCardContainer isClicked={isClicked}>
      <p style={{ display: isClicked ? "none" : "block" }}>포토카드를 눌러보세요.</p>
      <div>
        <img src={`/images/PhotoCard/photo_card_cover_${cardIndex}.jpeg`} alt="photo-card" onClick={handleClick} />
        <img src="/images/PhotoCard/member-card.jpg" alt="photo-card" onClick={handleClick} />
      </div>
    </PhotoCardContainer>
  );
};
