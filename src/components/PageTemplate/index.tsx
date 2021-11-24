import React, { HTMLAttributes, useEffect } from "react";
import { useHistory } from "react-router";
import { Header, Footer, Nav } from "components";
import { HeaderLayoutType } from "layout";
import styled from "styled-components";

interface PageTemplatePropType extends HTMLAttributes<HTMLElement> {
  headerLayout: HeaderLayoutType;
}

export const PageTemplate: React.FC<PageTemplatePropType> = ({ headerLayout, children, style }) => {
  const { logo, subNav, nav } = headerLayout;
  const history = useHistory();
  useEffect(() => {
    const listen = history.listen(() =>
      window.scroll({
        top: 0,
      })
    );
    return () => listen();
  }, [history]);
  return (
    <StyledPageTemplate style={style}>
      <Header logo={logo} subNav={subNav}>
        <Nav nav={nav} />
      </Header>
      {children}
      <Footer />
    </StyledPageTemplate>
  );
};

const StyledPageTemplate = styled.main`
  margin-top: 60px;
  // background-color: #110f15;
`;
