import React from "react";
import styled, { keyframes, css } from "styled-components";

// [Reference]
// https://codepen.io/edmundojr/pen/qdLWWx

interface Slide {
  id: number;
  img: string;
}

interface CarouselPropType {
  slide: Slide[];
}

interface SlidePropType {
  readonly deg: number;
}

interface SlideContainerPropType {
  readonly len: number;
  readonly batch: number;
}

export const Carousel: React.FC<CarouselPropType> = ({ slide }) => {
  const batch = slide.length > 0 ? Math.ceil(360 / slide.length) : 0;
  return (
    <Container>
      <Slider>
        <SlideContainer len={slide.length} batch={batch}>
          {slide.map((v) => (
            <Slide key={`slide${v.id}`} deg={Math.ceil(batch * v.id)}>
              <img src={v.img} alt="slide" width="100%" height="100%" />
            </Slide>
          ))}
        </SlideContainer>
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  //   background: #110f15;
  height: 100%;
`;

const Slider = styled.figure`
  position: relative;
  width: 60vw;
  height: 40vw;
  max-width: 380px;
  max-height: 250px;
  margin: 0;
  color: white;
  perspective: 1000px;
  transform-origin: center;
`;

const SlideContainer = styled.div<SlideContainerPropType>`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: center;
  transform-style: preserve-3d;
  transform: translateZ(-30vw) rotateY(0);
  animation: ${(props) => makeKeyFrame(props)} 8s infinite cubic-bezier(0.77, 0, 0.175, 1) forwards;
`;

const Slide = styled.div<SlidePropType>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 80vw;
  height: 60vw;
  max-width: 380px;
  max-height: 250px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  transform-origin: center;
  transform: ${(props) => `rotateY(-${props.deg}deg) translateZ(-35vw)`};
`;

const makeKeyFrame = ({ len, batch }: SlideContainerPropType) => {
  const frames = Array.from({ length: len }, () => "").map(
    (_, i) =>
      css`
        ${Math.ceil(100 / len) * i}% {
          transform: translateZ(-35vw) rotateY(-${batch * i}deg);
        }
      `
  );

  return keyframes`
    ${frames}
    100% {
        transform: translateZ(-35vw) rotateY(-360deg);
    }
    `;
};
