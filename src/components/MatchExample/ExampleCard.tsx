import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";

interface ExampleCardProps {
  children?: JSX.Element[] | JSX.Element;
  width?: string;
  hasBorder?: boolean;
  style?: React.CSSProperties;
}

interface CardProps {
  width?: string;
  hasBorder?: boolean;
  isVisible?: boolean;
}

const Card = styled.div`
  opacity: 0;
  transform: translateY(20vh);
  visibility: hidden;
  transition: opacity 1s ease-out, transform 1.2s ease-out;
  will-change: opacity, visibility;
  ${({ width, hasBorder, isVisible }: CardProps) => {
    return css`
      width: ${width || "26.6"}%;
      ${hasBorder &&
      css`
        border-left: 1px solid black;
        border-right: 1px solid black;
      `};
      ${isVisible &&
      css`
        opacity: 1;
        transform: none;
        visibility: visible;
      `};
    `;
  }}
  height: 100%;
`;

const ExampleCard = ({ width, hasBorder, children, style }: ExampleCardProps) => {
  const [isVisible, setVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (cardRef.current) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(entry.isIntersecting);
            observer.unobserve(entry.target);
          }
        });
      });
      observer.observe(cardRef.current);
    }
    return () => observer && observer.disconnect();
  });

  return (
    <Card width={width} hasBorder={hasBorder} isVisible={isVisible} style={{ ...style }} ref={cardRef}>
      {children}
    </Card>
  );
};
export default ExampleCard;
