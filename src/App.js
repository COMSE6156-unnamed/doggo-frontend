import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import DogPage from './Pages/DogPage';
import QuizPage from './Pages/QuizPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = { <HomePage/>} />
        <Route path = "/profile" element = { <ProfilePage/> } />
        <Route path = "/dog" element = { <DogPage/> } />
        <Route path = "/quiz" element = { <QuizPage/> } />
      </Routes>
    </Router>
  );
}

export default App;
