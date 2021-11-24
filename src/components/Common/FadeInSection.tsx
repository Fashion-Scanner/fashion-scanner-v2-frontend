import { useRef, useEffect, useCallback, useState } from "react";
import styled, { css } from "styled-components";

interface ScrollFadeInProps {
  children: JSX.Element | JSX.Element[];
  delay?: number;
}

interface FadeinContainerProps {
  delay?: number;
  isVisible: boolean;
}

const FadinContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateY(15vh);
  visibility: hidden;
  transition: opacity 1s ease-out, transform 1s ease-out;
  will-change: opacity, visibility;
  ${({ isVisible, delay }: FadeinContainerProps) => {
    return css`
      ${isVisible &&
      css`
        opacity: 1;
        transform: none;
        visibility: visible;
      `}
      ${delay && `transition-delay: ${delay}s`}
    `;
  }}
`;

const FadeInSection = ({ children, delay }: ScrollFadeInProps) => {
  const [isVisible, setVisible] = useState(false);
  const dom = useRef<HTMLDivElement>(null);
  const handleScroll = useCallback(([entry], observer) => {
    if (entry.isIntersecting) {
      setVisible(true);
      observer.unobserve(entry.target);
    }
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver;
    const { current } = dom;
    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.2 });
      observer.observe(current);
    }
    return () => observer && observer.disconnect();
  }, [handleScroll]);
  return (
    <FadinContainer ref={dom} isVisible={isVisible} delay={delay}>
      {children}
    </FadinContainer>
  );
};

export default FadeInSection;
