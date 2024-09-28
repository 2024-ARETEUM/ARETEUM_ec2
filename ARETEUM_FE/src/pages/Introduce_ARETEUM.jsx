import { React, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as I from "../styles/StyledIntroduce_ARETEUM";

const Introduce_ARETEUM = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 컴포넌트가 마운트되면 상단으로 스크롤
    window.scrollTo(0, 0);
  }, []);

  const goback = () => {
    navigate(`/`);
  };

  const goIntroduce_Management = () => {
    navigate(`/Introduce_Management`);
  };

  const goIntroduce_Lion = () => {
    navigate(`/Introduce_Lion`);
  };

  const handlePageUrl = () => {
    window.open(
      "https://www.instagram.com/ddwu.festival?igsh=MWo3YnFnMTBweWF1ZA==",
      "_blank"
    );
  };

  return (
    <I.Container>
      <I.Header>
        <I.Back>
          <img
            id="back"
            src={`./static/images/Backbtn.svg`}
            alt="back"
            onClick={goback}
          />
        </I.Back>
        <I.Title>만든이들</I.Title>
      </I.Header>
      <I.Menu>
        <div id="choice1">ARETEUM</div>
        <div id="choice2" onClick={goIntroduce_Management}>
          축운위
        </div>
        <div id="choice3" onClick={goIntroduce_Lion}>
          멋사 12기
        </div>
      </I.Menu>
      <I.UnderBar>
        <img src={`./static/images/UnderBar.svg`} alt="underbar" />
      </I.UnderBar>
      <I.PosterName>
        <object
          data="./static/images/PosterName.svg"
          alt="poster"
          className="PosterName"
        />
      </I.PosterName>
      <I.UniversityName>
        <div id="text">동덕여자대학교 2024</div>
      </I.UniversityName>
      <I.Areteum>
        <object
          data="./static/images/ARETEUMText.svg"
          alt="poster"
          className="areteum"
        />
      </I.Areteum>
      <I.Poster>
        <object
          data="./static/images/Poster.svg"
          alt="poster"
          className="poster"
        />
      </I.Poster>
      <I.Insta>
        <div id="text2">instagram</div>
        <div id="text3" onClick={() => handlePageUrl()}>
          @ddwu.festival
        </div>
      </I.Insta>
      <I.Content>
        <div id="text4">
          이 광활한 우주 속에서
          <br />
          우리의 삶은 아주 짧은 순간일지 몰라도
          <br />
          보이지 않는 아주 작은 먼지 같을지라도
          <br />
          그럼에도 저마다의 빛을 내며 살아가는 것
        </div>
        <br /> <br />
        <div id="text5">까만 밤이 되면 우린 더 빛날 거야</div>
        <div id="text6">
          밤하늘에서 함께 춤을 추자
          <br />
          우리의 춤은 또 다른 빛이 되고 새로운 우주를 만들 거야
          <br />
          각자의 빛을 모아 함께 그리는
          <br />
          우리만의 불꽃 축제.
          <br />
          오늘 밤 나와 함께하지 않을래?
        </div>
      </I.Content>
      <I.Content2>
        <div id="text7">
          각자의 빛을 모아
          <br />
          함께 그리는 우리만의 축제
        </div>
      </I.Content2>
      <I.BackImage>
        <object
          data="./static/images/ARETEUMBackImg.svg"
          alt="poster"
          className="AreteumBack"
        />
      </I.BackImage>
      <I.PosterName2>
        <object
          data="./static/images/PosterName.svg"
          alt="poster"
          className="PosterName"
        />
      </I.PosterName2>
      <I.Background>
        <img src={`./static/images/ARETEUMBack.svg`} alt="background" />
      </I.Background>
      <I.Footer>
        <object
          data="./static/images/Footer.svg"
          alt="poster"
          className="Footer"
        />
      </I.Footer>
    </I.Container>
  );
};
// 페이지 끝
export default Introduce_ARETEUM;
