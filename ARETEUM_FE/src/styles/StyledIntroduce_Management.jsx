import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 1286px;
  margin-top: 0px;
  background: linear-gradient(180deg, #0c2456 0%, #0a759f 100%);
  min-height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  overflow: hidden;
`;

export const Background = styled.div`
  position: relative; /* 상대 위치 설정으로 자연스럽게 배치 */
  margin-top: -885px; /* Header의 높이만큼 띄워줍니다. */
  width: 491px;
  height: 909px;
  flex-shrink: 0;
  z-index: 1; /* 다른 요소들 뒤에 배치 */
  margin-left: -25px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 배경 이미지가 화면에 맞게 늘어나도록 설정 */
  }
`;

export const Header = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: relative;
`;

export const Back = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const Title = styled.div`
  margin-top: 20px;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Footer = styled.footer`
  width: 393px;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  bottom: 0;
  position: absolute;
`;

// 만든이들 소개
export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  width: 390px;
  height: 20px;
  margin-top: 46px;
  #choice1 {
    cursor: pointer;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 24px;
  }

  #choice2 {
    color: #f6d1b1;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 63px;
  }

  #choice3 {
    cursor: pointer;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 78px;
  }
`;

//언더바
export const UnderBar = styled.div`
  width: 100px;
  height: 1px;
  margin-left: 176px;
  margin-top: -11px;
`;

// 동덕여자대학교 축제운영위원회
export const ManagementName = styled.div`
  width: 300px;
  height: 29px;
  margin-left: 50px;
  margin-top: 65px;

  #name {
    color: #fff;
    text-shadow: 0px 0px 4.031px #fff;
    font-family: "Pretendard Variable";
    font-size: 24.185px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

// 동덕여자대학교 2024
export const UniversityName = styled.div`
  width: 115px;
  height: 16px;
  margin-left: 100px;
  margin-top: 9px;
  #text {
    color: #f6d1b1;
    text-shadow: 0px 0px 7px rgba(255, 255, 255, 0.65);
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

// ARETEUM
export const Areteum = styled.div`
  margin-left: 215px;
  margin-top: -22px;
  #img {
    width: 81px;
    height: 22.878px;
    flex-shrink: 0;
  }
`;

// 축운위 로고
export const Logo = styled.div`
  margin-top: 10px;
  margin-left: 30px;

  object {
    width: 337px;
    height: 320px;
    flex-shrink: 0;
    border-radius: 21.162px;
    box-shadow: 0px 1.094px 10.944px 0px rgba(255, 255, 255, 0.13);
  }
`;

// 인스타 아이디
export const Insta = styled.div`
  display: flex;
  flex-direction: row;
  width: 150px;
  height: 14px;
  margin-top: 10px;
  margin-left: 205px;

  #text2 {
    color: #f6d1b1;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    z-index: 5px;
  }

  #text3 {
    cursor: pointer;
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 3px;
    z-index: 99;
  }
`;

// 축운위 설명
export const Content = styled.div`
  // width: 363px;
  height: 275px;
  margin-top: 50px;
  // margin-left: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  #wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #text4 {
    color: #f6d1b1;
    text-shadow: 0px 0px 7.219px rgba(255, 255, 255, 0.65);
    font-family: "Pretendard Variable";
    font-size: 15.614px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  #text5 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 94px;
    // margin-top: -19px;
  }
  #text6 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 32px;
  }

  #text7 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: -45px;
  }

  #text8 {
    color: #f6d1b1;
    text-shadow: 0px 0px 7.219px rgba(255, 255, 255, 0.65);
    font-family: "Pretendard Variable";
    font-size: 15.614px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    // margin-left: 55px;
    // margin-top: -18px;
  }

  #text9 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 215px;
    // margin-top: -19px;
  }

  #text10 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 18px;
  }

  #text11 {
    color: #f6d1b1;
    text-shadow: 0px 0px 7.219px rgba(255, 255, 255, 0.65);
    font-family: "Pretendard Variable";
    font-size: 15.614px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    // margin-left: 145px;
    // margin-top: -19px;
  }

  #text12 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 226px;
    // margin-top: -19px;
  }

  #text13 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: -10px;
  }

  #text14 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: -37px;
  }

  #text15 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 24px;
  }

  #text16 {
    color: #f6d1b1;
    text-shadow: 0px 0px 7.219px rgba(255, 255, 255, 0.65);
    font-family: "Pretendard Variable";
    font-size: 15.614px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    // margin-left: -48px;
  }

  #text17 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 274.5px;
    // margin-top: -19px;
  }

  #text18 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 5px;
  }

  #text19 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: -10px;
  }

  #text20 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: -45px;
  }

  #text21 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 33px;
  }
`;

// 저마다의빛
export const PosterName = styled.div`
  width: 160px;
  height: 40px;
  flex-shrink: 0;
  margin-left: 95px;
  margin-top: 85px;
  .PosterName {
    width: 200px;
    height: 45px;
  }
`;
