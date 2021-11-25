import React from "react";
import styled from "styled-components";

interface LookBookHeaderProps {
  memberName: string;
}

const LookBookHeader: React.FC<LookBookHeaderProps> = ({ memberName }) => {
  return (
    <HeaderContainer>
      <img alt={memberName} src={`/images/Lookbook/LookbookHeader/${memberName.toUpperCase()}.png`} />
    </HeaderContainer>
  );
};

export default LookBookHeader;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;
