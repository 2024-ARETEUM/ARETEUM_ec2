import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  margin-top: 0px;
  background: linear-gradient(180deg, #0c2456 0%, #0a759f 100%);
  min-height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
`;

export const Background = styled.div`
  position: absolute; /* 상대 위치 설정으로 자연스럽게 배치 */
  margin-top: 250px;
  margin-left: 20px;
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

export const Search = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  margin-top: 25px;
  margin-right: 8px;
`;

export const Border = styled.div`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  margin-left: 27px;
  border-bottom: 1.5px solid white;
  width: 340px;
  padding-bottom: 2px;
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

export const Keywordd = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  flex-shrink: 0;
  background: none;
`;

export const Box3 = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 380px;
  margin-top: 20px;
  flex-shrink: 0;
  background: none;
`;

export const Box2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: -65px;
`;

export const SmallBox5 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 90px;
  cursor: pointer;
  margin-left: 0px;
`;

export const SmallBox6 = styled.div`
  position: relative;
  color: #0d2557;
  display: flex;
  flex-direction: column;
  margin-top: -20px;
  margin-right: -8px;
  right: 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 76.354px;
  height: 34px;
  flex-shrink: 0;
  border-radius: 30px;
  text-align: center;
  background: ${(props) => (props.isClicked ? "#FFF4B9" : "#fff")};
  transition: all 0.1s ease;

  /* 클릭 시 주변 블러 효과 */
  box-shadow: ${(props) =>
    props.isClicked ? "0 0 15px 3px rgba(120, 120, 120, 1)" : "none"};
`;

export const ResultCount = styled.div`
  position: relative;
  display: flex;
  background: none;
  margin-left: 24px;
  margin-top: -5px;
  flex-shrink: 0;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const List = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 20px;
  margin-left: 3px;
  height: 460px;
  background: none;
`;

export const List2 = styled.div`
  display: flex;
  position: relative;
  z-index: 10;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 5px;
  height: 500px;
  width: 393px;
  overflow-x: auto;
  scrollbar-width: none;
  background-color: none;
  border: none;
`;

export const Booth = styled.div`
  position: relative;
  display: flex;
  margin-left: 25px;
  margin-top: 30px;
  width: 335px;
  height: 105px;
  border-radius: 20px;
  background-color: #fff;
  justify-content: center;
  cursor: pointer;
`;

export const Bname = styled.div`
  display: flex;
  height: 105px;
  width: 215px;
  margin-left: -75px;
  padding-top: 18px;
  flex-shrink: 0;
  background: none;
  color: #0c2557;
  font-family: "Pretendard Variable";
  font-size: 17px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
`;

export const Time = styled.div`
  position: absolute;
  display: flex;
  height: 105px;
  width: 112.129px;
  background: none;
  margin-left: -176px;
  margin-top: 60px;
  flex-shrink: 0;
  color: #0c2557;
  font-family: "Pretendard Variable";
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Blocation = styled.div`
  position: absolute;
  display: flex;
  top: 24px;
  left: 233px;
  width: 80.422px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 50px;
  border: 1px solid #0c2557;
  background: #0c2456;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Btime = styled.div`
  position: absolute;
  display: flex;
  width: 90px;
  top: 60px;
  left: 223px;
  background: none;
  display: flex;
  color: #0c2557;
  text-align: right;
  font-family: "Pretendard Variable";
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
`;

export const Btime2 = styled.div`
  position: absolute;
  display: flex;
  width: 90px;
  top: 75px;
  left: 223px;
  background: none;
  display: flex;
  color: #0c2557;
  text-align: right;
  font-family: "Pretendard Variable";
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
`;

export const SmallBox4 = styled.div`
  display: inline-flex;
  margin-top: -25px;
  margin-left: 3px;
  height: 40px;
  width: 60px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
