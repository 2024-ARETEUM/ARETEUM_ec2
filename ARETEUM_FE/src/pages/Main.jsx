import "../styles/StyledMain.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    // 컴포넌트가 마운트되면 상단으로 스크롤
    window.scrollTo(0, 0);
  }, []);

  function GoTimeTable() {
    navigate("/timetable");
  }
  function GoBooth() {
    navigate("/boothlayout");
  }
  function GoIntro() {
    navigate("/keyword");
  }
  function GoTalk() {
    navigate("/talk");
  }
  function GoPeople() {
    navigate("/introduce_areteum");
  }

  const floatingVariants1 = {
    initial: { y: 10 },
    animate: { y: [0, 20, 0] },
  };

  const floatingVariants2 = {
    initial: { y: 20 },
    animate: { y: [0, 20, 0] },
  };

  const floatingVariants3 = {
    initial: { y: 5 },
    animate: { y: [0, 20, 0] },
  };

  const floatingVariants4 = {
    initial: { y: 0 },
    animate: { y: [0, 20, 0] },
  };

  const floatingVariants5 = {
    initial: { y: 15 },
    animate: { y: [0, 20, 0] },
  };

  const btnHoverVariants = {
    hover: { scale: 1.15, transition: { duration: 0.5 } },
  };

  return (
    <>
      <div className="container">
        <div className="main-logo">
          <object data={`./static/images/Main/Main-logo.svg`} alt="logo" />
        </div>
        <div>
          <object
            data={`./static/images/Main/Main-bg.svg`}
            alt="Main-bg"
            className="main-bg"
          />
          <motion.object
            data={`./static/images/Main/Main-star.svg`}
            alt="main-star"
            className="main-star"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="menu">
          <div className="timetable">
            <motion.div
              initial="initial"
              animate="animate"
              transition={{
                ease: "easeInOut",
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
              }}
              variants={floatingVariants1}
              onClick={() => GoTimeTable()}
              className="clickable-wrapper timetable-illur"
              style={{ position: "relative", zIndex: 10 }}
            >
              <object
                data={`./static/images/Main/TimeTable-illur.svg`}
                alt="illur"
                className="object-container"
                style={{ pointerEvents: "none" }}
              />
            </motion.div>
            <motion.div
              whileHover="hover"
              variants={btnHoverVariants}
              onClick={() => GoTimeTable()}
              className="clickable-wrapper timetable-btn"
              style={{ position: "relative", zIndex: 10 }}
            >
              <object
                data={`./static/images/Main/TimeTable-btn.svg`}
                alt="btn"
                className="object-container"
                style={{ pointerEvents: "none" }}
              />
            </motion.div>
            <motion.object
              data={`./static/images/Main/TimeTable-som.svg`}
              alt="som"
              className="timetable-som"
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, -5, 0, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </div>
          {/* Booth, Intro, Talk, People 부분도 같은 방식으로 적용 */}
          <div className="booth">
            <motion.div
              initial="initial"
              animate="animate"
              transition={{
                ease: "easeInOut",
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              variants={floatingVariants2}
              onClick={() => GoBooth()}
              className="clickable-wrapper booth-illur"
              style={{ position: "relative", zIndex: 10 }}
            >
              <object
                data={`./static/images/Main/Booth-illur.svg`}
                alt="illur"
                className="object-container"
                style={{ pointerEvents: "none" }}
              />
            </motion.div>
            <motion.div
              whileHover="hover"
              variants={btnHoverVariants}
              onClick={() => GoBooth()}
              className="clickable-wrapper booth-btn"
              style={{ position: "relative", zIndex: 10 }}
            >
              <object
                data={`./static/images/Main/Booth-btn.svg`}
                alt="btn"
                className="object-container"
                style={{ pointerEvents: "none" }}
              />
            </motion.div>
            <motion.object
              data={`./static/images/Main/Booth-som.svg`}
              alt="som"
              className="booth-som"
              initial={{ rotate: 0, x: 0 }}
              animate={{ rotate: [0, 0, 0, 0], x: [0, 20, 0, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </div>
          <div className="intro">
            <motion.div
              initial="initial"
              animate="animate"
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              variants={floatingVariants3}
              onClick={() => GoIntro()}
              className="clickable-wrapper intro-illur"
              style={{ position: "relative", zIndex: 10 }}
            >
              <object
                data={`./static/images/Main/Intro-illur.svg`}
                alt="illur"
                className="object-container"
                style={{ pointerEvents: "none" }}
              />
            </motion.div>
            <motion.div
              whileHover="hover"
              variants={btnHoverVariants}
              onClick={() => GoIntro()}
              className="clickable-wrapper intro-btn"
              style={{ position: "relative", zIndex: 10 }}
            >
              <object
                data={`./static/images/Main/Intro-btn.svg`}
                alt="btn"
                className="object-container"
                style={{ pointerEvents: "none" }}
              />
            </motion.div>
            <motion.object
              data={`./static/images/Main/Intro-som.svg`}
              alt="som"
              className="intro-som"
              initial={{ y: 0 }}
              animate={{ y: [-10, 0] }}
              transition={{
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                duration: 0.4,
                repeatDelay: 1,
              }}
            />
          </div>
          {/* Talk와 People 부분도 같은 방식으로 적용 */}
          <div className="talk">
            <motion.div
              initial="initial"
              animate="animate"
              transition={{
                ease: "easeInOut",
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              variants={floatingVariants4}
              onClick={() => GoTalk()}
              className="clickable-wrapper talk-illur"
              style={{ position: "relative", zIndex: 0 }}
            >
              <object
                data={`./static/images/Main/Talk-illur.svg`}
                alt="illur"
                className="object-container"
                style={{ pointerEvents: "none" }}
              />
            </motion.div>
            <motion.div
              whileHover="hover"
              variants={btnHoverVariants}
              onClick={() => GoTalk()}
              className="clickable-wrapper talk-btn"
              style={{ position: "relative", zIndex: 10 }}
            >
              <object
                data={`./static/images/Main/Talk-btn.svg`}
                alt="btn"
                className="object-container"
                style={{ pointerEvents: "none" }}
              />
            </motion.div>
            <motion.object
              data={`./static/images/Main/Talk-som.svg`}
              alt="som"
              className="talk-som"
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </div>
          <div className="people">
            <motion.div
              initial="initial"
              animate="animate"
              transition={{
                ease: "easeInOut",
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
              }}
              variants={floatingVariants5}
              onClick={() => GoPeople()}
              className="clickable-wrapper people-illur"
              style={{ position: "relative", zIndex: 10 }}
            >
              <object
                data={`./static/images/Main/People-illur.svg`}
                alt="illur"
                className="object-container"
                style={{ pointerEvents: "none" }}
              />
            </motion.div>
            <motion.div
              whileHover="hover"
              variants={btnHoverVariants}
              onClick={() => GoPeople()}
              className="clickable-wrapper people-btn"
              style={{ position: "relative", zIndex: 10 }}
            >
              <object
                data={`./static/images/Main/People-btn.svg`}
                alt="btn"
                className="object-container"
                style={{ pointerEvents: "none" }}
              />
            </motion.div>
            <motion.object
              initial="initial"
              animate="animate"
              transition={{
                ease: "easeInOut",
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              data={`./static/images/Main/People-som.svg`}
              alt="som"
              className="people-som"
            />
          </div>
        </div>
        <div className="footer">
          <img src={`./static/images/Footer.svg`} alt="footer" />
        </div>
      </div>
    </>
  );
}
