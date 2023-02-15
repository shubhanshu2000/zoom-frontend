import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navigation from "./components/home/Navigation";
import Join from "./components/auth/join/Join";
import Signin from "./components/auth/signin/Signin";
import Signup from "./components/auth/signUp/Signup";
import loggedInContext from "./components/contextData/context";
import { Toaster } from "react-hot-toast";
import SignUpDetail from "./components/auth/signUp/SignUpDetail";

import Peers from "./components/videoCallFeature/Peer";

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
            error: {
              duration: 2500,
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
            <Route path="/call" element={<Peers />} />
            <Route />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
