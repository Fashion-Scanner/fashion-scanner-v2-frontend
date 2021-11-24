import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { BlackButton } from "components";
import axios from "axios";
import FadeInSection from "components/Common/FadeInSection";

const MatchSystemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2% 0;
`;

const MatchFlexDiv = styled.div`
  margin: 2% 0;
`;

const MatchSystemTitle = styled.span`
  font-size: 50px;
  text-align: center;
`;

const PreViewImage = styled.img`
  width: 7vw;
  height: 7vw;
`;

const FileClear = styled.div`
  color: gray;
  font-size: 1rem;
  margin-top: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

export const MatchSystem: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState("");
  const imageInput = useRef<HTMLInputElement | null>(null);
  const history = useHistory();

  const onSubmit = () => {
    if (imageFile && isChecked) {
      const formData = new FormData();
      formData.append("user_image", imageFile);
      axios
        .post("https://kpop.fashion-scanner.site:8000/api/v1/matching/info/", formData)
        .then((res) => {
          const memberName = res.data.data.name;
          history.push({
            pathname: "/bts/loading",
            state: {
              memberName: memberName,
            },
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <FadeInSection>
      <MatchSystemContainer>
        <MatchFlexDiv>
          <MatchSystemTitle>가장 자주 입는 옷 사진을 올려주세요</MatchSystemTitle>
        </MatchFlexDiv>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={imageInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const fileDate = e.target.files && e.target.files[0];
            if (fileDate) {
              setImageFile(fileDate);
              setImageSrc(URL.createObjectURL(fileDate));
            }
          }}
        />
        <MatchFlexDiv>
          <BlackButton
            onClick={() => {
              imageInput.current?.click();
            }}
          >
            FILE UPLOAD
          </BlackButton>
        </MatchFlexDiv>
        {imageSrc && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <PreViewImage src={imageSrc} alt="preview-image" />
            <FileClear
              onClick={() => {
                if (imageInput.current) {
                  imageInput.current.value = "";
                }
                setImageFile(null);
                setImageSrc("");
              }}
            >
              파일 삭제
            </FileClear>
          </div>
        )}
        <MatchFlexDiv>
          <p>첨부된 사진은 매칭 후 내부 방침 및 기타 관련 법률에 따라 일정기간 저장됩니다.</p>
        </MatchFlexDiv>
        <MatchFlexDiv>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <span>동의합니다.</span>
        </MatchFlexDiv>
        <MatchFlexDiv>
          <BlackButton onClick={onSubmit}>결과보기</BlackButton>
        </MatchFlexDiv>
      </MatchSystemContainer>
    </FadeInSection>
  );
};
