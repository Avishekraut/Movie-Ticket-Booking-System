import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";
import ConfirmationPage from "./Pages/ConfirmationPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/ConfirmationPage/:id" element={<ConfirmationPage />} />
    </Routes>
  );
}

export default App;
