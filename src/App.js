import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navigation from "./components/home/Navigation";
import Join from "./components/join/Join";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
