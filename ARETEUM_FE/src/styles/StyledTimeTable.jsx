import { styled, keyframes } from "styled-components";

// 나타나는 애니메이션 정의
const slideUpAndFadeIn = keyframes`
  0% {
    transform: translateY(20px); /* 아래에서 시작 */
    opacity: 0; /* 투명하게 시작 */
  }
  100% {
    transform: translateY(0); /* 제자리로 */
    opacity: 1; /* 서서히 보이게 */
  }
`;

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 974px;
  margin-top: 0px;
  background: linear-gradient(180deg, #0c2456 0%, #0a759f 100%);
  min-height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 d*/
  box-sizing: border-box;
  overflow: hidden;
`;

export const Background = styled.div`
  position: absolute;
  margin-top: 70px; /* Header의 높이만큼 띄워줍니다. */
  width: 393px;
  height: 737px;
  flex-shrink: 0;
  z-index: 0; /* 다른 요소들 뒤에 배치 */

  object {
    width: 100%;
    //height: 100%;
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
  z-index: 3;
`;

export const Title = styled.div`
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 20px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

/* Wrap */
export const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Date = styled.div`
  display: flex;
  margin-top: 85px;
  width: 226px;
  white-space: pre-wrap;
  justify-content: space-between;
  z-index: 1;

  img {
    transition: filter 0.3s ease;
    will-change: filter; /* 성능 최적화를 위한 will-change 추가 */
    &.active {
      filter: drop-shadow(0px 0px 20px #fff);
    }
  }
`;

/* 타임테이블 */
export const Table = styled.div`
  display: flex;
  justify-content: center;
  width: 277px;
  justify-content: space-between;
  z-index: 1;
  margin-top: 25px;
  margin-bottom: 56px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  z-index: 1;

  #title {
    // padding-left: 25%;
    // padding-bottom: 4px;
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  #line1 {
    width: 110px;
    height: 5px;
    background: #78b2ff;
    flex-shrink: 0;
  }
  #line2 {
    width: 110px;
    height: 5px;
    background: #fffdcd;
    flex-shrink: 0;
  }
`;
export const Center = styled.div`
  display: flex;
  margin-top: 5px;
  width: 4px;
  height: auto;
  min-height: 370px;
  flex-shrink: 0;
  background: rgba(217, 217, 217, 0.5);
  z-index: 3;
`;

/* 날짜 선택에 따라 바뀌는 부분 */
export const Boothlist = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 40px;
  // height: auto;
  min-height: 230px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;

  border-radius: 8px;
  //flex-grow: 1; /* 데이터에 따라 리스트가 유연하게 커짐 */
`;
export const Booth = styled.div`
  opacity: 0; /* 초기 상태에서는 보이지 않도록 */
  animation: ${slideUpAndFadeIn} 0.6s ease forwards;
  animation-delay: ${({ delay }) => delay || "0s"}; /* 각 부스의 딜레이 설정 */

  #arrow {
    width: 43px;
    height: 18px;
    flex-shrink: 0;
  }
  #top {
    display: flex;
    text-align: center;
    align-items: center;
    width: 163px;
    gap: 7px;
    ${({ type }) =>
      type === "부스"
        ? `justify-content: flex-end;
        margin-left:8.2px;`
        : `justify-content: flex-start;`}
  }
  #bottom {
    ${({ type }) =>
      type === "부스" ? `  margin-right: 20px;` : `margin-left: 20px;`}
    display: flex;
    flex-direction: column;
    width: 150px;
  }
  #wrap {
    ${({ type }) =>
      type === "부스" ? `  margin-right: 134px;` : `margin-left: 155px;`}
    display: flex;
    flex-direction: column;
    gap: 4.5px;
    text-align: center;
  }
  #time {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  #name {
    color: #fff;
    // text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 114.286% */
    letter-spacing: -0.35px;
  }
  #info {
    ${({ type }) =>
      type === "공연"
        ? ` margin-left:20px; margin-top:8px; width:170px; text-align:start;`
        : ``}
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    white-space: pre-wrap;
  }
`;

export const SomSom = styled.div`
  position: absolute;
  top: 530px;
  left: 74%;
  z-index: 2;
`;
export const TextBox = styled.div`
  display: flex;
  width: 295px;
  height: 165.75px;
  padding: 13px 19px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  flex-shrink: 0;

  border-radius: 15px;
  border: 3px solid #fbefb5;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  #title {
    color: #fff;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  #booth {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    // letter-spacing: -0.35px;
  }
`;
export const Footer = styled.footer`
  width: 393px;
  // height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  bottom: 0;
  position: absolute;
`;
