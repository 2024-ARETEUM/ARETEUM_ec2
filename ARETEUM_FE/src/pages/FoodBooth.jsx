import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as F from "../styles/StyledFoodBooth";
import axios from "axios";

const FoodBooth = () => {
  const { id } = useParams();
  const [fontSize, setFontSize] = useState("25px"); // 기본 폰트 크기 상태 추가
  const navigate = useNavigate();
  const [boothData, setBoothData] = useState(null); // 부스 데이터를 저장할 state

  const goback = () => {
    window.history.back();
  };

  useEffect(() => {
    // 컴포넌트가 마운트되면 상단으로 스크롤
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://3.35.236.11/api/booth-detail/${id}/`
        );
        setBoothData(response.data); // API에서 받아온 데이터를 상태에 저장

        // booth 객체가 존재하는지 확인하고 name의 길이를 체크!
        if (response.data.booth && response.data.booth.name) {
          if (response.data.booth.name.length > 15) {
            setFontSize("20px");
          } else {
            setFontSize("25px");
          }
        }
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
      }
    };

    fetchData();
  }, []);

  if (!boothData) {
    return <div>Loading...</div>; // 데이터를 불러오는 중일 때
  }

  const { booth, menu } = boothData; // 데이터 구조에서 booth와 menu를 분리

  const convertNewlinesToBreaks = (text) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <F.Container>
      <F.Header>
        <F.Back>
          <img
            id="back"
            src={`http://3.35.236.11/static/images/Backbtn.svg`}
            alt="back"
            onClick={goback}
          />
        </F.Back>
        <F.Title>부스 소개</F.Title>
      </F.Header>
      <F.BoothContainer />
      <F.BoothTag>{booth.category}</F.BoothTag>
      <F.BoothTitle style={{ fontSize }}>{booth.name}</F.BoothTitle>{" "}
      <F.BoothHost>{booth.host}</F.BoothHost>
      <F.BoothInfo>📣 부스 운영 정보</F.BoothInfo>
      <F.LocationIcon />
      <F.BoothLocation>{booth.place}</F.BoothLocation>
      <F.ClockIcon />
      <F.BoothDate>
        {booth.date === "day1" && (
          <>
            10/1 (화) <span className="time">{booth.timeDay1}</span>
          </>
        )}
        {booth.date === "day2" && (
          <>
            10/2 (수) <span className="time">{booth.timeDay2}</span>
          </>
        )}
        {booth.date === "both" && (
          <>
            10/1 (화) <span className="time">{booth.timeDay1}</span>
            <br />
            10/2 (수) <span className="time">{booth.timeDay2}</span>
          </>
        )}
      </F.BoothDate>
      <F.FoodContainer>
        <span className="menutext">🔴 메뉴</span>
        {menu && menu.length > 0 ? (
          Array.isArray(menu[0].foodList) ? (
            // 주점 데이터 처리
            menu.map((group, index) => (
              <div key={index} className="menu-group">
                {group.menuGroup !== "default" && (
                  <span
                    className="menuclass"
                    dangerouslySetInnerHTML={{
                      __html: `&lt;${group.menuGroup}&gt;`,
                    }}
                  ></span>
                )}
                {group.menuGroupPrice && (
                  <span className="group-price" style={{ float: "right" }}>
                    {group.menuGroupPrice &&
                      group.menuGroupPrice.toLocaleString()}
                  </span>
                )}
                {group.foodList.map((food, idx) => (
                  <div key={idx} className="name-price">
                    <span className="menuname">
                      {" "}
                      • {convertNewlinesToBreaks(food.name)}
                    </span>
                    {food.price && (
                      <span className="price">
                        {food.price.toLocaleString()}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))
          ) : (
            // 푸드트럭 데이터 처리
            menu.map((food, index) => (
              <div key={index} className="name-price">
                <span className="menuname">
                  • {convertNewlinesToBreaks(food.name)}
                </span>
                {food.price && (
                  <span className="price">{food.price.toLocaleString()}</span>
                )}
              </div>
            ))
          )
        ) : (
          <div>메뉴가 없습니다.</div> // 메뉴가 없을 경우 처리
        )}
      </F.FoodContainer>
      <F.FooterTextLogo>
        <object
          data={`http://3.35.236.11/static/images/FooterTextLogo.svg`}
          alt="footer text logo"
        />
      </F.FooterTextLogo>
      <F.Footer>
        <object
          data={`http://3.35.236.11/static/images/Footer.svg`}
          alt="footer"
        />
      </F.Footer>
    </F.Container>
  );
};

export default FoodBooth;
