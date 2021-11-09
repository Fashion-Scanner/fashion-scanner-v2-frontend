import { Header, StyledToggleMenu } from "components";
import React from "react";
import styled from "styled-components";
import { theme } from "styles/Theme";

const nav = [
  { id: 0, component: <a href="#">LOOKBOOK</a> },
  { id: 1, component: <a href="#">{"WHAT'S YOUR STYLE"}</a> },
  {
    id: 2,
    component: <StyledToggleMenu menu={["KOR", "ENG"]} />,
  },
];

export const BTSMain: React.FC = () => {
  return (
    <>
      <Header align="left" logo="/images/logo_typo02.png" nav={nav} color="#00000005" />
      <Container>
        <div
          style={{
            fontWeight: 500,
            fontSize: "6em",
            color: "rgba(0,0,0,0.13)",
            position: "relative",
            textAlign: "end",
            width: "100%",
          }}
        >
          FASHION
        </div>
        <div
          style={{
            background:
              "no-repeat bottom/70% url(/images/BTSMain/bts_main04.png), no-repeat bottom/55% url(/images/BTSMain/Ellipse.png)",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            gap: "60%",
            width: "100%",
            // background:
            //   "no-repeat center bottom/contain url(/images/BTSMain/bts_main04.png), no-repeat center bottom/contain url(/images/BTSMain/Ellipse.png)",
          }}
        >
          <div style={{ fontSize: "12em", fontWeight: 500 }}>BTS</div>
          <div
            style={{
              fontWeight: 500,
              fontSize: "6em",
              color: "rgba(0,0,0,0.13)",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              position: "relative",
              textAlign: "center",
            }}
          >
            SCANNER
          </div>
        </div>
      </Container>
      <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div>
          <div
            style={{
              fontWeight: 900,
              fontFamily: theme.font.roboto,
              fontSize: "60px",
              display: "inline-block",
              lineHeight: "110px",
              margin: "0px 20px",
            }}
          >
            {"LOOKBOOK"}
          </div>
          <div
            style={{
              fontWeight: 400,
              fontFamily: theme.font.roboto,
              fontSize: "24px",
              display: "inline-block",
              lineHeight: "110px",
              // verticalAlign: "middle",
              margin: "0px 20px",
            }}
          >
            멤버를 클릭하여 룩북을 확인해보세요.
          </div>
        </div>
        <ImgBox>
          <img src="/images/BTSMain/member-jin.jpg" alt="jin" />
          <img src="/images/BTSMain/member-suga.jpg" alt="suga" />
          <img src="/images/BTSMain/member-rm.jpg" alt="rm" />
          <img src="/images/BTSMain/member-jhope.jpg" alt="jhope" />
          <img src="/images/BTSMain/member-jimin.jpg" alt="jimin" />
          <img src="/images/BTSMain/member-v.jpg" alt="v" />
          <img src="/images/BTSMain/member-jk.jpg" alt="jk" />
          <div
            style={{
              backgroundColor: "#811FE2",
              color: "white",
              fontWeight: 700,
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2em",
            }}
          >
            MEMBER
          </div>
        </ImgBox>
      </Container>
      <Container>
        <img src="/images/BTSMain/bts_bottom.png" alt="bottom" />
      </Container>
    </>
  );
};

const Container = styled.main`
  font-family: ${theme.font.rhodiumLibre};
  height: 100vh;
  display: flex;
  flex-flow: column;
  padding: 120px 80px 0px;
`;

const ImgBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 50%);
  width: 100%;
  max-height: calc(100% - 60px);
  & > img {
    width: 100%;
    height: 100%;
    opacity: 0.8;
    cursor: pointer;
  }

  & > img:hover {
    // transform: scale(1.05);
    filter: drop-shadow(0 0 0.75rem #0000003e);
    opacity: 1;
  }
`;

// const Typo = styled.div``;
