import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Publications, Publication, Home } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/publications' element={<Publications />} />
        <Route path='/publication/:id' element={<Publication />} />
      </Routes>
    </Router>
  );
}

export default App;
