import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 1129px;
  margin-top: 0px;
  background: linear-gradient(180deg, #0c2456 0%, #0a759f 100%);
  min-height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
`;

export const Background = styled.div`
  position: absolute; /* 상대 위치 설정으로 자연스럽게 배치 */
  //   margin-top: 70px; /* Header의 높이만큼 띄워줍니다. */
  width: 393px;
  height: 737px;
  flex-shrink: 0;
  z-index: 0; /* 다른 요소들 뒤에 배치 */

  img {
    padding-top: 95px;
    // width: 100%;
    // height: 100%;
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

// 부스 상세정보 뒤 하얀 배경
export const BoothContainer = styled.div`
  position: absolute;
  width: 345px;
  height: 700px;
  border-radius: 20px 20px 10px 10px;
  background: #fff;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  z-index: 1; /* Background보다 위에 배치 */
  top: 38%;
`;

// 상단 부스 카테고리 태그
export const BoothTag = styled.div`
  width: 49px;
  height: 19px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid #0c2557;
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  z-index: 1; /* Background보다 위에 배치 */
  top: 14%;
  color: #0c2557;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding-top: 2.5px;
`;

// 부스명
export const BoothTitle = styled.div`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  top: 17.2%;
  z-index: 1; /* 텍스트가 블러보다 위에 위치 */
  color: #0c2557;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  width: 80%;
`;

// 부스 운영 주체
export const BoothHost = styled.div`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  top: 19.9%;
  z-index: 1; /* 텍스트가 블러보다 위에 위치 */
  color: #4e78b4;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
  white-space: nowrap; /* 텍스트가 한 줄로 유지되도록 설정 */
`;

// 부스 운영 정보
export const BoothInfo = styled.div`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 26%;
  z-index: 1; /* Background보다 위에 배치 */
  top: 24.5%;
  color: #0c2557;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

// 위치 아이콘
export const LocationIcon = styled.div`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 15.5%;
  z-index: 1; /* Background보다 위에 배치 */
  top: 27.5%;
  background-image: url("/images/LocationIcon.svg");
  width: 13.993px;
  height: 17px;
  flex-shrink: 0;
`;

// 부스 위치
export const BoothLocation = styled.div`
  position: absolute;
  text-align: left; /* 왼쪽 정렬 */
  white-space: nowrap; /* 텍스트가 한 줄로 나오도록 설정 */
  left: 19.5%;
  z-index: 1; /* Background보다 위에 배치 */
  top: 26.9%;
  color: #4e78b4;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

// 시계 아이콘
export const ClockIcon = styled.div`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 15.5%;
  z-index: 1; /* Background보다 위에 배치 */
  top: 29.5%;
  background-image: url("/images/ClockIcon.svg");
  width: 14.587px;
  height: 14.587px;
  flex-shrink: 0;
`;

// 부스 운영 날짜 및 시간
export const BoothDate = styled.div`
  position: absolute;
  left: 19.5%;
  z-index: 1;
  top: 28.8%;
  color: #4e78b4;
  font-family: 4 "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-align: left; /* 왼쪽 정렬 */
  white-space: nowrap; /* 텍스트가 한 줄로 나오도록 설정 */

  .time {
    color: #4e78b4;
    font-family: 4 "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: left; /* 왼쪽 정렬 */
    white-space: nowrap; /* 텍스트가 한 줄로 나오도록 설정 */
  }
`;

// 메뉴판
export const FoodContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 33.5%;
  z-index: 1;
  width: 303px;
  min-height: 197px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(255, 244, 185, 0.45);
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-wrap: break-word;
  white-space: normal;
  transform: translate(-50%, 0);

  .menu-item {
    display: flex;
    flex-direction: column; /* 수직 정렬 */
    width: 100%; /* 가로 폭을 100%로 설정 */
    padding: 5px 0; /* 위 아래 여백 추가 */
  }

  .menutext {
    color: #57160c;
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }

  .menuclass {
    color: #0c2557;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 800;
    line-height: 20px;
    padding-bottom: 5px; /* 아래 여백 추가 */
  }

  .name-price {
    display: flex; /* 수평 정렬 */
    justify-content: space-between; /* 양 끝으로 공간 배분 */
    width: 100%; /* 가로 폭을 100%로 설정 */
  }

  .menuname {
    color: #0c2557;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    padding-left: 15px;
    text-indent: -7px;
  }

  .price {
    color: #0c2557;
    text-align: right;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 800;
    line-height: 20px; /* 166.667% */
    padding-right: 10px;
  }

  .group-price {
    color: #0c2557;
    text-align: right;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 800;
    line-height: 20px; /* 166.667% */
    padding-right: 10px;
  }
`;

// 푸터 저마다의 빛 글자 로고
export const FooterTextLogo = styled.div`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  z-index: 1; /* Background보다 위에 배치 */
  top: 81%;
  width: 278.288px;
  height: 81.552px;
  flex-shrink: 0;
`;

// 연동 박스
export const FoodBox = styled.div``;
