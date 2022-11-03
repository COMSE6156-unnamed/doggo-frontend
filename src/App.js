import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import DogPage from "./Pages/DogPage";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import ProfilePage from "./Pages/ProfilePage";
import QuizPage from "./Pages/QuizPage";
import commonConstants from "./constants/commonConstants";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={commonConstants.rootRoute} element={<HomePage />} />
        <Route path={commonConstants.profileRoute} element={<ProfilePage />} />
        <Route path={commonConstants.dogRoute} element={<DogPage />} />
        <Route path={commonConstants.quizRoute} element={<QuizPage />} />
      </Routes>
    </Router>
  );
}

export default App;
