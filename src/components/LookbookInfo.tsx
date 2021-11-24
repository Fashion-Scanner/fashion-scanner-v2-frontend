import React from "react";
import styled from "styled-components";

const LookbookInfo = () => {
  return (
    <Wrapper>
      <MemberName>JUNGKOOK</MemberName>
      <MemberImage src={"/images/lookbook-jungkook.png"} />
      <Eclipse />
    </Wrapper>
  );
};

export default LookbookInfo;

const Wrapper = styled.div`
  border: 1px red solid;
  width: 100%;
  min-height: 350px;
  position: relative;
`;

const MemberName = styled.span`
  border: 1px blue solid;
  color: #6b6b6b;
  font-size: 12rem;
  position: absolute;
  z-index: 5;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
`;

const MemberImage = styled.img`
  border: 1px green solid;
  height: 320px;
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
`;

const Eclipse = styled.div`
  background: #47219f;
  width: 150px;
  height: 300px;
  margin: 0 1em 0 0;
  position: absolute;
  left: 55%;
  bottom: 0;
  border-bottom-right-radius: 300px;
  border-top-right-radius: 300px;
`;
