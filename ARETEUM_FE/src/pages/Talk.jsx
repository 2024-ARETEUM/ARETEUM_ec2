import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import * as T from "../styles/StyledTalk";

const Talk = () => {
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const [messagePositions, setMessagePositions] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const talkRef = useRef(null);
  let [inputCount, setInputCount] = useState(0);

  useEffect(() => {
    // 컴포넌트가 마운트되면 상단으로 스크롤
    window.scrollTo(0, 0);
  }, []);

  const goback = () => {
    navigate(`/`);
  };

  const [loading, setLoading] = useState(true); // 로딩 상태를 관리하는 상태

  const handleSubmit = async (event) => {
    event.preventDefault(); // 페이지 새로고침 방지

    if (!comment) {
      return; // 댓글이 비어있으면 함수 종료
    }

    try {
      const csrfToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("csrftoken="))
        ?.split("=")[1];

      // POST 요청을 통해 댓글 전송
      const response = await axios.post(
        "http://3.35.236.11/api/somtalk", // 요청할 API URL
        { comment: comment }, // 요청 본문에 포함할 데이터 (댓글)
        { headers: { "X-CSRFToken": csrfToken } } // CSRF 토큰을 헤더에 포함
      );

      // 댓글이 성공적으로 전송되면 새로운 메시지를 추가
      if (response.status === 201) {
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { comment: response.data.comment }, // 서버에서 돌아온 댓글을 추가
        ]);
        setComment(""); // 입력 필드 초기화
      }
    } catch (error) {
      console.error("댓글 전송에 실패했습니다:", error);
    }
  };

  const fetchMessages = async () => {
    setLoading(true); // 로딩 시작
    try {
      const response = await axios.get("http://3.35.236.11/api/somtalk");
      if (response.status === 200) {
        setChatMessages(response.data); // 받아온 데이터로 상태 업데이트
      }
    } catch (error) {
      console.error("메시지 로드 실패:", error);
    } finally {
      setLoading(false); // 로딩 끝
    }
  };

  const getRandomOffset = () => {
    return Math.random() * (70 - 30) + 30; // 말풍선 사이드 간격 랜덤 배정 함수 (70~30 px사이로)
  };

  useEffect(() => {
    fetchMessages(); // 페이지가 로드될 때 댓글 목록을 불러옴
  }, []);

  useEffect(() => {
    const positions = chatMessages.map((_, index) => {
      const isLeft = index % 2 === 0;
      const offset = getRandomOffset();
      return {
        position: {
          top: `${index * 60}px`, // 각 말풍선 간격 설정 (위아래)
          [isLeft ? "left" : "right"]: `${offset}px`, // (사이드)
        },
        message: chatMessages[index].comment,
      };
    });
    setMessagePositions(positions); // 최종 포지션 정해짐
  }, [chatMessages]);

  useEffect(() => {
    // 메시지가 업데이트된 후 스크롤을 맨 아래로 이동
    if (talkRef.current) {
      talkRef.current.scrollTop = talkRef.current.scrollHeight;
    }
  }, [messagePositions]);

  const floatingAnimation = (index) => {
    const duration = Math.random() * 5 + 1;
    return {
      initial: { y: 0 },
      animate: {
        y: index % 2 === 0 ? [0, 5, 0] : [0, -5, 0],
        transition: {
          duration: duration,
          ease: "easeInOut",
          repeat: Infinity,
        },
      },
    };
  };

  const onInputHandler = (e) => {
    setComment(e.target.value);
    setInputCount(e.target.value.length);
  };

  return (
    <T.Container>
      <T.Header>
        <T.Back>
          <img
            id="back"
            src={`./static/images/Backbtn.svg`}
            alt="back"
            onClick={goback}
          />
        </T.Back>
        <T.Title>솜톡</T.Title>
      </T.Header>
      <T.Background>
        <object data={`./static/images/TalkBack.svg`} alt="background" />
      </T.Background>
      <T.Som>
        <object data={`./static/images/Cotton.svg`} alt="솜솜" />
      </T.Som>
      <T.Talk ref={talkRef}>
        {loading ? ( // 로딩 중일 경우 스피너 표시
          <div>로딩 중...</div> // 여기에 로딩 스피너 컴포넌트를 추가할 수 있습니다.
        ) : (
          messagePositions.map((item, index) => (
            <T.TalkContent
              variants={floatingAnimation(index)}
              initial={{ y: 0 }}
              animate="animate"
              key={index}
              style={{
                position: "absolute",
                ...item.position,
              }}
            >
              {item.message}
            </T.TalkContent>
          ))
        )}
      </T.Talk>
      <form onSubmit={handleSubmit}>
        <T.Footer>
          <object data={`./static/images/Footer.svg`} alt="footer" />
          <T.Comment>
            <input
              value={comment}
              placeholder="내용을 입력하세요."
              type="text"
              onChange={onInputHandler}
              onInvalid={(e) =>
                e.target.setCustomValidity("내용을 입력해주세요")
              }
              onInput={(e) => e.target.setCustomValidity("")}
              required
              maxLength={44} // 최대 44자까지 입력 가능
            />
            <p>
              <span>{inputCount}</span>
              <span>/44</span>
            </p>
            <button type="submit">
              <img src={`./static/images/Sendbtn.svg`} alt="보내기" />
            </button>
          </T.Comment>
        </T.Footer>
      </form>
    </T.Container>
  );
};

export default Talk;
