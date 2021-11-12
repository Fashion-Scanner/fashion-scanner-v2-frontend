import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { BlackButton } from "components";

const MatchSystemContainer = styled.div`
  margin: 10vh 0;
`;

const MatchFlexDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 5vh 0;
`;

const MatchSystemTitle = styled.span`
  font-size: 50px;
  text-align: center;
`;

export const MatchSystem: React.FC = () => {
  const history = useHistory();

  const onSubmit = () => {
    history.push({
      pathname: "/bts/loading",
    });
  };

  return (
    <MatchSystemContainer>
      <MatchFlexDiv>
        <MatchSystemTitle>가장 자주 입는 옷 사진을 올려주세요</MatchSystemTitle>
      </MatchFlexDiv>
      <MatchFlexDiv>
        <BlackButton>FILE UPLOAD</BlackButton>
      </MatchFlexDiv>
      <MatchFlexDiv>
        <p>첨부된 사진은 매칭 후 내부 방침 및 기타 관련 법률에 따라 일정기간 저장됩니다.</p>
      </MatchFlexDiv>
      <MatchFlexDiv>
        <input type="checkbox" />
        <span>동의합니다.</span>
      </MatchFlexDiv>
      <MatchFlexDiv>
        <BlackButton onClick={onSubmit}>결과보기</BlackButton>
      </MatchFlexDiv>
    </MatchSystemContainer>
  );
};
