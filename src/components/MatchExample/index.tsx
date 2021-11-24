import React from "react";
import styled, { css } from "styled-components";
import FadeInSection from "components/Common/FadeInSection";
import { Trans } from "react-i18next";

interface CardImageProps {
  width?: string;
  height?: string;
}

interface ExampleCardProps {
  width?: string;
  hasBorder?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ExampleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 90vh;
  margin: 4rem 0;
`;

const ExampleCard = styled.div`
  ${({ width, hasBorder }: ExampleCardProps) => {
    return css`
      width: ${width || "26.6"}%;
      ${hasBorder &&
      css`
        border-left: 1px solid black;
        border-right: 1px solid black;
      `};
    `;
  }}
  height: 100%;
`;

const ExampleTitle = styled.div`
  ${(props: { reversed?: boolean }) =>
    props.reversed &&
    css`
      transform: rotate(180deg) translate(0, 1%);
    `}
  height: 100%;
  writing-mode: vertical-rl;
  font-weight: bold;
  line-height: 1.2;
  color: gray;
  font-size: 5rem;
`;

const CardNumber = styled.div`
  font-size: 4rem;
  font-weight: bold;
`;

const CardImage = styled.img`
  ${({ width, height }: CardImageProps) => {
    return css`
      width: ${width}%;
      height: ${height}%;
    `;
  }}
  margin: 1rem 0;
`;

const CardInnerText = styled.div`
  font-size: 1.2rem;
  line-height: 1.4;
  color: gray;
`;

export const MatchExample = React.forwardRef<HTMLDivElement>(function MatchExample(props, ref) {
  return (
    <Container ref={ref}>
      <FadeInSection>
        <ExampleBox>
          <ExampleCard width="17">
            <ExampleTitle reversed>
              GOOD
              <br />
              EXAMPLE
            </ExampleTitle>
          </ExampleCard>
          <ExampleCard width="20">
            <CardNumber>01</CardNumber>
            <CardImage width="80" src="/images/Match/ex_good_01.jpg" alt="ex-good-01" />
            <CardInnerText>
              <Trans i18nKey="match:goodExample.t1" />
            </CardInnerText>
          </ExampleCard>
          <ExampleCard width="22" hasBorder style={{ padding: "15vh 0 0 3%" }}>
            <div style={{ display: "flex" }}>
              <CardNumber>02</CardNumber>
              <CardInnerText style={{ display: "flex", alignItems: "end", marginLeft: "2%" }}>
                <Trans i18nKey="match:goodExample.t2" />
              </CardInnerText>
            </div>
            <CardImage width="65" src="/images/Match/ex_good_02.jpg" alt="ex-good-02" />
          </ExampleCard>
          <ExampleCard width="20" style={{ padding: "0 0 0 3%" }}>
            <CardNumber>03</CardNumber>
            <CardImage width="80" src="/images/Match/ex_good_03.jpg" alt="ex-good-03" />
            <CardInnerText>
              <Trans i18nKey="match:goodExample.t3" />
            </CardInnerText>
          </ExampleCard>
        </ExampleBox>
      </FadeInSection>
      <FadeInSection>
        <ExampleBox>
          <ExampleCard width="24" style={{ padding: "0 2%" }}>
            <div style={{ display: "flex" }}>
              <CardNumber>01</CardNumber>
              <CardInnerText style={{ display: "flex", alignItems: "end", marginLeft: "2%" }}>
                <Trans i18nKey="match:badExample.t1" />
              </CardInnerText>
            </div>
            <CardImage height="40" src="/images/Match/ex_bad_01.jpg" alt="ex-bad-01" />
            <div style={{ display: "flex", marginTop: "8%", height: "40%" }}>
              <CardImage height="80" src="/images/Match/ex_bad_02.jpg" alt="ex-bad-02" />
              <div style={{ marginLeft: "5%" }}>
                <CardNumber>02</CardNumber>
                <CardInnerText style={{ marginTop: "30%" }}>
                  <Trans i18nKey="match:badExample.t2" />
                </CardInnerText>
              </div>
            </div>
          </ExampleCard>
          <ExampleCard width="20" hasBorder style={{ padding: "0 3%" }}>
            <CardNumber>03</CardNumber>
            <CardInnerText style={{ margin: "5% 0" }}>
              <Trans i18nKey="match:badExample.t3" />
            </CardInnerText>
            <CardImage height="65" src="/images/Match/ex_bad_03.jpg" alt="ex-bad-03" />
          </ExampleCard>
          <ExampleCard width="19" style={{ paddingLeft: "3%" }}>
            <CardNumber>04</CardNumber>
            <CardImage height="70" src="/images/Match/ex_bad_04.jpg" alt="ex-bad-04" />
            <CardInnerText>
              <Trans i18nKey="match:badExample.t4" />
            </CardInnerText>
          </ExampleCard>
          <ExampleCard width="15" style={{ display: "flex", justifyContent: "end" }}>
            <ExampleTitle>
              BAD
              <br />
              EXAMPLE
            </ExampleTitle>
          </ExampleCard>
        </ExampleBox>
      </FadeInSection>
    </Container>
  );
});
