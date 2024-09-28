import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 1380px;
  margin-top: 0px;
  background: linear-gradient(180deg, #0c2456 0%, #0a759f 100%);
  min-height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  overflow: hidden;
`;

export const Background = styled.div`
  position: relative; /* 상대 위치 설정으로 자연스럽게 배치 */
  margin-top: -985px; /* Header의 높이만큼 띄워줍니다. */
  width: 393px;
  height: 1041px;
  flex-shrink: 0;
  z-index: 0; /* 다른 요소들 뒤에 배치 */

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

// 만든이들 소개
export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  width: 390px;
  height: 20px;
  margin-top: 46px;

  #choice1 {
    color: #f6d1b1;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 24px;
  }

  #choice2 {
    cursor: pointer;
    color: #fff;
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
  margin-left: 27px;
  margin-top: -11px;
`;

// 저마다의빛
export const PosterName = styled.div`
  width: 182.268px;
  height: 53px;
  flex-shrink: 0;
  margin-left: 110px;
  margin-top: 42px;
`;

// 동덕여자대학교 2024
export const UniversityName = styled.div`
  width: 115px;
  height: 16px;
  margin-left: 100px;
  margin-top: 4px;
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
  .areteum {
    width: 81px;
    height: 22.878px;
    flex-shrink: 0;
  }
`;

// 포스터
export const Poster = styled.div`
  margin-top: 24px;
  margin-left: 50px;
  .Poster {
    width: 293.279px;
    height: 390.25px;
    flex-shrink: 0;
  }
  position: relative;
  z-index: 99;
`;

// 인스타 아이디
export const Insta = styled.div`
  display: flex;
  flex-direction: row;
  width: 150px;
  height: 14px;
  margin-top: 5px;
  margin-left: 200px;

  #text2 {
    color: #f6d1b1;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
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

// 축제 설명
export const Content = styled.div`
  // width: 328px;
  // height: 228px;
  margin-top: 24px;
  // margin-left: 35px;
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
    color: #fff;
    text-align: center;
    text-shadow: 0px 0px 2px #fff;
    font-family: "Pretendard Variable";
    font-size: 15.614px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.39px;
  }

  #text5 {
    color: #f6d1b1;
    text-align: center;
    text-shadow: 0px 0px 7.219px rgba(255, 255, 255, 0.65);
    font-family: "Pretendard Variable";
    font-size: 15.614px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #text6 {
    color: #fff;
    text-align: center;
    text-shadow: 0px 0px 2px #fff;
    font-family: "Pretendard Variable";
    font-size: 15.614px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.39px;
  }
`;

// 축제 설명2
export const Content2 = styled.div`
  // width: 200px;
  height: 44px;
  margin-top: 39px;
  display: flex;
  justify-content: center;
  align-items: center;

  #text7 {
    color: #f6d1b1;
    text-align: center;
    text-shadow: 0px 0px 7.219px rgba(255, 255, 255, 0.65);
    font-family: "Pretendard Variable";
    font-size: 18.562px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
`;

// 왼쪽 분수 이미지
export const BackImage = styled.div`
  width: 149.949px;
  height: 147.537px;
  transform: rotate(-6.638deg);
  flex-shrink: 0;
  z-index: 0; /* 다른 요소들 뒤에 배치 */
  margin-top: -130px;
  margin-left: -19px;

  .AreteumBack {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 배경 이미지가 화면에 맞게 늘어나도록 설정 */
  }
`;

// 저마다의빛
export const PosterName2 = styled.div`
  width: 160px;
  height: 40px;
  flex-shrink: 0;
  margin-left: 96px;
  margin-top: 70px;
  .PosterName {
    width: 200px;
    height: 45px;
  }
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
