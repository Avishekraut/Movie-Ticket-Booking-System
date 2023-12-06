import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import BookingPage from './Pages/BookingPage';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<BookingPage />} />
      </Routes>
  );
}

export default App;
