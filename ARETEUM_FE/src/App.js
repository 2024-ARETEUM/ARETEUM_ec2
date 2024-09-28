import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import GlobalStyle from "./pages/GlobalStyles";
import Talk from "./pages/Talk";
import Introduce_ARETEUM from "./pages/Introduce_ARETEUM";
import Introduce_Management from "./pages/Introduce_Management";
import Introduce_Lion from "./pages/Introduce_Lion";
import TimeTable from "./pages/TimeTable";
import BoothLayout from "./pages/BoothLayout";
import Main from "./pages/Main";
import GeneralBooth from "./pages/GeneralBooth";
import FoodBooth from "./pages/FoodBooth";
import Keyword from "./pages/Keyword";
import Search from "./pages/Search";

function AnimatedRoutes() {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const pageTransition = {
    duration: 0.3,
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/talk"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Talk />
            </motion.div>
          }
        />
        <Route
          path="/introduce_areteum"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Introduce_ARETEUM />
            </motion.div>
          }
        />
        <Route
          path="/introduce_management"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Introduce_Management />
            </motion.div>
          }
        />
        <Route
          path="/keyword"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Keyword />
            </motion.div>
          }
        />
        <Route
          path="/search"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Search />
            </motion.div>
          }
        />
        <Route
          path="/introduce_lion"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Introduce_Lion />
            </motion.div>
          }
        />
        <Route
          path="/timetable"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <TimeTable />
            </motion.div>
          }
        />
        <Route
          path="/boothlayout"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <BoothLayout />
            </motion.div>
          }
        />
        <Route
          path="/generalbooth/:id"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <GeneralBooth />
            </motion.div>
          }
        />
        <Route
          path="/foodbooth/:id"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <FoodBooth />
            </motion.div>
          }
        />
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Main />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
