import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import * as TT from "../styles/StyledTimeTable";
import boothData from "../data/TimeTableData";

const TimeTable = () => {
  const navigate = useNavigate();

  const goback = useCallback(() => {
    window.history.back();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isClicked1001, setIsClicked1001] = useState(true);
  const [isClicked1002, setIsClicked1002] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(
    `./static/images/TimeTable/TTBack.svg`
  );
  const [animateBooths, setAnimateBooths] = useState(false);
  const [showBooths, setShowBooths] = useState(true);
  const [activeDate, setActiveDate] = useState("1001");

  const [boothText, setBoothText] = useState(`
    솜원을 말해봐 / 동덕연화 <br /> 
    포토존 '빛의 거리, 빛의 순간' <br />
    포토부스 RGB 스튜디오 / 놀러와요 도담이네
    <br /> 오늘 밤은 여기 ‘로타’ / 불꽃피움
    <br />
    나란 돌쇠의 마님 환영회 / 화학과 주점
    <br />
    밤하늘을 쏘다 / 국경 없는 바(BAR)
    <br />
    헤어지자고? 링크 주점 이제 시작인데?
  `);

  const [boothTop, setBoothTop] = useState("370px");
  const [centerHeight, setCenterHeight] = useState("370px");
  const [backSize, setBackSize] = useState("1000px");
  const [footerPaddingTop, setFooterPaddingTop] = useState("50px");
  const [somSomTop, setSomSomTop] = useState("550px");

  const triggerAnimation = useCallback(() => {
    setShowBooths(false);
    setAnimateBooths(false);
    setTimeout(() => {
      setShowBooths(true);
      setAnimateBooths(true);
    }, 200);
  }, []);

  const handleClick1001 = useCallback(() => {
    setActiveDate("1001");
    setIsClicked1001(true);
    setIsClicked1002(false);
    setBoothTop("370px");
    setBackgroundImage(`./static/images/TimeTable/TTBack.svg`);
    setCenterHeight("360px");
    setFooterPaddingTop("50px");
    setSomSomTop("550px");
    triggerAnimation();
    setBackSize("1000px");

    setBoothText(`
      솜원을 말해봐 / 동덕연화 <br /> 
      포토존 '빛의 거리, 빛의 순간' <br />
      포토부스 RGB 스튜디오 / 놀러와요 도담이네
      <br /> 오늘 밤은 여기 ‘로타’ / 불꽃피움
      <br />
      나란 돌쇠의 마님 환영회 / 화학과 주점
      <br />
      밤하늘을 쏘다 / 국경 없는 바(BAR)
      <br />
      헤어지자고? 링크 주점 이제 시작인데?
    `);
  }, [triggerAnimation]);

  const handleClick1002 = useCallback(() => {
    setActiveDate("1002");
    setIsClicked1001(false);
    setIsClicked1002(true);
    setBoothTop("440px");
    setBackgroundImage(`./static/images/TimeTable/TT1002Back.svg`);
    setCenterHeight("520px");
    setFooterPaddingTop("580px");
    setSomSomTop("700px");
    triggerAnimation();
    setBackSize("1150px");

    setBoothText(`
      솜원을 말해봐 / 동덕연화 (~20시) <br /> 
      포토존 '빛의 거리, 빛의 순간' <br />
      포토부스 RGB 스튜디오 / 놀러와요 도담이네
      <br /> 오늘 밤은 여기 ‘로타’ / 불꽃피움
      <br />
      나란 돌쇠의 마님 환영회 / 화학과 주점
      <br />
      밤하늘을 쏘다 / 국경 없는 바(BAR)
      <br />
      헤어지자고? 링크 주점 이제 시작인데?
    `);
  }, [triggerAnimation]);

  const filteredBooths = useMemo(
    () => boothData.filter((booth) => booth.date === activeDate),
    [activeDate]
  );

  return (
    <TT.Container style={{ height: backSize }}>
      <TT.Header>
        <TT.Back>
          <img
            id="back"
            src={`./static/images/Backbtn.svg`}
            alt="back"
            onClick={goback}
          />
        </TT.Back>
        <TT.Title>타임테이블</TT.Title>
      </TT.Header>
      <TT.Background>
        <object data={backgroundImage} alt="background" />
      </TT.Background>
      <TT.Wrap>
        <TT.Date>
          <img
            id="1001"
            src={`./static/images/TimeTable/${
              isClicked1001 ? "Clicked1001.svg" : "unClicked1001.svg"
            }`}
            alt="1001"
            onClick={handleClick1001}
            className={isClicked1001 ? "active" : ""}
          />
          <img
            id="1002"
            src={`./static/images/TimeTable/${
              isClicked1002 ? "Clicked1002.svg" : "unClicked1002.svg"
            }`}
            alt="1002"
            onClick={handleClick1002}
            className={isClicked1002 ? "active" : ""}
          />
        </TT.Date>
        <TT.Table>
          <TT.Menu>
            <div id="title">부스</div>
            <div id="line1"></div>
          </TT.Menu>
          <TT.Center style={{ height: centerHeight }}></TT.Center>
          <TT.Menu>
            <div id="title">공연</div>
            <div id="line2"></div>
          </TT.Menu>

          {showBooths && (
            <TT.Boothlist style={{ top: boothTop }}>
              {filteredBooths.map((booth, index) => (
                <TT.Booth
                  key={index}
                  type={booth.type}
                  className={animateBooths ? "animate" : ""}
                  delay={`${index * 0.5}s`}
                >
                  <div id="wrap" type={booth.type}>
                    <div id="top" type={booth.type}>
                      {booth.type === "부스" ? (
                        <>
                          <p id="time">{booth.time}</p>
                          <img
                            id="arrow"
                            type={booth.type}
                            src={`./static/images/TimeTable/${
                              booth.type === "부스"
                                ? "boothArrow.svg"
                                : "performanceArrow.svg"
                            }`}
                            alt={booth.name}
                          />
                        </>
                      ) : (
                        <>
                          <img
                            id="arrow"
                            type={booth.type}
                            src={`./static/images/TimeTable/${
                              booth.type === "부스"
                                ? "boothArrow.svg"
                                : "performanceArrow.svg"
                            }`}
                            alt={booth.name}
                          />
                          <p id="time">{booth.time}</p>
                        </>
                      )}
                    </div>
                    <div id="bottom" type={booth.type}>
                      <p id="name">{booth.name}</p>
                      <p id="info" type={booth.type} date={booth.date}>
                        {booth.info}
                      </p>
                    </div>
                  </div>
                </TT.Booth>
              ))}
            </TT.Boothlist>
          )}
        </TT.Table>
        <TT.SomSom style={{ top: somSomTop }}>
          <object
            id="somsom"
            data={`./static/images/TimeTable/SomSom.svg`}
            alt="somsom"
          />
        </TT.SomSom>
        <TT.TextBox>
          <p id="title">12:00 - 22:00 상시 운영 부스</p>
          <p id="booth" dangerouslySetInnerHTML={{ __html: boothText }} />
        </TT.TextBox>
      </TT.Wrap>

      <TT.Footer style={{ paddingTop: footerPaddingTop }}>
        <object data={`./static/images/Footer.svg`} alt="footer" />
      </TT.Footer>
    </TT.Container>
  );
};

export default TimeTable;
