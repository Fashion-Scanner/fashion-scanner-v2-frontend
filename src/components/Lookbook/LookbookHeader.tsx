import React from "react";
import styled from "styled-components";

interface LookBookHeaderProps {
  memberName: string;
}

const LookBookHeader: React.FC<LookBookHeaderProps> = ({ memberName }) => {
  return (
    <HeaderContainer>
      <img alt="lookbook-header-jhope" src={`/images/lookbook_header/${memberName}.png`} />
    </HeaderContainer>
  );
};

export default LookBookHeader;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;
