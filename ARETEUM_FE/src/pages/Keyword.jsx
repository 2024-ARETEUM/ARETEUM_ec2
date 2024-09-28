import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as K from "../styles/StyledKeyword";
import axios from "axios";

const Keyword = () => {
  const navigate = useNavigate();
  const [selectedCategoryBox, setSelectedCategoryBox] = useState(null);
  const [list2Items, setList2Items] = useState([]);
  const [isDate1Clicked, setIsDate1Clicked] = useState(true); // Date 1을 디폴트로 설정
  const [isDate2Clicked, setIsDate2Clicked] = useState(false);
  const [category, setCategory] = useState(null);
  const [totalResults, setTotalResults] = useState(0);

  const goback = () => {
    navigate(`/`);
  };

  const gosearch = () => {
    navigate(`/search`);
  };

  const handleCategoryBoxClick = (index, category) => {
    setSelectedCategoryBox(index);
    setCategory(category);
    if (isDate1Clicked) {
      fetchBoothData("http://3.35.236.11/api/booth-day1/", category);
    } else if (isDate2Clicked) {
      fetchBoothData("http://3.35.236.11/api/booth-day2/", category);
    }
  };

  const fetchBoothData = async (url, category) => {
    try {
      const response = await axios.get(url, {
        params: { category },
      });
      console.log("서버 응답:", response.data);
      setList2Items(response.data.boothsList);
      setTotalResults(response.data.boothsCount);
    } catch (error) {
      console.error("부스 데이터를 가져오는 중 오류 발생:", error);
    }
  };

  const handleDate1Click = () => {
    setIsDate1Clicked(true);
    setIsDate2Clicked(false);
    fetchBoothData("http://3.35.236.11/api/booth-day1/", category);
  };

  const handleDate2Click = () => {
    setIsDate1Clicked(false);
    setIsDate2Clicked(true);
    fetchBoothData("http://3.35.236.11/api/booth-day2/", category);
  };

  useEffect(() => {
    // 첫 화면에서 Date 1 데이터 디폴트
    fetchBoothData("http://3.35.236.11/api/booth-day1/", category);
  }, []);

  useEffect(() => {
    if ((isDate1Clicked || isDate2Clicked) && category) {
      fetchBoothData(
        isDate1Clicked
          ? "http://3.35.236.11/api/booth-day1/"
          : "http://3.35.236.11/api/booth-day2/",
        category
      );
    }
  }, [category, isDate1Clicked, isDate2Clicked]);

  const handleBoothClick = (id) => {
    if ((id >= 1 && id <= 8) || (id >= 40 && id <= 45)) {
      navigate(`/foodbooth/${id}`);
    } else {
      navigate(`/generalbooth/${id}`);
    }
  };

  return (
    <K.Container>
      <K.Header>
        <K.Back>
          <img
            id="back"
            src={`./static/images/Backbtn.svg`}
            alt="back"
            onClick={goback}
          />
        </K.Back>
        <K.Search>
          <img
            id="search"
            src={`./static/images/Search.svg`}
            alt="search"
            onClick={gosearch}
            style={{ position: "relative", right: "10px" }}
          />
        </K.Search>
        <K.Title>부스 소개</K.Title>
      </K.Header>
      <K.Background>
        <object data={`./static/images/KeyBack2.svg`} alt="background" />
      </K.Background>
      <object
        data={`./static/images/C.svg`}
        alt="LCloud"
        style={{ position: "absolute", top: "105px", left: "0px" }}
      />
      <object
        data={`./static/images/F.svg`}
        alt="RCluod"
        style={{ position: "absolute", top: "230px", right: "0px" }}
      />
      <object
        data={`./static/images/G.svg`}
        alt="PBouble"
        style={{ position: "absolute", top: "170px", left: "0px" }}
      />
      <object
        data={`./static/images/E.svg`}
        alt="R1Star"
        style={{ position: "absolute", top: "80px", right: "43px" }}
      />
      <object
        data={`./static/images/E.svg`}
        alt="Up2Star"
        style={{
          position: "absolute",
          top: "110px",
          left: "30px",
          width: "40px",
        }}
      />
      <object
        data={`./static/images/E.svg`}
        alt="Up1Star"
        style={{
          position: "absolute",
          top: "78px",
          left: "0px",
          width: "65px",
        }}
      />
      <object
        data={`./static/images/E.svg`}
        alt="Under3Star"
        style={{ position: "absolute", top: "300px", left: "0px" }}
      />
      <object
        data={`./static/images/E.svg`}
        alt="Under2Star"
        style={{ position: "absolute", top: "285px", right: "80px" }}
      />
      <object
        data={`./static/images/E.svg`}
        alt="Under1Star"
        style={{
          position: "absolute",
          top: "260px",
          right: "50px",
          width: "50px",
        }}
      />
      <object
        data={`./static/images/A.svg`}
        alt="YBouble"
        style={{
          position: "absolute",
          top: "90px",
          right: "0px",
          width: "70px",
        }}
      />
      <K.Box>
        <K.Box2>
          <K.Keywordd>
            <K.SmallBox5
              onClick={handleDate1Click}
              $isClicked={isDate1Clicked ? 1 : 0}
              style={{ marginLeft: isDate1Clicked ? "-25px" : "-25px" }}
            >
              <img
                src={`./static/images/${
                  isDate1Clicked ? "Date11.svg" : "Date1.svg"
                }`}
                alt="Date 1"
              />
            </K.SmallBox5>
          </K.Keywordd>

          <K.Keywordd>
            <K.SmallBox5
              onClick={handleDate2Click}
              $isClicked={isDate2Clicked ? 1 : 0}
              style={{ marginLeft: isDate1Clicked ? "-10px" : "-10px" }}
            >
              <img
                src={`./static/images/${
                  isDate2Clicked ? "Date22.svg" : "Date2.svg"
                }`}
                alt="Date 2"
              />
            </K.SmallBox5>
          </K.Keywordd>
        </K.Box2>
      </K.Box>
      <K.Box3>
        <K.Box2>
          {["체험", "마켓", "한잔하솜", "푸드트럭"].map((category, index) => (
            <K.Keywordd key={index}>
              <K.SmallBox6
                onClick={() => handleCategoryBoxClick(index, category)}
                isClicked={selectedCategoryBox === index ? 1 : 0}
              >
                <div style={{ fontWeight: "bold", fontSize: "13px" }}>
                  {category}
                </div>
              </K.SmallBox6>
            </K.Keywordd>
          ))}
        </K.Box2>
      </K.Box3>
      <K.Border>
        <div></div>
      </K.Border>
      <K.List>
        <K.ResultCount>
          {totalResults > 0 ? `총 ${totalResults}개의 부스` : ""}
        </K.ResultCount>

        <K.List2>
          {list2Items.map((item) => {
            const isTargetId = item.id === 10; // 특정 아이디 확인(에꿀라또 부스) -> 폰트 사이즈 수정
            const isTargetId27 = item.id === 27; // 특정 아이디 확인(에코) -> width 수정
            const isTargetId35Or38Or39 =
              item.id === 35 || item.id === 38 || item.id === 39; // 특정 아이디(상시운영) 운영시간 수정

            return (
              <K.Booth key={item.id} onClick={() => handleBoothClick(item.id)}>
                <K.Bname
                  style={{
                    fontSize: isTargetId
                      ? "17px"
                      : item.name.length > 15
                      ? "13px"
                      : "17px", // 아이디가 10일 때 글자 크기 지정(영어포함 부스)
                    marginTop: isTargetId
                      ? "1px"
                      : item.name.length > 15
                      ? "6px"
                      : "3.3px",
                    width: isTargetId27 ? "205px" : "215px",
                    marginLeft: isTargetId27 ? "-82px" : "-75px",
                  }}
                >
                  {item.name}
                </K.Bname>
                <K.Time>운영시간</K.Time>
                <K.Blocation>{item.place}</K.Blocation>
                <br />
                <K.Btime
                  style={{
                    left: isTargetId35Or38Or39 ? "207px" : "223px",
                  }}
                >
                  {item.timeDay1 || ""}
                </K.Btime>
                {isTargetId35Or38Or39 ? null : item.timeDay2 ? (
                  <K.Btime2
                    style={{ marginTop: item.timeDay1 ? "0" : "-15px" }}
                  >
                    {item.timeDay2}
                  </K.Btime2>
                ) : null}
              </K.Booth>
            );
          })}
        </K.List2>
      </K.List>

      <K.Footer>
        <object data={`./static/images/Footer.svg`} alt="footer" />
      </K.Footer>
    </K.Container>
  );
};

export default Keyword;
