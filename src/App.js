import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Weather from "./pages/Weather";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="weather/:long/:lat" element={<Weather />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
