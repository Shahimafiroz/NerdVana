import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Board from "./Components/Boards/Board";
import Grid from "./Components/DataGrid/Grid";
import Err from "./Err";
import Footer from "./Components/Footer";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/manage" element={<Board />}></Route>
          <Route path="/manage/id" element={<Grid />}></Route>
          <Route path="/*" element={<Err />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
