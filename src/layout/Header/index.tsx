import { HeaderPropType, Nav, NavPropsType, StyledToggleMenu } from "components";
import { NavLink } from "react-router-dom";

export interface HeaderLayoutType extends HeaderPropType, NavPropsType {}

const subNav = {
  main: [
    {
      id: 0,
      component: <a href="https://www.fashion-scanner.site/blackpink/">BLACKPINK</a>,
    },
    {
      id: 1,
      component: (
        <NavLink activeStyle={{ color: "inherit", textShadow: "#464646 1px 1px 1px" }} to="/bts" exact>
          BTS
        </NavLink>
      ),
    },
  ],
  bts: [
    {
      id: 0,
      component: (
        <NavLink activeStyle={{ color: "#FBC3D0", textShadow: "#464646 1px 1px 1px" }} to="/blackpink" exact>
          BLACKPINK
        </NavLink>
      ),
    },
    {
      id: 1,
      component: (
        <NavLink
          activeStyle={{
            background: "linear-gradient(to right,  #811FE2, #AF70EB)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            // color: "#ffffff",
            // textShadow: "#464646 1px 1px 2px",
            fontWeight: 600,
          }}
          to="/bts"
        >
          BTS
        </NavLink>
      ),
    },
  ],
};

export const headerLayout = {
  main: {
    logo: "/images/logo_typo01.png",
    subNav: <Nav nav={subNav.main} />,
    nav: [
      {
        id: 0,
        component: <StyledToggleMenu menu={["KOR", "ENG"]} />,
      },
    ],
  },
  bts: {
    logo: "/images/logo_typo02.png",
    subNav: <Nav nav={subNav.bts} />,
    nav: [
      {
        id: 0,
        component: (
          <NavLink activeStyle={{ color: "#464646" }} to="/bts/lookbook" exact>
            LOOKBOOK
          </NavLink>
        ),
      },
      {
        id: 1,
        component: (
          <NavLink activeStyle={{ color: "#464646" }} to="/bts/match" exact>
            {"WHAT'S YOUR STYLE"}
          </NavLink>
        ),
      },
      {
        id: 2,
        component: (
          <>
            {/* <BsGlobe style={{ verticalAlign: "middle" }} /> */}
            <StyledToggleMenu menu={["KOR", "ENG"]} />
          </>
        ),
      },
    ],
  },
};
