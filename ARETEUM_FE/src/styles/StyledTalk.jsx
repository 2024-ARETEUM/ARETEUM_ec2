import { styled } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  margin-top: 0px;
  background: linear-gradient(180deg, #0c2456 0%, #0a759f 100%);
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
`;

export const Background = styled.div`
  position: relative; /* 상대 위치 설정으로 자연스럽게 배치 */
  //   margin-top: 70px; /* Header의 높이만큼 띄워줍니다. */
  width: 393px;
  height: 737px;
  flex-shrink: 0;
  z-index: 0; /* 다른 요소들 뒤에 배치 */

  object {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 배경 이미지가 화면에 맞게 늘어나도록 설정 */
  }
`;

export const Som = styled.div`
  position: absolute; /* 절대 위치로 설정하여 Background 위에 배치 */
  top: 30%; /* 원하는 위치에 배치 (예시로 화면의 절반 위치) */
  left: 50%;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  z-index: 1; /* Background보다 위에 배치 */

  object {
    width: 414px;
    height: 414px;
    flex-shrink: 0;
  }
`;

export const Talk = styled.div`
  position: relative;
  bottom: 65%;
  z-index: 3; /* Som보다 위에 배치 */
  height: 33%;
  border: none;
  border-radius: 10px;

  mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0));

  overflow-y: auto; /* 스크롤 */
  display: flex;
  margin: 10px;
  flex-direction: column;
  /* 스크롤바 스타일링 */

  &::-webkit-scrollbar {
    width: 8px; /* 스크롤바 너비 */
    margin-right: 4px; /* 여백 추가 */
    margin-left: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffd7e3; /* 스크롤바 색상 */
    border-radius: 4px; /* 스크롤바 모서리 */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* 트랙 배경 색상 (투명) */
  }
`;

export const TalkContent = styled(motion.div)`
  display: inline-block;
  padding: 10px 15px;
  margin: 5px 0;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(4px);
  border-radius: 30px;
  box-sizing: border-box;
  word-wrap: break-word;
  color: #0c2557;
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.375px;
  word-wrap: break-word;
  word-break: break-all;
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

export const Comment = styled.div`
  width: 350px;
  height: 55px;
  flex-shrink: 0;
  justify-content: space-between;
  border-radius: 20px;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  position: absolute;
  margin: 0 auto; /* 중앙 배치 */
  top: 9px;
  padding: 5px 10px;

  left: 50%;
  transform: translateX(-50%); /* 화면 중앙으로 정렬 */

  input {
    flex: 1;
    border: none;
    padding: 10px;
    width: 250px;
    color: #5a5a5a;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    outline: none;
  }

  p {
    color: #5a5a5a;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.45px;
  }

  button {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    cursor: pointer;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px; /* 이미지와 입력칸 사이 여백 추가 */
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Footer = styled.footer`
  width: 393px;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed; /* 화면 하단에 고정 */
  padding: 20px;
  bottom: 0;
  position: absolute;
  flex-direction: column; /* 푸터 안에서 세로 정렬 */
`;
