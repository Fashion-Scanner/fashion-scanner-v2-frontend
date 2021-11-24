import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

interface IBar {
  top: string;
  bottom: string;
}

interface INavCard {
  url: string;
}

interface LookBookHeaderProps {
  memberName: string;
}

const LookBookMain: React.FC<LookBookHeaderProps> = ({ memberName }) => {
  const [koClothes, setKoClothes] = useState([]);
  const [enClothes, setEnClothes] = useState([]);
  const [currentCardId, setCurrentCardId] = useState<number>(1);
  const MemberPhotoUrl = (id: number) => `/images/Lookbook/LookbookMain/${memberName}/${memberName}_${id}.png`;
  const MemberClothUrl = `/images/Lookbook/LookbookMain/${memberName}/${memberName}_${currentCardId}_1.png`;

  useEffect(() => {
    axios.get("https://kpop.fashion-scanner.site:8000/api/v1/member/info/?en_name=v").then((res) => {
      setKoClothes(res.data.ko.clothes);
      setEnClothes(res.data.en.clothes);
    });
  }, []);

  const onClickLeftArrow = () => {
    setCurrentCardId((prev) => (prev > 1 ? prev - 1 : prev - 1 + 8));
  };

  const onClickRightArrow = () => {
    setCurrentCardId((prev) => (prev < 8 ? prev + 1 : prev + 1 - 8));
  };

  const onClickNavCard = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.dataset.id) setCurrentCardId(parseInt(target.dataset.id));
  };

  return (
    <>
      <SwiperCard>
        <Arrow alt="left_arrow" src="/images/Lookbook/left_arrow.png" onClick={onClickLeftArrow} />
        <LookBookContent>
          <ContentTable>
            {koClothes.map(() => null)}
            {enClothes.map(() => null)}
            <Label>BRAND</Label>
            <Content>구찌</Content>
            <Label>CATEGORY</Label>
            <Content>상의</Content>
            <Label>COLOR</Label>
            <Content>
              <ColorChip color="black" />
            </Content>
            <Label>FEATURES</Label>
            <Content>반팔, 하프넥, 스트라이프 패턴</Content>
            <Label>PRICE</Label>
            <Content>KRW 3,000,000</Content>
          </ContentTable>
          <Bar top="600px" bottom="" />
          <MemberPhoto alt="lookbook" src={MemberPhotoUrl(currentCardId)} />
          <MemberCloth alt="lookbook" src={MemberClothUrl} />
          <Bar bottom="350px" top="" />
        </LookBookContent>
        <Arrow alt="right_arrow" src="/images/Lookbook/right_arrow.png" onClick={onClickRightArrow} />
      </SwiperCard>
      <SwiperNav>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <NavCard
            key={i}
            className={currentCardId - i ? "" : "active"}
            data-id={i}
            onClick={onClickNavCard}
            url={MemberPhotoUrl(i)}
          />
        ))}
      </SwiperNav>
    </>
  );
};

export default LookBookMain;

const SwiperCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto 30px;
`;

const Arrow = styled.img`
  cursor: pointer;
  margin: 0 50px;
`;

const LookBookContent = styled.div`
  position: relative;
  max-width: 1200px;
  width: 1100px;
  min-height: 850px;
`;

const MemberPhoto = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 600px;
`;

const MemberCloth = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 350px;
`;

const Bar = styled.div<IBar>`
  position: absolute;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  background-color: #000;
  width: 100%;
  height: 13px;
  z-index: -10;
`;

const ContentTable = styled.div`
  position: absolute;
  bottom: 400px;
  width: 500px;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: 1fr 2fr;
  text-align: left;
`;

const Label = styled.span`
  grid-column: 1;
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #5f5f5f;
`;

const Content = styled.span`
  display: flex;
  align-items: center;
  grid-column: 2;
  padding: 10px;
  font-size: 15px;
  color: #7e7e7e;
`;

const ColorChip = styled.div`
  width: 18px;
  height: 18px;
  margin-left: 2px;
  background-color: ${(props) => props.color};
`;

const SwiperNav = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  margin: 30px auto 100px;

  .active {
    filter: grayscale(50%);
  }
`;

const NavCard = styled.div<INavCard>`
  width: 140px;
  height: 200px;
  border-radius: 20px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  margin: 0 6px;
  cursor: pointer;
  :hover {
    filter: grayscale(50%);
  }
`;
