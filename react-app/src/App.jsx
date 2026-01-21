import { useState } from "react";
import "./App.css";
import Home from "./components/Home.jsx";
import Algebra from "./pagesTopic/Algebra.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      {currentPage === "home" && <Home onNavigate={setCurrentPage} />}
      {currentPage === "algebra" && <Algebra onNavigate={setCurrentPage} />}
    </>
  );
}

export default App;
