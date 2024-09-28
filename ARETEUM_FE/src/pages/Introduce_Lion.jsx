import { React, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as I from "../styles/StyledIntroduce_Lion";
import { Link } from "react-router-dom";

const Introduce_Lion = () => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(`/`);
  };

  useEffect(() => {
    // 컴포넌트가 마운트되면 상단으로 스크롤
    window.scrollTo(0, 0);
  }, []);

  const goIntroduce_Management = () => {
    navigate(`/Introduce_Management`);
  };

  const goIntroduce_ARETEUM = () => {
    navigate(`/Introduce_ARETEUM`);
  };

  const handlePageUrl = () => {
    window.open(
      "https://www.instagram.com/dongduk_likelion?igsh=MWdyMHgzcmJxbHgweA==",
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
        <div id="choice2" onClick={goIntroduce_Management}>
          축운위
        </div>
        <div id="choice3">멋사 12기</div>
      </I.Menu>
      <I.UnderBar>
        <img src={`./static/images/LionUnderbar.svg`} alt="underbar" />
      </I.UnderBar>
      <I.LionName>
        <div id="name">동덕여자대학교 멋쟁이사자처럼 12기</div>
      </I.LionName>
      <I.UniversityName>
        <div id="text">동덕여자대학교 2024</div>
      </I.UniversityName>
      <I.Areteum>
        <object
          data="./static/images/ARETEUMText.svg"
          alt="areteum"
          className="Areteum"
        />
      </I.Areteum>
      <I.Logo>
        <object
          data="./static/images/LikeLion.svg"
          alt="LikeLion"
          className="likeLion"
        />
        <object
          data="./static/images/LionLogo.svg"
          alt="LionLogo"
          className="lionLogo"
        />
      </I.Logo>
      <I.LionPicture>
        <object
          data="./static/images/LionPicture.svg"
          alt="Lion"
          className="lion"
        />
      </I.LionPicture>
      <I.Insta>
        <div id="text2">instagram</div>
        <div id="text3" onClick={() => handlePageUrl()}>
          @dongduk_likelion
        </div>
      </I.Insta>
      <I.Content>
        <div id="wrap">
          <div id="text4">연합동아리 </div>
          <div id="text5">멋쟁이사자처럼</div>
          <div id="text6">은 현재 국내에서</div>
        </div>

        <div id="text7">가장 많은 학생들이 활동하고 있는</div>
        <div id="text8">프로그래밍 교육 동아리입니다.</div>
        <br />
        <div id="text9">전국의 대학이 함께하는 연합 코딩동아리로</div>
        <div id="wrap">
          <div id="text10">각종</div>
          <div id="text11">
            스터디를 통해 여러 아이디어의 실현에 도전합니다.
          </div>
          <br />
        </div>
        <div id="wrap">
          <div id="text12">"내 아이디어를 내 손으로 실현한다"</div>
          <div id="text13">라는 가치 아래</div>
        </div>

        <div id="text14">창업과 서비스 개발 등 아이디어를</div>
        <div id="text15">내 손으로 실현할 수 있는</div>
        <div id="text16">다양한 교육과 기회를 제공합니다.</div>
      </I.Content>
      <I.Somsom>
        <object
          data="./static/images/Somsom.svg"
          alt="somsom"
          className="somsom"
        />
      </I.Somsom>
      <I.PD>
        <div id="pd">PLAN & DESIGN</div>
      </I.PD>
      <I.PDBack>
        <object
          data="./static/images/PDBack.svg"
          alt="back"
          className="PDBack"
        />
      </I.PDBack>
      <I.PD1>
        <div id="pd1">
          방혜진
          <div id="major1">디지털공예</div>
        </div>
      </I.PD1>
      <I.PDBack2>
        <object
          data="./static/images/PDBack.svg"
          alt="back"
          className="PDBack2"
        />
        <object
          data="./static/images/PDBack.svg"
          alt="back"
          className="PDBack3"
        />
        <object
          data="./static/images/PDBack.svg"
          alt="back"
          className="PDBack4"
        />
        <object
          data="./static/images/PDBack.svg"
          alt="back"
          className="PDBack5"
        />
      </I.PDBack2>
      <I.BabyPD>
        <div id="pd2">
          윤수진
          <div id="major2">미디어디자인</div>
        </div>
        <div id="pd3">
          전지영
          <div id="major3">데이터사이언스</div>
        </div>
        <div id="pd4">
          정예원
          <div id="major4">경영</div>
        </div>
        <div id="pd5">
          조정인
          <div id="major5">데이터사이언스</div>
        </div>
      </I.BabyPD>
      <I.Somsom2>
        <object
          data="./static/images/Somsom.svg"
          alt="somsom"
          className="somsom2"
        />
      </I.Somsom2>
      <I.Front>
        <div id="front">FRONT-END</div>
      </I.Front>
      <I.FrontBack>
        <object
          data="./static/images/FrontBack.svg"
          alt="back"
          className="FrontBack1"
        />
        <object
          data="./static/images/FrontBack.svg"
          alt="back"
          className="FrontBack2"
        />
        <object
          data="./static/images/FrontBack.svg"
          alt="back"
          className="FrontBack3"
        />
      </I.FrontBack>
      <I.FrontT>
        <div id="frontT">
          박소정
          <div id="major1">컴퓨터</div>
        </div>
        <div id="frontT2">
          박주희
          <div id="major2">컴퓨터</div>
        </div>
        <div id="frontT3">
          오승연
          <div id="major3">컴퓨터</div>
        </div>
      </I.FrontT>
      <I.FrontBack2>
        <object
          data="./static/images/FrontBack.svg"
          alt="back"
          className="FrontBack1"
        />
        <object
          data="./static/images/FrontBack.svg"
          alt="back"
          className="FrontBack2"
        />
        <object
          data="./static/images/FrontBack.svg"
          alt="back"
          className="FrontBack3"
        />
        <object
          data="./static/images/FrontBack.svg"
          alt="back"
          className="FrontBack4"
        />
      </I.FrontBack2>
      <I.BabyFront>
        <div id="babyfront1">
          김하희
          <div id="major4">데이터사이언스</div>
        </div>
        <div id="babyfront2">
          남지연
          <div id="major5">컴퓨터</div>
        </div>
        <div id="babyfront3">
          선지오
          <div id="major6">컴퓨터</div>
        </div>
        <div id="babyfront4">
          임수연
          <div id="major7">HCI사이언스</div>
        </div>
      </I.BabyFront>
      <I.FrontBack3>
        <object
          data="./static/images/FrontBack.svg"
          alt="back"
          className="FrontBack1"
        />
        <object
          data="./static/images/FrontBack.svg"
          alt="back"
          className="FrontBack2"
        />
        <object
          data="./static/images/FrontBack.svg"
          alt="back"
          className="FrontBack3"
        />
        <object
          data="./static/images/FrontBack.svg"
          alt="back"
          className="FrontBack4"
        />
      </I.FrontBack3>
      <I.BabyFront2>
        <div id="babyfront5">
          유다현
          <div id="major5">커뮤니케이션콘텐츠</div>
        </div>
        <div id="babyfront6">
          윤수인
          <div id="major6">독일어</div>
        </div>
        <div id="babyfront7">
          조민영
          <div id="major7">문화예술경영</div>
        </div>
        <div id="babyfront8">
          하성언
          <div id="major8">HCI사이언스</div>
        </div>
      </I.BabyFront2>
      <I.Somsom3>
        <object
          data="./static/images/Somsom.svg"
          alt="somsom"
          className="somsom2"
        />
      </I.Somsom3>
      <I.BackEnd>
        <div id="back">BACK-END</div>
      </I.BackEnd>
      <I.BackBack>
        <object
          data="./static/images/BackBack.svg"
          alt="back"
          className="BackBack1"
        />
        <object
          data="./static/images/BackBack.svg"
          alt="back"
          className="BackBack2"
        />
      </I.BackBack>
      <I.BackT>
        <div id="BackT">
          노소은
          <div id="major1">컴퓨터</div>
        </div>
        <div id="BackT2">
          이채연
          <div id="major2">컴퓨터</div>
        </div>
      </I.BackT>
      <I.BackBack2>
        <object
          data="./static/images/BackBack.svg"
          alt="back"
          className="BackBack1"
        />
        <object
          data="./static/images/BackBack.svg"
          alt="back"
          className="BackBack2"
        />
        <object
          data="./static/images/BackBack.svg"
          alt="back"
          className="BackBack3"
        />
      </I.BackBack2>
      <I.BackT2>
        <div id="BackT3">
          장우림
          <div id="major3">컴퓨터</div>
        </div>
        <div id="BackT4">
          주현정
          <div id="major4">컴퓨터</div>
        </div>
        <div id="BackT5">
          홍성주
          <div id="major5">컴퓨터</div>
        </div>
      </I.BackT2>
      <I.BackBack3>
        <object
          data="./static/images/BackBack.svg"
          alt="back"
          className="BackBack1"
        />
        <object
          data="./static/images/BackBack.svg"
          alt="back"
          className="BackBack2"
        />
        <object
          data="./static/images/BackBack.svg"
          alt="back"
          className="BackBack3"
        />
        <object
          data="./static/images/BackBack.svg"
          alt="back"
          className="BackBack4"
        />
      </I.BackBack3>
      <I.BabyBack1>
        <div id="babyback1">
          김가현
          <div id="major6">정보통계</div>
        </div>
        <div id="babyback2">
          김민주
          <div id="major7">컴퓨터</div>
        </div>
        <div id="babyback3">
          송예림
          <div id="major8">컴퓨터</div>
        </div>
        <div id="babyback4">
          이가연
          <div id="major9">컴퓨터</div>
        </div>
      </I.BabyBack1>
      <I.BackBack4>
        <object
          data="./static/images/BackBack.svg"
          alt="back"
          className="BackBack1"
        />
        <object
          data="./static/images/BackBack.svg"
          alt="back"
          className="BackBack2"
        />
        <object
          data="./static/images/BackBack.svg"
          alt="back"
          className="BackBack3"
        />
        <object
          data="./static/images/BackBack.svg"
          alt="back"
          className="BackBack4"
        />
      </I.BackBack4>
      <I.BabyBack2>
        <div id="babyback5">
          장하연
          <div id="major10">컴퓨터</div>
        </div>
        <div id="babyback6">
          정세윤
          <div id="major11">컴퓨터</div>
        </div>
        <div id="babyback7">
          최유연
          <div id="major12">컴퓨터</div>
        </div>
        <div id="babyback8">
          허민영
          <div id="major13">컴퓨터</div>
        </div>
      </I.BabyBack2>
      <I.PosterName>
        <object
          data="./static/images/PosterName.svg"
          alt="poster"
          className="PosterName"
        />
      </I.PosterName>
      <I.Background>
        <img src={`./static/images/LionBack.svg`} alt="background" />
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

export default Introduce_Lion;
