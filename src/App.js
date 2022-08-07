import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navigation from "./components/home/Navigation";
import Join from "./components/auth/join/Join";
import Signin from "./components/auth/host/Signin";
import Signup from "./components/auth/signUp/Signup";
import SignUpDetail from "./components/auth/signUp/SignUpDetail";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="App">
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              duration: 1000,
              theme: {
                primary: "#4aed88",
              },
            },
          }}
        />
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/join" element={<Join />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signupdetail" element={<SignUpDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
