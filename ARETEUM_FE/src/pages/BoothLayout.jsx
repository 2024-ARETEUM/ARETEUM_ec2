import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { useNavigate } from "react-router-dom";
import * as BL from "../styles/StyledBoothLayout";
import boothData from "../data/BoothLayoutData";

const BoothLayout = () => {
  const navigate = useNavigate();

  const goback = useCallback(() => {
    window.history.back();
  }, []);

  const goDetail = useCallback(() => {
    navigate(`/keyword`);
  }, [navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isClicked1001, setIsClicked1001] = useState(false);
  const [isClicked1002, setIsClicked1002] = useState(false);
  const [isLocationReversed, setIsLocationReversed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const detailRef = useRef(null);
  const [currentDay, setCurrentDay] =
    useState("날짜 선택 후, 구역을 선택하세요");
  const [selectedDay, setSelectedDay] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [activeButton, setActiveButton] = useState("");

  // 이미지 최적화: lazy loading 추가
  const images = useMemo(
    () => [
      `./static/images/BoothLayout/BoothImg1.svg`,
      `./static/images/BoothLayout/BoothImg2.svg`,
    ],
    []
  );

  const [currentImage, setCurrentImage] = useState(0);
  const touchStartX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = useCallback(
    (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      if (touchStartX.current - touchEndX > 50) {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        setIsLocationReversed(!isLocationReversed);
      } else if (touchStartX.current - touchEndX < -50) {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        setIsLocationReversed(!isLocationReversed);
      }
    },
    [images.length, isLocationReversed]
  );

  const handleClick1001 = useCallback(() => {
    setIsClicked1001(true);
    setIsClicked1002(false);
    setCurrentDay("DAY 1");
    filterData("1001", selectedDay);
    resetAnimation();
  }, [selectedDay]);

  const handleClick1002 = useCallback(() => {
    setIsClicked1002(true);
    setIsClicked1001(false);
    setCurrentDay("DAY 2");
    filterData("1002", selectedDay);
    resetAnimation();
  }, [selectedDay]);

  const handleDayClick = useCallback(
    (day) => {
      setSelectedDay(day);
      setActiveButton(day);
      const date = isClicked1001 ? "1001" : "1002";
      filterData(date, day);
    },
    [isClicked1001, isClicked1002]
  );

  const filterData = useCallback((date, day) => {
    const filtered = boothData.filter(
      (booth) =>
        booth[`date${date === "1001" ? "1" : "2"}`] === date &&
        booth.num === day
    );
    setFilteredData(filtered);
  }, []);

  const resetAnimation = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (detailRef.current) {
      observer.observe(detailRef.current);
    }

    return () => {
      if (detailRef.current) {
        observer.unobserve(detailRef.current);
      }
    };
  }, []);

  return (
    <BL.Container>
      <BL.Header>
        <BL.Back>
          <img
            id="back"
            src={`./static/images/Backbtn.svg`}
            alt="back"
            onClick={goback}
          />
        </BL.Back>
        <BL.Title>부스배치도</BL.Title>
      </BL.Header>

      <BL.Background>
        <object
          data={`./static/images/BoothLayout/BLBack.svg`}
          alt="background"
        />
      </BL.Background>

      <BL.Date>
        <img
          id="1001"
          src={`./static/images/BoothLayout/${
            isClicked1001 ? "Clicked1001.svg" : "unClicked1001.svg"
          }`}
          alt="1001"
          onClick={handleClick1001}
          className={isClicked1001 ? "active" : ""}
        />
        <img
          id="1002"
          src={`./static/images/BoothLayout/${
            isClicked1002 ? "Clicked1002.svg" : "unClicked1002.svg"
          }`}
          alt="1002"
          onClick={handleClick1002}
          className={isClicked1002 ? "active" : ""}
        />
      </BL.Date>

      <BL.BoothImg onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <BL.BoothImgback>
          <img src={images[currentImage]} alt="boothimg" loading="lazy" />
        </BL.BoothImgback>

        <BL.Location>
          {!isLocationReversed ? (
            <>
              <img
                src={`./static/images/BoothLayout/Location1.svg`}
                alt="location1"
              />
              <img
                src={`./static/images/BoothLayout/Location2.svg`}
                alt="location2"
              />
            </>
          ) : (
            <>
              <img
                src={`./static/images/BoothLayout/Location2.svg`}
                alt="location2"
              />
              <img
                src={`./static/images/BoothLayout/Location1.svg`}
                alt="location1"
              />
            </>
          )}
        </BL.Location>
      </BL.BoothImg>

      <BL.Buttons>
        {["1", "2", "3", "4", "5"].map((day) => (
          <BL.DayButton
            key={day}
            id={`day${day}`}
            active={activeButton === day}
            onClick={() => handleDayClick(day)}
          >
            {["축운위", "한잔하솜", "코튼마켓", "제휴/푸드", "일반"][day - 1]}
          </BL.DayButton>
        ))}
      </BL.Buttons>

      <BL.BoothInfo>
        <BL.Box>
          <BL.DAY>{currentDay}</BL.DAY>
          <BL.Booths>
            {filteredData.map((booth, index) => (
              <div id="one" key={index}>
                <div id="wrap">
                  <img
                    src={`${
                      booth.num === "3" || booth.num === "4"
                        ? `./static/images/BoothLayout/NumberSmall.svg`
                        : `./static/images/BoothLayout/Number.svg`
                    }`}
                    alt="num"
                    className={`num-${booth.num}`}
                    style={{
                      marginTop:
                        booth.num === "3" || booth.num === "4" ? "4px" : "0px",
                      marginLeft:
                        booth.num === "3" || booth.num === "4" ? "6px" : "0px",
                      marginRight:
                        booth.num === "3" || booth.num === "4" ? "5px" : "0px",
                    }}
                  />
                  {booth.num !== "3" && booth.num !== "4" && (
                    <div id="num">{index + 1}</div>
                  )}
                </div>
                <div id="name">{booth.name}</div>
              </div>
            ))}
          </BL.Booths>
        </BL.Box>
      </BL.BoothInfo>

      <BL.Detail ref={detailRef} isVisible={isVisible}>
        <div id="detail" onClick={goDetail}>
          부스 상세정보
        </div>
      </BL.Detail>

      <BL.Footer>
        <object data={`./static/images/Footer.svg`} alt="footer" />
      </BL.Footer>
    </BL.Container>
  );
};

export default BoothLayout;
