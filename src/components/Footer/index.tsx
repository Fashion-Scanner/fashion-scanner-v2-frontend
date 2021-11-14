import styled from "styled-components";
import { FaRegCopyright, FaFacebookF, FaTwitter } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { HiMail } from "react-icons/hi";
import { ImPhone, ImInstagram } from "react-icons/im";
import { Badge } from "components";

export const Footer: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MainSection>
          <div className="logo">
            <img src="/images/logo.png" alt="FASHION SCANNER" width="50%" />
          </div>
          <ul>
            <li>
              <Badge>
                <GiPositionMarker style={{ verticalAlign: "middle" }} size="1em" />
              </Badge>
              강남구 선릉로 433 세방빌딩 6층
            </li>
            <li>
              <Badge>
                <ImPhone style={{ verticalAlign: "middle" }} size="1em" />
              </Badge>
              010-1234-5678
            </li>
            <li>
              <Badge>
                <HiMail style={{ verticalAlign: "middle" }} size="1em" />
              </Badge>
              support@fashionscanner.com
            </li>
          </ul>
        </MainSection>
        <SubSection>
          <ul>
            <li>
              <a href="#">ABOUT US</a>
            </li>
            <li>
              <a href="#">자주묻는 질문</a>
            </li>
          </ul>
          <ul>
            <li>GET TO KNOW US</li>
            <li>
              <Badge bColor="#ffffff" fColor="#050A0B">
                <a href="#">
                  <FaFacebookF style={{ verticalAlign: "middle" }} size="1em" />
                </a>
              </Badge>
              <Badge bColor="#ffffff" fColor="#050A0B">
                <a href="#">
                  <ImInstagram style={{ verticalAlign: "middle" }} size="1em" />
                </a>
              </Badge>
              <Badge bColor="#ffffff" fColor="#050A0B">
                <a href="#">
                  <FaTwitter style={{ verticalAlign: "middle" }} size="1em" />
                </a>
              </Badge>
            </li>
          </ul>
        </SubSection>
      </Wrapper>
      <div style={{ textAlign: "center", padding: "20px 0px 40px" }}>
        <FaRegCopyright size="1.5em" style={{ verticalAlign: "middle" }} /> Copyright Fashion Scanner. All Rights
        Reserverved. 2021
      </div>
    </Container>
  );
};

const Container = styled.footer`
  bottom: 0;
  background-color: #282c30;
  position: relative;
  width: 100%;
  color: #ffffff;
  padding: 40px 10% 0px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  & ul > li {
    padding: 10px 0px;
    display: flex;
    align-items: center;
  }
`;

const MainSection = styled.div`
  display: flex;
  flex-flow: column;
  & .logo {
    padding: 10px 0px;
  }
`;

const SubSection = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;