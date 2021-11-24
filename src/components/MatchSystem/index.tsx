import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { BlackButton } from "components";
import axios from "axios";
import FadeInSection from "components/Common/FadeInSection";
import { Trans } from "react-i18next";
import swal from "sweetalert";

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
  font-weight: bold;
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
    if (imageFile === null) {
      swal({
        title: "스캐닝 실패",
        text: "업로드한 이미지 파일이 없습니다.",
        icon: "error",
      });
    }

    if (imageFile && isChecked) {
      const formData = new FormData();
      formData.append("user_image", imageFile);
      axios
        .post("https://kpop.fashion-scanner.site:8000/api/v1/member/matching/", formData)
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
          <MatchSystemTitle>
            <Trans i18nKey="match:title" />
          </MatchSystemTitle>
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
              <Trans i18nKey="match:btn1" />
            </FileClear>
          </div>
        )}
        <MatchFlexDiv>
          <p style={{ fontWeight: "bold", color: "gray" }}>
            <Trans i18nKey="match:info" />
          </p>
        </MatchFlexDiv>
        <MatchFlexDiv>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <span style={{ fontWeight: "bold" }}>
            <Trans i18nKey="match:check" />
          </span>
        </MatchFlexDiv>
        <MatchFlexDiv>
          <BlackButton onClick={onSubmit}>
            <Trans i18nKey="match:btn2" />
          </BlackButton>
        </MatchFlexDiv>
      </MatchSystemContainer>
    </FadeInSection>
  );
};
