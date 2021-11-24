import React from "react";
import styled from "styled-components";
import { Trans } from "react-i18next";

interface LookBookPickerProps {
  setMemberName: (memberName: string) => void;
}

interface ISquare {
  memberName: string;
}

const LookbookPicker: React.FC<LookBookPickerProps> = ({ setMemberName }) => {
  const pickMember = (e: React.MouseEvent<HTMLDivElement>) => {
    setMemberName(e.currentTarget.id);
  };

  return (
    <MemberPickerContainer>
      <SquareTitle>
        <p>
          <Trans i18nKey="lookbook:option" />
        </p>
      </SquareTitle>
      <Square id="jhope" memberName="jhope" onClick={pickMember} />
      <Square id="jimin" memberName="jimin" onClick={pickMember} />
      <Square id="jin" memberName="jin" onClick={pickMember} />
      <Square id="jungkook" memberName="jungkook" onClick={pickMember} />
      <Square id="rm" memberName="rm" onClick={pickMember} />
      <Square id="suga" memberName="suga" onClick={pickMember} />
      <Square id="v" memberName="v" onClick={pickMember} />
    </MemberPickerContainer>
  );
};

export default LookbookPicker;

const MemberPickerContainer = styled.div`
  width: 1200px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0;
`;

const SquareTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  font-size: 25px;
  width: 300px;
  height: 300px;
  background-color: #000;
  color: #fff;
  box-sizing: border-box;
  border: 0.5px solid #eee;
`;

const Square = styled.div<ISquare>`
  width: 300px;
  height: 300px;
  background: ${(props) => `url('/images/Lookbook/LookbookPicker/bts/${props.memberName}.jpg')`};
  background-size: cover;
  background-position: center;
  border: 0.5px solid #eee;
  box-sizing: border-box;
  object-fit: cover;
  cursor: pointer;

  :hover {
    background: ${(props) => `url('/images/Lookbook/LookbookPicker/bt21/${props.memberName}.jpg')`};
    background-size: cover;
    background-position: center;
  }
`;
