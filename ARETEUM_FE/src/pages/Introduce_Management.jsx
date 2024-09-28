import { React } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as I from "../styles/StyledIntroduce_Management";
import { useEffect } from "react";

const Introduce_Management = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 컴포넌트가 마운트되면 상단으로 스크롤
    window.scrollTo(0, 0);
  }, []);

  const goback = () => {
    navigate(`/`);
  };

  const goIntroduce_ARETEUM = () => {
    navigate(`/Introduce_ARETEUM`);
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
        <div id="choice1" onClick={goIntroduce_ARETEUM}>
          ARETEUM
        </div>
        <div id="choice2">축운위</div>
        <div id="choice3" onClick={goIntroduce_Lion}>
          멋사 12기
        </div>
      </I.Menu>
      <I.UnderBar>
        <img src={`./static/images/ManagementUnderbar.svg`} alt="areteum" />
      </I.UnderBar>
      <I.ManagementName>
        <div id="name">동덕여자대학교 축제운영위원회</div>
      </I.ManagementName>
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
      <I.Logo>
        <div className="clickable-wrapper">
          <object
            data="./static/images/FestivalLogo.svg"
            alt="logo"
            className="object-container"
            style={{ pointerEvents: "none" }}
          />
        </div>{" "}
      </I.Logo>
      <I.Insta>
        <div id="text2">instagram</div>
        <div id="text3" onClick={() => handlePageUrl()}>
          @ddwu.festival
        </div>
      </I.Insta>
      <I.Content>
        <div id="wrap">
          <div id="text4">축제운영위원회</div>
          <div id="text5">는 전 재학생의 복지 증진과</div>
        </div>

        <div id="text6">단합을 위해 설립된 정식 기구로,</div>
        <div id="wrap">
          <div id="text7">대동제를 비롯한</div>
          <div id="text8">문화사업 운영 업무를 총괄</div>
          <div id="text9">하고 있습니다.</div>
        </div>

        <br />
        <div id="wrap">
          <div id="text10">2024년의 경우, 4월</div>
          <div id="text11">오솜도솜데이</div>
          <div id="text12">로</div>
        </div>
        <div id="text13">
          {" "}
          &lt;찰칵찰칵 새학기 대작전! 친해지길 바라~&gt; 를
        </div>
        <div id="text14">
          진행하였고, 6월에는 &lt;안녕 꼬마아가씨, 생각이 많을 땐{" "}
        </div>
        <div id="text15">레모네이드지!&gt; 를 진행하였습니다. </div>
        <br />
        <div id="wrap">
          <div id="text16">
            위원장단, 기획국, 무대국, 사무국, 행사국, 제작홍보국
          </div>
          <div id="text17">으로</div>
        </div>

        <div id="text18">이루어진 축제운영위원회는 5개의 국서가 </div>
        <div id="text19">상호 보완, 협력을 바탕으로 활동하고 있습니다. </div>
        <div id="text20">
          {" "}
          34명의 국원으로 구성되어 있으며 현재 16명의 구성원이 4
        </div>
        <div id="text21">기 국원으로 활동하고 있습니다.</div>
      </I.Content>
      <I.PosterName>
        <object
          data="./static/images/PosterName.svg"
          alt="poster"
          className="PosterName"
        />
      </I.PosterName>
      <I.Background>
        <img src={`./static/images/ManagementBack.svg`} alt="background" />
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

export default Introduce_Management;
