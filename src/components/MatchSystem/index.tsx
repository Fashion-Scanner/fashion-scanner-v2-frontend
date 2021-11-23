import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled, { css } from "styled-components";
import { BlackButton } from "components";
import axios from "axios";

const MatchSystemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2% 0;
  opacity: 0;
  transform: translateY(20vh);
  visibility: hidden;
  transition: opacity 1s ease-out, transform 1.2s ease-out;
  will-change: opacity, visibility;
  ${({ isVisible }: { isVisible: boolean }) => {
    return (
      isVisible &&
      css`
        opacity: 1;
        transform: none;
        visibility: visible;
      `
    );
  }}
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
  const [isVisible, setVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState("");
  const matchSystemRef = useRef<HTMLDivElement>(null);
  const imageInput = useRef<HTMLInputElement | null>(null);
  const history = useHistory();

  useEffect(() => {
    let observer: IntersectionObserver;
    if (matchSystemRef.current) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(entry.isIntersecting);
            observer.unobserve(entry.target);
          }
        });
      });
      observer.observe(matchSystemRef.current);
    }
    return () => observer && observer.disconnect();
  });

  const onSubmit = () => {
    if (imageFile && isChecked) {
      const formData = new FormData();
      formData.append("user_image", imageFile);
      axios
        .post("http://ec2-13-124-117-190.ap-northeast-2.compute.amazonaws.com:8000/api/v1/matching/info/", formData)
        .then((res) => {
          console.log(res.data.data.name);
        });
      history.push({
        pathname: "/bts/loading",
      });
    }
  };

  return (
    <MatchSystemContainer isVisible={isVisible} ref={matchSystemRef}>
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
  );
};
