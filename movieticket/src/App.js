import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  );
}

export default App;
