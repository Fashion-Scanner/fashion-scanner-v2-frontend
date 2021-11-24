import React, { useState, useRef } from "react";
import { useLocation, useHistory, RouteComponentProps } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import { PhotoCard, InfoCard, PageTemplate } from "components";
import { headerLayout } from "layout";

interface ResultProps {
  memberName: string;
}

interface Location {
  memberName: string;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const ResultContainer = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10vh;
`;

const ResultTitle = styled.div`
  height: 70px;
  ${(props: { isClicked: boolean }) =>
    !props.isClicked &&
    css`
      display: none;
    `}
  font-weight: bold;
  font-size: 40px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const WhiteSpace = styled.div`
  ${(props: { isClicked: boolean }) =>
    props.isClicked &&
    css`
      display: none;
    `};
  height: 70px;
`;

export const Result: React.FC<RouteComponentProps<ResultProps>> = ({ match }) => {
  const [isClicked, setIsClicked] = useState(false);
  const history = useHistory();
  const location = useLocation<Location>();
  const memberName = useRef<string | undefined>();
  memberName.current = (location.state && location.state.memberName) || (match.params && match.params.memberName);
  console.log(history);

  const handleClick = (): void => {
    setIsClicked(!isClicked);
  };

  return (
    <PageTemplate headerLayout={headerLayout.bts}>
      <ResultContainer>
        <ResultTitle isClicked={isClicked}>WHICH MEMBER ARE YOU?</ResultTitle>
        <WhiteSpace isClicked={isClicked} />
        <div style={{ display: "flex" }}>
          <PhotoCard isClicked={isClicked} memberName={memberName.current} handleClick={handleClick} />
          <InfoCard isClicked={isClicked} memberName={memberName.current} />
        </div>
      </ResultContainer>
    </PageTemplate>
  );
};
