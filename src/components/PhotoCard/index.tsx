import React from "react";
import styled, { css } from "styled-components";

interface PhotoCardProps {
  isClicked: boolean;
  handleClick: () => void;
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
    margin-top: 30px;
    backface-visibility: hidden;
    transition: all 1s;
  }

  img:hover {
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

export const PhotoCard: React.FC<PhotoCardProps> = ({ isClicked, handleClick }) => {
  return (
    <PhotoCardContainer isClicked={isClicked}>
      <p style={{ display: isClicked ? "none" : "block" }}>포토카드를 눌러보세요.</p>
      <div>
        <img src="/images/Result/photo-card.jpg" alt="photo-card" onClick={handleClick} />
        <img src="/images/Result/member-card.jpg" alt="photo-card" onClick={handleClick} />
      </div>
    </PhotoCardContainer>
  );
};
