import React, { useRef } from "react";
import styled from "styled-components";
import { PageTemplate } from "components";
import { headerLayout } from "layout";
import { theme } from "styles/Theme";
import { NavLink } from "react-router-dom";
// import { BsGlobe } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

const url = (name: string, wrap = false) =>
  `${wrap ? "url(" : ""}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ")" : ""}`;

export const BTSMain: React.FC = () => {
  const parallax = useRef<IParallax>(null!);
  return (
    <PageTemplate headerLayout={headerLayout.bts}>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          fontFamily: theme.font.roboto,
          marginTop: "-60px",
          overflowY: "hidden",
        }}
      >
        <Parallax ref={parallax} pages={3}>
          <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: "#110f15" }} />
          <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: "#ffffff" }} />
          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: url("stars", true),
              backgroundSize: "cover",
            }}
          />
          {/* <ParallaxLayer offset={0.1} speed={0.5} style={{ opacity: 0.8 }}>
            <img
              src="https://media.giphy.com/media/PCq2Nw7I8q4gsOLyWv/giphy.gif"
              alt="git"
              style={{ marginLeft: "5%" }}
            />
          </ParallaxLayer> */}
          {/* <ParallaxLayer offset={0.3} speed={-0.3} style={{ pointerEvents: "none" }}>
            <img
              src={"https://media.giphy.com/media/P9XHhiEVVyXHTtjQjL/giphy.gif"}
              style={{ width: "15%", marginLeft: "70%" }}
            />
          </ParallaxLayer> */}

          {/* <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <img src={url("cloud")} style={{ display: "block", width: "20%", marginLeft: "55%" }} />
            <img src={url("cloud")} style={{ display: "block", width: "10%", marginLeft: "15%" }} />
          </ParallaxLayer>

          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img src={url("cloud")} style={{ display: "block", width: "20%", marginLeft: "70%" }} />
            <img src={url("cloud")} style={{ display: "block", width: "20%", marginLeft: "40%" }} />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            <img src={url("cloud")} style={{ display: "block", width: "10%", marginLeft: "10%" }} />
            <img src={url("cloud")} style={{ display: "block", width: "20%", marginLeft: "75%" }} />
          </ParallaxLayer> */}

          <ParallaxLayer offset={0} speed={-0.5} style={{ display: "flex", alignItems: "center", paddingTop: 60 }}>
            <div
              style={{
                fontSize: "12em",
                fontWeight: 500,
                fontFamily: theme.font.rhodiumLibre,
                padding: "10%",
                marginTop: "-15%",
              }}
            >
              BTS
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={-0.3}
            style={{
              display: "flex",
              flexFlow: "column",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: theme.font.rhodiumLibre,
              paddingLeft: "40%",
            }}
          >
            <div style={{ display: "flex", flexFlow: "column", alignItems: "flex-end" }}>
              <div
                style={{
                  fontWeight: 500,
                  fontSize: "6rem",
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
                  fontWeight: 500,
                  fontSize: "6rem",
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
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={0.1}
            onClick={() => parallax.current.scrollTo(1)}
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              backgroundImage: "url(/images/BTSMain/Ellipse.png)",
              backgroundPosition: "center bottom",
              backgroundSize: "45%",
            }}
          >
            <img src={"/images/BTSMain/bts_main04.png"} style={{ width: "60%" }} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.1}
            onClick={() => {
              parallax.current.scrollTo(2);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
            }}
          >
            <Container>
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
                <NavLink to={{ pathname: "/bts/lookbook", state: { memberName: "jin" } }} exact>
                  {/* <img src="/images/BTSMain/member-jin.jpg" alt="jin" /> */}
                  <img
                    src="https://media.giphy.com/media/YMpeL38Ft6cM0422Hp/giphy.gif"
                    alt="jn"
                    width="100%"
                    height="100%"
                  />
                </NavLink>
                <NavLink to={{ pathname: "/bts/lookbook", state: { memberName: "suga" } }} exact>
                  {/* <img src="/images/BTSMain/member-suga.jpg" alt="suga" /> */}
                  <img
                    src="https://media.giphy.com/media/mDGV9l2lnjtfaBFylX/giphy.gif"
                    alt="sg"
                    width="100%"
                    height="100%"
                  />
                </NavLink>
                <NavLink to={{ pathname: "/bts/lookbook", state: { memberName: "rm" } }} exact>
                  {/* <img src="/images/BTSMain/member-rm.jpg" alt="rm" /> */}
                  <img
                    src="https://media.giphy.com/media/l1OPTfgOoruZA4cgmd/giphy.gif"
                    alt="rm"
                    width="100%"
                    height="100%"
                  />
                </NavLink>
                <NavLink to={{ pathname: "/bts/lookbook", state: { memberName: "jhope" } }} exact>
                  {/* <img src="/images/BTSMain/member-jhope.jpg" alt="jhope" /> */}
                  <img
                    src="https://media.giphy.com/media/cJ50PivNT0Hjq0obbF/giphy.gif"
                    alt="jh"
                    width="100%"
                    height="100%"
                  />
                </NavLink>
                <NavLink to={{ pathname: "/bts/lookbook", state: { memberName: "jimin" } }} exact>
                  {/* <img src="/images/BTSMain/member-jimin.jpg" alt="jimin" /> */}
                  <img
                    src="https://media.giphy.com/media/LOo4oGWH1DBNHqMpyT/giphy.gif"
                    alt="jm"
                    width="100%"
                    height="100%"
                  />
                </NavLink>
                <NavLink to={{ pathname: "/bts/lookbook", state: { memberName: "v" } }} exact>
                  {/* <img src="/images/BTSMain/member-v.jpg" alt="v" /> */}
                  <img
                    src="https://media.giphy.com/media/jsfBegcC0o2dZNBz6y/giphy.gif"
                    alt="th"
                    width="100%"
                    height="100%"
                  />
                </NavLink>
                <NavLink to={{ pathname: "/bts/lookbook", state: { memberName: "jungkook" } }} exact>
                  {/* <img src="/images/BTSMain/member-jk.jpg" alt="jk" /> */}
                  <img
                    src="https://media.giphy.com/media/gKU9C1HaEvEP5VUFPb/giphy.gif"
                    alt="jk"
                    width="100%"
                    height="100%"
                  />
                </NavLink>

                {/* <div
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
                  <img src="/images/BTSMain/bts_logo.png" alt="logo" />
                </div> */}
              </ImgBox>
            </Container>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
              backgroundImage: "url(/images/BTSMain/Polygon02.png)",
              backgroundPosition: "right bottom",
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
              backgroundImage: "url(/images/BTSMain/Polygon01.png)",
              backgroundPosition: "left bottom",
            }}
          />
          <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
              fontWeight: 700,
              fontSize: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "5%",
              // backgroundSize: "100%",
              // backgroundPosition: "center",
              // backgroundImage: "url(/images/BTSMain/Polygon01.png)",
            }}
          >
            <p>
              WHICH MEMBER <br />
              ARE YOU ?
            </p>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={-0}
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              // backgroundImage: "url(/images/BTSMain/bts_bottom.png)",
              // backgroundPosition: "left bottom",
            }}
            onClick={() => {
              parallax.current.scrollTo(0);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src={"/images/BTSMain/bts_bottom.png"} style={{ width: "50%" }} />
            <FloatBox>
              <div>
                본인이 평소 입는 스타일의 옷을 업로드해보세요.
                <br /> AI가 어떤 멤버와 패션 성향이 가장 비슷한지 알려드립니다.
              </div>
              <NavLink to="/bts/match" className="floatText">
                <span>
                  바로가기 <FaArrowRight style={{ verticalAlign: "text-top" }} />
                </span>
              </NavLink>
            </FloatBox>
          </ParallaxLayer>
        </Parallax>
      </div>
    </PageTemplate>
  );
};

const Container = styled.div`
  font-family: ${theme.font.rhodiumLibre};
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  // padding: 120px 80px 0px;
`;

const ImgBox = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  // grid-template-rows: repeat(2, 50%);
  width: 100%;
  max-height: calc(100% - 180px);
  & img {
    width: 100%;
    height: 100%;
    opacity: 0.8;
    cursor: pointer;
  }

  & img:hover {
    // transform: scale(1.05);
    filter: drop-shadow(0 0 0.75rem #0000003e);
    opacity: 1;
  }
`;

const FloatBox = styled.div`
  display: flex;
  flex-flow: column;
  gap: 20px;
  align-items: flex-end;
  padding: 80px;
  & .floatText {
    color: black;
    font-size: 1.25rem;
  }

  &:hover {
    & .floatText > span {
      border-bottom: 1px solid black;
    }
  }
`;
