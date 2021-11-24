import React, { useState } from "react";
import { Badge, Carousel, PageTemplate } from "components";
import { headerLayout } from "layout";
import { theme } from "styles/Theme";
import { FaArrowRight } from "react-icons/fa";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const slide = [
  {
    id: 0,
    img: "/images/Main/blackpink_1.jpg",
  },
  {
    id: 1,
    img: "/images/Main/bts_1.jpg",
  },
  {
    id: 2,
    img: "/images/Main/blackpink_2.jpg",
  },
  {
    id: 3,
    img: "/images/Main/bts_3.jpg",
  },
  {
    id: 4,
    img: "/images/Main/blackpink_4.png",
  },
  {
    id: 5,
    img: "/images/Main/bts_4.jpg",
  },
];

export const Main: React.FC = () => {
  const [cardImg, setCardImg] = useState<string>("blackpink");
  const history = useHistory();
  const changeCard = (card: string) => {
    if (card != cardImg) setCardImg(card);
  };
  return (
    <PageTemplate headerLayout={headerLayout.main}>
      <main>
        <div
          className="container"
          style={{
            background: "#c4c4c426 center / contain no-repeat url('https://giphy.com/embed/xTiTniuHdUjpOlNo1q')",
            height: "100vh",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px 20px",
          }}
        >
          <div
            style={{
              fontFamily: theme.font.roboto,
              fontWeight: 500,
              fontSize: 35,
              color: "#00000014",
              writingMode: "vertical-rl",
              position: "relative",
              height: "inherit",
              textAlign: "center",
            }}
          >
            FASHION X K-POP STAR X AI
          </div>
          <div style={{ height: "70%" }}>
            {/* <img src="/images/Main/header1.png" alt="magazine" width="100%" /> */}
            <img src="/images/Main/header2.png" alt="magazine" style={{ width: "100%", height: "100%" }} />
          </div>
          <div
            style={{
              fontSize: "3.125em",
              fontWeight: 400,
              color: "#2e2d2e",
              zIndex: 100,
              position: "absolute",
              textDecoration: "underline",
              textAlign: "center",
              top: "35%",
              width: "100%",
            }}
          >
            Discover the New trends
          </div>
          <div
            style={{
              position: "absolute",
              top: "45%",
              left: "15%",
              fontSize: "9.5em",
              fontWeight: 700,
              color: "#00000087",
              zIndex: 100,
            }}
          >
            FASHION
            <br />
            SCANNER
          </div>
        </div>

        <div className="container" style={{ height: "100vh", display: "flex", flexFlow: "column" }}>
          <div style={{ display: "flex", alignItems: "center", padding: "80px 50px 20px" }}>
            <div
              style={{
                fontWeight: 900,
                fontFamily: theme.font.roboto,
                fontSize: "4em",
                display: "inline-block",
                lineHeight: "110px",
                marginRight: 20,
              }}
            >
              Artist
            </div>
            <Badge
              style={{ backgroundColor: "#C4C4C499", color: "#000000", padding: "10px 15px" }}
              onClick={() => changeCard("blackpink")}
              className="hover-evt"
              selected={cardImg === "blackpink"}
              bColor="#3a3a3a"
              fColor="#ffffff"
            >
              BLACKPINK
            </Badge>
            <Badge
              style={{ backgroundColor: "#C4C4C499", color: "#000000", padding: "10px 15px" }}
              onClick={() => changeCard("bts")}
              className="hover-evt"
              selected={cardImg === "bts"}
              bColor="#3a3a3a"
              fColor="#ffffff"
            >
              BTS
            </Badge>
          </div>
          <ImgLink onClick={() => history.push(`/${cardImg}`)}>
            <div className="floatText">
              <span>
                바로가기 <FaArrowRight style={{ verticalAlign: "text-top" }} />
              </span>
            </div>
            <img src={`/images/Main/${cardImg}.jpg`} alt={cardImg} width="100%" height="100%" />
          </ImgLink>
        </div>

        <div className="container" style={{ height: "100vh", display: "flex", flexFlow: "column" }}>
          <div style={{ display: "flex", alignItems: "center", padding: "80px 50px 20px" }}>
            <div
              style={{
                fontWeight: 900,
                fontFamily: theme.font.roboto,
                fontSize: "4em",
                display: "inline-block",
                lineHeight: "110px",
                marginRight: 20,
                textAlign: "right",
                width: "100%",
              }}
            >
              {"What's New?"}
            </div>
          </div>
          <Carousel slide={slide} />
        </div>
      </main>
    </PageTemplate>
  );
};

const ImgLink = styled.div`
  width: 100%;
  height: calc(100vh - 210px);
  cursor: pointer;
  overflow: hidden;
  text-align: right;

  & .floatText {
    position: relative;
    z-index: 100;
    color: black;
    top: 50px;
    right: 40px;
    font-size: 1.25rem;
  }

  & img {
    filter: grayscale(1);
  }

  &:hover {
    & img {
      filter: unset;
    }

    & .floatText > span {
      border-bottom: 1px solid black;
    }
  }

  & svg {
    vertical-align: text-top;
  }
`;
