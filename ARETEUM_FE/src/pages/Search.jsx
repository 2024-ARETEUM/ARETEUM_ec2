import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "../styles/StyledSearch";

const Search = () => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  };

  const [list2Items, setList2Items] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const axiosInstance = axios.create({
    baseURL: "http://3.35.236.11/api/",
    headers: {
      "Content-Type": "application/json",
    },
  });

  useEffect(() => {
    // 초기 데이터 로드
    const fetchAllBooths = async () => {
      try {
        const response = await axiosInstance.get("/booth-search/");
        console.log("초기 데이터 응답:", response.data);
        setList2Items(response.data.results);
        setTotalResults(response.data.count);
      } catch (error) {
        console.error("초기 데이터 로드 중 오류 발생:", error.message);
      }
    };

    fetchAllBooths();
  }, []); // 빈 배열을 의존성으로 설정해 한 번만 실행

  const handleSearch = async () => {
    setSearchPerformed(true);
    try {
      const response = await axiosInstance.get("/booth-search/", {
        params: { search: searchQuery },
      });
      console.log("서버 응답:", response.data);
      setList2Items(response.data.results);
      setTotalResults(response.data.count);
    } catch (error) {
      console.error("검색 중 오류 발생:", error.message);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleBoothClick = (id) => {
    if ((id >= 1 && id <= 8) || (id >= 40 && id <= 45)) {
      navigate(`/foodbooth/${id}`);
    } else {
      navigate(`/generalbooth/${id}`);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Back>
          <img
            id="back"
            src={`./static/images/Backbtn.svg`}
            alt="back"
            onClick={goback}
          />
        </S.Back>
        <S.Title>부스 검색</S.Title>
      </S.Header>
      <S.Background>
        <object data={`./static/images/KeyBack2.svg`} alt="background" />
      </S.Background>
      <object
        data={`./static/images/C.svg`}
        alt="LCloud"
        style={{
          position: "absolute",
          top: "120px",
          left: "0px",
          width: "270px",
        }}
      />
      <object
        data={`./static/images/G.svg`}
        alt="PBouble"
        style={{ position: "absolute", top: "280px", right: "0px" }}
      />
      <object
        data={`./static/images/E.svg`}
        alt="R1Star"
        style={{ position: "absolute", top: "50px", right: "80px" }}
      />
      <object
        data={`./static/images/E.svg`}
        alt="R1Star"
        style={{
          position: "absolute",
          top: "143px",
          left: "107px",
          width: "50px",
        }}
      />
      <object
        data={`./static/images/E.svg`}
        alt="Under3Star"
        style={{ position: "absolute", top: "300px", left: "0px" }}
      />
      <object
        data={`./static/images/J.svg`}
        alt="OBouble"
        style={{
          position: "absolute",
          top: "570px",
          left: " 0px",
          width: "150px",
        }}
      />
      {!searchPerformed || totalResults > 0 ? (
        //검색 결과가 없을 때만 Som.svg를 숨기고, 그 외에는 항상 보여줌
        <object
          data={`./static/images/Som.svg`}
          alt="Som"
          style={{ position: "absolute", top: "380px", left: "60px" }}
        />
      ) : null}
      <object
        data={`./static/images/E.svg`}
        alt="E"
        style={{ position: "absolute", top: "200px", right: "20px" }}
      />
      <S.InputBlank>
        <input
          type="text"
          placeholder="관심있는 부스를 검색해보세요."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <img
          id="search"
          src={`./static/images/Search2.svg`}
          alt="검색 버튼"
          onClick={handleSearch}
        />
      </S.InputBlank>

      <S.List>
        <S.ResultCount>
          {totalResults > 0 ? `총 ${totalResults}개의 부스` : ""}
        </S.ResultCount>

        {totalResults > 0 ? (
          // 검색 결과가 있을 때
          <S.List2>
            {list2Items.map((item) => {
              const isTargetId = item.id === 10; // 특정 아이디 확인(에꿀라또 부스) -> 폰트 사이즈 수정
              const isTargetId27 = item.id === 27; // 특정 아이디 확인(에코) -> width 수정
              const isTargetId35Or38Or39 =
                item.id === 35 || item.id === 38 || item.id === 39; // 특정 아이디(상시운영) 운영시간 수정

              return (
                <S.Booth
                  key={item.id}
                  onClick={() => handleBoothClick(item.id)}
                >
                  <S.Bname
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
                  </S.Bname>
                  <S.Time>운영시간</S.Time>
                  <S.Blocation>{item.place}</S.Blocation>
                  <br />
                  <S.Btime
                    style={{
                      left: isTargetId35Or38Or39 ? "207px" : "223px",
                    }}
                  >
                    {item.timeDay1 || ""}
                  </S.Btime>
                  {isTargetId35Or38Or39 ? null : item.timeDay2 ? (
                    <S.Btime2
                      style={{ marginTop: item.timeDay1 ? "0" : "-15px" }}
                    >
                      {item.timeDay2}
                    </S.Btime2>
                  ) : null}
                </S.Booth>
              );
            })}
          </S.List2>
        ) : (
          searchPerformed && (
            <S.NoResult>
              <object
                data={`./static/images/NoResult.svg`}
                alt="검색 결과 없음"
              />
            </S.NoResult>
          )
        )}
      </S.List>

      <S.Footer>
        <object data={`./static/images/Footer.svg`} alt="footer" />
      </S.Footer>
    </S.Container>
  );
};

export default Search;
