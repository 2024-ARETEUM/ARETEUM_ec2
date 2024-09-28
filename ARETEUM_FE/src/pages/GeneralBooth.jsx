import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as G from "../styles/StyledGeneralBooth";
import axios from "axios";
import { useEffect, useState } from "react";

const GeneralBooth = () => {
  const { id } = useParams(); // URL에서 부스 ID를 가져옴
  const navigate = useNavigate();
  const [content, setContent] = useState([]);
  const [fontSize, setFontSize] = useState("25px"); // 기본 폰트 크기 상태 추가

  useEffect(() => {
    // 컴포넌트가 마운트되면 상단으로 스크롤
    window.scrollTo(0, 0);
  }, []);

  const goback = () => {
    window.history.back();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://3.35.236.11/api/booth-detail/${id}/`
        );
        setContent([response.data]); // 데이터 설정

        // BoothTitle의 글자 수에 따라 폰트 크기 결정
        if (response.data.name.length > 15) {
          setFontSize("20px");
        } else {
          setFontSize("25px");
        }
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
      }
    };

    fetchData();
  }, []);

  const convertNewlinesToBreaks = (text) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <G.Container>
      <G.Header>
        <G.Back>
          <img
            id="back"
            src={`http://3.35.236.11/static/images/Backbtn.svg`}
            alt="back"
            onClick={goback}
          />
        </G.Back>
        <G.Title>부스 소개</G.Title>
      </G.Header>
      {content.map((e) => (
        <G.BoothBox key={e.id}>
          <G.BoothContainer />
          <G.BoothTag>{e.category}</G.BoothTag>
          <G.BoothTitle style={{ fontSize }}>{e.name}</G.BoothTitle>{" "}
          {/* 동적 fontSize 적용 */}
          <G.BoothImage>
            <img src={e.image} alt="booth image" />
          </G.BoothImage>
          <G.BoothInfo>📣 부스 운영 정보</G.BoothInfo>
          <G.LocationIcon />
          <G.BoothLocation>{e.place}</G.BoothLocation>
          <G.ClockIcon />
          <G.BoothDate>
            {e.date === "day1" ? (
              <>
                10/1 (화) <span className="time">{e.timeDay1}</span>
              </>
            ) : e.date === "day2" ? (
              <>
                10/2 (수) <span className="time">{e.timeDay2}</span>
              </>
            ) : e.date === "both" ? (
              <>
                10/1 (화) <span className="time">{e.timeDay1}</span>
                <br />
                10/2 (수) <span className="time">{e.timeDay2}</span>
              </>
            ) : (
              e.date
            )}
          </G.BoothDate>
          <G.BoothIntro>부스 소개</G.BoothIntro>
          <G.BoothIntroContent>
            {convertNewlinesToBreaks(e.introduction)}
          </G.BoothIntroContent>
        </G.BoothBox>
      ))}
      <G.FooterTextLogo>
        <object
          data={`http://3.35.236.11/static/images/FooterTextLogo.svg`}
          alt="footer text logo"
        />
      </G.FooterTextLogo>
      <G.Footer>
        <object
          data={`http://3.35.236.11/static/images/Footer.svg`}
          alt="footer"
        />
      </G.Footer>
    </G.Container>
  );
};

export default GeneralBooth;
