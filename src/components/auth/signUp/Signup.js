import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signinData from "../host/signindata";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

function Signup() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const twitterProvider = new TwitterAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const metaProvider = new FacebookAuthProvider();

  const handleRegister = async () => {
    try {
      const authed = await createUserWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      setLoggedIn(true);
      console.log(authed);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (loggedIn) {
      return navigate("/");
    }
  }, [loggedIn]);
  const handleGoogleLogin = async () => {
    try {
      const authed = await signInWithPopup(auth, googleProvider);
      setLoggedIn(true);
      console.log(authed.user.displayName);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTwitterLogin = async () => {
    try {
      const authed = await signInWithPopup(auth, twitterProvider);
      // console.log(authed.user.displayName);
      setLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleGithubLogin = async () => {
    try {
      const authed = await signInWithPopup(auth, githubProvider);
      setLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleMetaLogin = async () => {
    try {
      const authed = await signInWithPopup(auth, metaProvider);
      setLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  function onClickHandleLogin(e) {
    if (e.keyCode === 13) {
      handleRegister();
    }
  }

  return (
    <>
      <div className="relative ">
        <div className="absolute top-16">
          <div className="flex justify-center w-[98vw] items-center h-screen">
            <div className="flex shadow-2xl h-[90vh] text-[#595959]  rounded-2xl  w-[75vw] ">
              <div
                className="rounded-l-2xl  bg-[length:338px] w-1/2 bg-[left]  bg-no-repeat bg-[#dae0e9] "
                style={{
                  backgroundImage: `url("https://st1.zoom.us/static/6.2.7712/image/user/arrow2.png")`,
                }}
              >
                <div className=" flex flex-col justify-around items-center h-full">
                  <div>
                    <h1 className="text-4xl font-semibold">SIGN UP FREE</h1>
                    <p className="text-xl mt-6 ">Meetings and Chat for free</p>
                  </div>
                  <div>
                    <p>
                      Already have an account?{" "}
                      <span className="font-medium  hover:underline">
                        <Link to="/signin">Sign In</Link>
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-1/2 flex flex-col rounded-r-2xl bg-[#fff]">
                <div className="h-1/2  ">
                  <form className="h-3/4 mt-8" onKeyDown={onClickHandleLogin}>
                    <div className="flex w-8/12 flex-col mx-auto justify-evenly h-full">
                      <div>
                        <label
                          className="block text-sm text-[#747486]"
                          htmlFor="email"
                        >
                          Email Address
                        </label>
                        <input
                          className="w-full text-black focus:border-[#0E72ED] focus:border-1 focus:outline-none border-[1px] mt-2  border-[#ccc] rounded-xl py-[0.35rem] pl-4 text-base"
                          name="email"
                          type="email"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="mt-4">
                        <p className=" -mb-[0.2rem] text-xs">
                          By signing in, I agree to the{" "}
                          <span className="text-[#0956B5] hover:underline cursor-pointer">
                            Zoom's Privacy Statement{" "}
                          </span>
                          and{" "}
                          <span className="text-[#0956B5] hover:underline cursor-pointer">
                            Terms of Service
                          </span>
                          .
                        </p>
                        <button
                          className="mx-auto py-2 my-4 font-semibold rounded-xl  w-full bg-[#0E72ED] text-[#fff]"
                          type="button"
                          onClick={handleRegister}
                        >
                          Sign In
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="relative">
                  <div className="absolute w-full -top-10">
                    <div className="flex  w-2/3 items-center mx-auto">
                      <hr className=" w-1/3 h-[1px]" />
                      <p className="mx-auto text-[#747487]">Or sign with</p>
                      <hr className=" w-1/3 h-[1px]" />
                    </div>
                  </div>
                  <div className="absolute w-full mt-8">
                    <div className="flex w-2/3  mx-auto  items-center justify-around">
                      <div className="cursor-pointer h-20 hover:text-[black] flex flex-col justify-between  items-center">
                        <img
                          src={signinData[0].img}
                          onClick={handleTwitterLogin}
                          className="w-[50px] rounded-2xl border-[#e4e2e2] border-[1px] hover:bg-[#e4e2e2] p-[0.9rem] mx-auto text-[30px]"
                          alt={signinData[0].name}
                        />
                        <p className="text-center text-[rgba(4,4,19,0.56)] mx-auto">
                          {signinData[0].name}
                        </p>
                      </div>
                      <div className="cursor-pointer h-20 hover:text-[black] flex flex-col justify-between  items-center">
                        <img
                          src={signinData[1].img}
                          onClick={handleGithubLogin}
                          className="w-[48px] rounded-2xl border-[#e4e2e2] border-[1px] hover:bg-[#e4e2e2] p-[0.9rem] mx-auto text-[30px]"
                          alt={signinData[1].name}
                        />
                        <p className="text-center text-[rgba(4,4,19,0.56)] mx-auto">
                          {signinData[1].name}
                        </p>
                      </div>
                      <div className="cursor-pointer h-20 hover:text-[black] flex flex-col justify-between  items-center">
                        <img
                          src={signinData[2].img}
                          onClick={handleGoogleLogin}
                          className="w-[50px] rounded-2xl border-[#e4e2e2] border-[1px] hover:bg-[#e4e2e2] p-[0.9rem] mx-auto text-[30px]"
                          alt={signinData[2].name}
                        />
                        <p className="text-center text-[rgba(4,4,19,0.56)] mx-auto">
                          {signinData[2].name}
                        </p>
                      </div>
                      <div className="cursor-pointer h-20 hover:text-[black] flex flex-col justify-between  items-center">
                        <img
                          src={signinData[3].img}
                          onClick={handleMetaLogin}
                          className="w-[50px] rounded-2xl border-[#e4e2e2] border-[1px] hover:bg-[#e4e2e2] p-[0.9rem] mx-auto text-[30px]"
                          alt={signinData[3].name}
                        />
                        <p className="text-center text-[rgba(4,4,19,0.56)] mx-auto">
                          {signinData[3].name}
                        </p>
                      </div>
                    </div>
                    <p className="w-2/3 mx-auto my-6 text-xs">
                      Zoom is protected by reCAPTCHA and their{" "}
                      <span className="text-[#0956B5] cursor-pointer hover:underline">
                        Privacy Policy{" "}
                      </span>
                      and{" "}
                      <span className="hover:underline cursor-pointer text-[#0956B5]">
                        Terms of Service
                      </span>{" "}
                      apply.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
