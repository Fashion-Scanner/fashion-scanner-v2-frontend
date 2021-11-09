import { Badge, Header, StyledToggleMenu } from "components";
import React from "react";
import { theme } from "styles/Theme";

const nav = [
  // { id: 0, component: <a href="#">LOOKBOOK</a> },
  // { id: 1, component: <a href="#">{"WHAT'S YOUR STYLE"}</a> },
  {
    id: 0,
    component: <StyledToggleMenu menu={["KOR", "ENG"]} />,
  },
];

export const Main: React.FC = () => {
  return (
    <>
      <Header align="center" logo="/images/logo_typo01.png" nav={nav} />
      <main>
        <div
          className="container"
          style={{
            backgroundColor: "#c4c4c426",
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
            <Badge bColor="#C4C4C499" fColor="#000000" padding="10px 15px">
              <a href="#">BLACKPINK</a>
            </Badge>
            <Badge bColor="#C4C4C499" fColor="#000000" padding="10px 15px">
              <a href="#">BTS</a>
            </Badge>
          </div>
          <div style={{ width: "100%", height: "calc(100vh - 210px)", cursor: "pointer", overflow: "hidden" }}>
            <img src="/images/Main/bts.jpg" alt="blackpink" width="100%" height="100%" />
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
                textAlign: "right",
                width: "100%",
              }}
            >
              {"What's New?"}
            </div>
          </div>
          <div style={{ display: "flex", width: "100%", height: "calc(100vh - 190px)" }}>
            {[1, 2].map((v) => (
              <img key={v} src={`/images/Main/album${v}.png`} alt="album" width="100%" height="100%" />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
