import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 2719px;
  margin-top: 0px;
  background: linear-gradient(180deg, #0c2456 0%, #0a759f 100%);
  min-height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  overflow: hidden;
`;

export const Background = styled.div`
  position: relative; /* 상대 위치 설정으로 자연스럽게 배치 */
  margin-top: -2310px; /* Header의 높이만큼 띄워줍니다. */
  margin-left: -10px;
  width: 477px;
  height: 2378px;
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
    color: #f6d1b1;
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
  margin-left: 301px;
  margin-top: -11px;
`;

// 동덕여자대학교 멋쟁이사자처럼 12기
export const LionName = styled.div`
  width: 361px;
  height: 30px;
  margin-left: 20px;
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
  .Areteum {
    width: 81px;
    height: 22.878px;
    flex-shrink: 0;
  }
`;

// 멋사 로고
export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  width: 150px;
  height: 33px;
  margin-left: 125px;
  margin-top: 30px;

  .likeLion {
    width: 112.862px;
    height: 13.1px;
    flex-shrink: 0;
  }

  .lionLogo {
    width: 32.246px;
    height: 32.246px;
    flex-shrink: 0;
    margin-left: 4px;
    margin-top: -8px;
  }
`;

// 멋사 단체사진
export const LionPicture = styled.div`
  margin-left: 10px;
  z-index: 99;
  .lion {
    width: 310.456px;
    height: 209.6px;
    flex-shrink: 0;
    border-radius: 19.65px;
    margin-left: 30px;
    margin-top: 5px;
    z-index: 99;
  }
`;

// 인스타 아이디
export const Insta = styled.div`
  display: flex;
  flex-direction: row;
  width: 150px;
  height: 14px;
  margin-top: 6px;
  margin-left: 187px;
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
    z-index: 3;
  }
`;

// 멋사 설명
export const Content = styled.div`
  // width: 350px;
  height: 228px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // margin-left: 63px;
  #wrap {
    display: flex;
    align-items: center;
  }

  #text4 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    margin-right: 3px;
  }
  #text5 {
    color: #f6d1b1;
    text-shadow: 0px 0px 7.219px rgba(255, 255, 255, 0.65);
    font-family: "Pretendard Variable";
    font-size: 15.614px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    // margin-left: 70px;
    // margin-top: -20.7px;
  }

  #text6 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 164px;
    // margin-top: -20.3px;
  }

  #text7 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 34px;
  }

  #text8 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 42px;
  }

  #text9 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 7px;
  }

  #text10 {
    color: #f6d1b1;
    text-shadow: 0px 0px 7.219px rgba(255, 255, 255, 0.65);
    font-family: "Pretendard Variable";
    font-size: 15.614px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-right: 3px;
    // margin-left: -31px;
    // margin-top: 2px;
  }

  #text11 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-top: -20px;
    // margin-left: -1px;
  }

  #text12 {
    color: #f6d1b1;
    text-shadow: 0px 0px 7.219px rgba(255, 255, 255, 0.65);
    font-family: "Pretendard Variable";
    font-size: 15.614px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-right: 1.5px;
    // margin-left: -20px;
  }

  #text13 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 200px;
    // margin-top: -20px;
  }

  #text14 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 35px;
  }

  #text15 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 62px;
  }

  #text16 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 15.73px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.393px;
    // margin-left: 35px;
  }
`;

// 솜솜
export const Somsom = styled.div`
  width: 74px;
  height: 74px;
  margin-left: 155px;
  margin-top: 10px;

  .somsom {
    width: 74px;
    height: 74px;
    flex-shrink: 0;
  }
`;

// PLAN & DESIGN
export const PD = styled.div`
  width: 144px;
  height: 22px;
  color: #f6d1b1;
  text-align: center;
  text-shadow: 0px 0px 2.015px #fff;
  font-family: "Pretendard Variable";
  font-size: 18.138px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 117px;
`;

// 기디 배경
export const PDBack = styled.div`
  width: 111px;
  height: 120px;
  margin-left: 135px;
  margin-top: px;

  .PDBack {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
  }
`;

// 기디 대장님
export const PD1 = styled.div`
  width: 64px;
  height: 34px;
  margin-left: 159px;
  margin-top: -25px;
  #pd1 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  #major1 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

// 기디 배경
export const PDBack2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 111px;
  height: 120px;
  margin-left: 25px;
  .PDBack2 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .PDBack3 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .PDBack4 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .PDBack5 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
`;

// 기디 아기사자
export const BabyPD = styled.div`
  display: flex;
  flex-direction: row;
  width: 380px;
  height: 34px;
  margin-left: 10px;
  margin-top: -25px;
  #pd2 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 12px;
  }

  #major2 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #pd3 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 12px;
  }

  #major3 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #pd4 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 32px;
  }

  #major4 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #pd5 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 28px;
  }

  #major5 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

// 솜솜
export const Somsom2 = styled.div`
  width: 74px;
  height: 74px;
  margin-left: 160px;
  margin-top: 50px;

  .somsom2 {
    width: 74px;
    height: 74px;
    flex-shrink: 0;
  }
`;

// FRONT-END
export const Front = styled.div`
  width: 144px;
  height: 22px;
  color: #f6d1b1;
  text-align: center;
  text-shadow: 0px 0px 2.015px #fff;
  font-family: "Pretendard Variable";
  font-size: 18.138px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 122px;
`;

// 프론트 배경
export const FrontBack = styled.div`
  display: flex;
  flex-direction: row;
  width: 111px;
  height: 120px;
  margin-left: 47px;
  .FrontBack2 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .FrontBack3 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .FrontBack3 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
`;

// 프론트 선생님
export const FrontT = styled.div`
  display: flex;
  flex-direction: row;
  width: 280px;
  height: 34px;
  margin-left: 85px;
  margin-top: -25px;
  #frontT {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  #major1 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #frontT2 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 54px;
  }

  #major2 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #frontT3 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 54px;
  }

  #major3 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

// 프론트 배경
export const FrontBack2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 111px;
  height: 120px;
  margin-left: 25px;
  .FrontBack1 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .FrontBack2 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .FrontBack3 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .FrontBack4 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
`;

// 프론트 아기사자
export const BabyFront = styled.div`
  display: flex;
  flex-direction: row;
  width: 380px;
  height: 34px;
  margin-left: 10px;
  margin-top: -25px;
  #babyfront1 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 7px;
  }

  #major4 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #babyfront2 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 29px;
  }

  #major5 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #babyfront3 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 53px;
  }

  #major6 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #babyfront4 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 37px;
  }

  #major7 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

// 프론트 배경
export const FrontBack3 = styled.div`
  display: flex;
  flex-direction: row;
  width: 111px;
  height: 120px;
  margin-left: 25px;
  .FrontBack1 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .FrontBack2 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .FrontBack3 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .FrontBack4 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
`;

// 프론트 아기사자2
export const BabyFront2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 420px;
  height: 34px;
  margin-left: 5px;
  margin-top: -25px;
  #babyfront5 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  #major5 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #babyfront6 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 17px;
  }

  #major6 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #babyfront7 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 36px;
  }

  #major7 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #babyfront8 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 17px;
  }

  #major8 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

// 솜솜
export const Somsom3 = styled.div`
  width: 74px;
  height: 74px;
  margin-left: 160px;
  margin-top: 50px;

  .somsom2 {
    width: 74px;
    height: 74px;
    flex-shrink: 0;
  }
`;

// BACK-END
export const BackEnd = styled.div`
  width: 144px;
  height: 22px;
  color: #f6d1b1;
  text-align: center;
  text-shadow: 0px 0px 2.015px #fff;
  font-family: "Pretendard Variable";
  font-size: 18.138px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 124px;
`;

// 백 배경
export const BackBack = styled.div`
  display: flex;
  flex-direction: row;
  width: 111px;
  height: 120px;
  margin-left: 110px;
  .BackBack1 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .BackBack2 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -15px;
  }
`;

// 백 선생님
export const BackT = styled.div`
  display: flex;
  flex-direction: row;
  width: 280px;
  height: 34px;
  margin-left: 127px;
  margin-top: -25px;
  #BackT {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  #major1 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #BackT2 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 58px;
  }

  #major2 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

// 백 배경
export const BackBack2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 111px;
  height: 120px;
  margin-left: 49px;
  .BackBack1 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
  }
  .BackBack2 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .BackBack3 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
`;

// 백 선생님2
export const BackT2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 280px;
  height: 34px;
  margin-left: 86px;
  margin-top: -25px;
  #BackT3 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  #major3 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #BackT4 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 54px;
  }

  #major4 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #BackT5 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 54px;
  }

  #major5 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

// 백 배경
export const BackBack3 = styled.div`
  display: flex;
  flex-direction: row;
  width: 111px;
  height: 120px;
  margin-left: 25px;
  .BackBack1 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .BackBack2 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .BackBack3 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .BackBack4 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
`;

// 백 아기사자
export const BabyBack1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 420px;
  height: 34px;
  margin-left: 36px;
  margin-top: -25px;
  #babyback1 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  #major6 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #babyback2 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 48px;
  }

  #major7 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #babyback3 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 54px;
  }

  #major8 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #babyback4 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 53px;
  }

  #major9 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

// 백 배경
export const BackBack4 = styled.div`
  display: flex;
  flex-direction: row;
  width: 111px;
  height: 120px;
  margin-left: 25px;
  .BackBack1 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .BackBack2 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .BackBack3 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  .BackBack4 {
    width: 110.484px;
    height: 119.915px;
    flex-shrink: 0;
    margin-left: -20px;
  }
`;

// 백 아기사자
export const BabyBack2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 420px;
  height: 34px;
  margin-left: 42px;
  margin-top: -25px;
  #babyback5 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  #major10 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #babyback6 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 54px;
  }

  #major11 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #babyback7 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 54px;
  }

  #major12 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  #babyback8 {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 54px;
  }

  #major13 {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14.108px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

// 저마다의빛
export const PosterName = styled.div`
  width: 160px;
  height: 40px;
  flex-shrink: 0;
  margin-left: 95px;
  margin-top: 75px;
  .PosterName {
    width: 200px;
    height: 45px;
  }
`;
