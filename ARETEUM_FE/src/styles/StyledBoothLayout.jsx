import { styled, keyframes } from "styled-components";

// 나타나는 애니메이션 정의
const slideUpAndFadeIn = keyframes`
  0% {
    transform: translateY(50px); /* 아래에서 시작 */
    opacity: 0; /* 투명하게 시작 */
  }
  100% {
    transform: translateY(0); /* 제자리로 */
    opacity: 1; /* 서서히 보이게 */
  }
`;

export const Container = styled.div`
  position: relative;
  diplay: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 393px;
  height: 1113px;
  margin-top: 0px;
  background: linear-gradient(180deg, #0c2456 0%, #0a759f 100%);
  min-height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  overflow: hidden;
  z-index: 0;
`;

export const Background = styled.div`
  position: absolute; /* 상대 위치 설정으로 자연스럽게 배치 */
  width: 393px;
  height: 737px;
  flex-shrink: 0;
  z-index: 1;
  img {
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

export const Date = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  margin-top: 16px;
  gap: 90px;
  img {
    z-index: 4;
    transition: filter 0.3s ease;
    will-change: filter;
    &.active {
      filter: drop-shadow(0px 0px 20px #fff);
    }
    cursor: pointer; //
  }
`;
export const BoothImg = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  z-index: 2;
  margin-top: 26px;
  overflow: hidden; /* 스와이프 시 이미지가 벗어나지 않도록 */

  color: #fffdf0;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const BoothImgback = styled.div`
  z-index: 3;
  display: flex;
  width: 334px;
  height: 253px;
  padding: 24px 24px 24px 24px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #136 0%, #cfd6e0 100%);
  border-radius: 15px;
  img {
    width: 340px;
    height: 225px;
  }
`;
export const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  gap: 8px;
`;
export const Buttons = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  gap: 8.5px;
  margin-top: 18px;
`;
export const DayButton = styled.button`
  cursor: pointer;
  width: 60px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 30px;
  background: ${(props) => {
    if (props.active) {
      switch (props.id) {
        case "day1":
          return "#D7D0B8;"; // 첫 번째 버튼 색상
        case "day2":
          return "#BFCFC2"; // 두 번째 버튼 색상
        case "day3":
          return "#CDA7BB"; // 세 번째 버튼 색상
        case "day4":
          return "#969AD2"; // 네 번째 버튼 색상
        case "day5":
          return "#7FA7E1"; // 다섯 번째 버튼 색상
        default:
          return "#fffdf0"; // 기본 버튼 색상
      }
    } else {
      return "#fffdf0"; // 클릭되지 않았을 때의 기본 배경색
    }
  }};
  border: none;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  color: #0c2557;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const BoothInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  width: 334px;
  max-height: 298px;

  border-radius: 20px;
  background: rgba(255, 255, 255, 0.7);

  margin-top: 20px;
  margin-bottom: 30px;

  padding-top: 17px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 17px;
`;
export const DAY = styled.div`
  position: sticky; /* 고정된 위치로 설정 */
  top: 0; /* 상단에 고정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  color: #0c2557;
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const Booths = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: start;
  overflow-y: auto; /* 스크롤 가능하도록 설정 */
  max-height: 500px; /* 스크롤 영역의 높이 설정 */
  scroll-behavior: smooth; /* 스크롤 부드럽게 */
  will-change: transform; /* 브라우저 최적화 */

  #one {
    display: flex;
    gap: 6px;
    align-items: flex-start;
  }
  #wrap {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #num {
    position: absolute;
    z-index: 4;
    color: #fff;
  }
  #name {
    color: #0c2557;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.375px;
    white-space: pre-line;
  }

  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(1, 1, 1, 0.2);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
export const Detail = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  cursor: pointer;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 115px;
    height: 39px;
    padding: 10px 7px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;

    border-radius: 30px;
    background: #fbefb5;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    color: #0c2557;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    animation: ${(props) => (props.isVisible ? slideUpAndFadeIn : "none")} 2s
      ease forwards;
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
