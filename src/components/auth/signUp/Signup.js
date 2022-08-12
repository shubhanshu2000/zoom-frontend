import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import signinData from "../host/signindata";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import PasswordCheck from "./PasswordCheck";

function SignUp() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmRegisterPassword, setConfirmRegisterPassword] = useState("");
  const [change, setChange] = useState(false);
  const [pwdConfirm, setPwdConfirm] = useState(false);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const twitterProvider = new TwitterAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const metaProvider = new FacebookAuthProvider();

  const handleRegister = async () => {
    try {
      const authed = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      navigate("/signupdetail");
      toast.success(`Welcome back ${authed.user.email}`);
    } catch (error) {
      toast.error("Invalid E-mail or Password");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const authed = await signInWithPopup(auth, googleProvider);

      toast.success(`Welcome back ${authed.user.displayName}`);
      console.log(authed.user.displayName);
    } catch (error) {
      toast.error("Invalid E-mail or Password");
      console.log(error);
    }
  };
  const handleTwitterLogin = async () => {
    try {
      const authed = await signInWithPopup(auth, twitterProvider);

      toast.success(`Welcome back ${authed.user.displayName}`);
      console.log(authed);
    } catch (error) {
      toast.error("Invalid E-mail or Password");
      console.log(error);
    }
  };
  const handleGithubLogin = async () => {
    try {
      const authed = await signInWithPopup(auth, githubProvider);

      toast.success(`Welcome back ${authed.user.reloadUserInfo.screenName}`);
    } catch (error) {
      toast.error("Invalid E-mail or Password");
      console.log(error);
    }
  };

  const handleMetaLogin = async () => {
    try {
      const authed = await signInWithPopup(auth, metaProvider);

      toast.success(`Welcome back ${authed.user.displayName}`);
    } catch (error) {
      toast.error("Invalid E-mail or Password");
      console.log(error);
    }
  };

  // const handleConfirmPassword = (str) => {
  //   if (str.includes(confirmRegisterPassword)) {
  //     setPwdConfirm(true);
  //   }
  // };
  // console.log(pwdConfirm);
  // useEffect(() => {
  //   handleConfirmPassword(registerPassword);
  // }, [registerPassword, confirmRegisterPassword]);

  function onClickHandleLogin(e) {
    if (e.keyCode === 13) {
      handleRegister();
    }
  }

  return (
    <>
      <div className="relative ">
        <div className="absolute top-16   ">
          <div className="flex justify-center w-[98vw] items-center h-screen">
            <div className="flex shadow-2xl h-[90vh] text-[#595959]  rounded-2xl  w-[75vw] ">
              <div
                className="rounded-l-2xl  w-1/2 bg-[length:338px] bg-[left_197px] bg-no-repeat bg-[#dae0e9] "
                style={{
                  backgroundImage: `url("https://us05st-cf.zoom.us/static/6.2.7916/image/user/arrow2.png")`,
                }}
              >
                <div className=" flex text-center flex-col justify-around items-center h-full">
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
                <div className="h-3/4  ">
                  <form className="h-5/6 mt-4" onKeyDown={onClickHandleLogin}>
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
                          value={registerEmail}
                          onChange={(e) => setRegisterEmail(e.target.value)}
                          placeholder="Email Address"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="password"
                          className="block -mt-2 text-sm text-[#747486]"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={registerPassword}
                          onClick={() => setVisible(true)}
                          onChange={(e) => {
                            setRegisterPassword(e.target.value);
                          }}
                          className="w-full  relative text-black focus:border-[#0E72ED] focus:border-1 focus:outline-none border-[1px] mt-2  border-[#ccc] rounded-xl py-[0.35rem] pl-4 text-base"
                        />

                        <PasswordCheck
                          change={change}
                          setChange={setChange}
                          visible={visible}
                          setVisible={setVisible}
                          registerPassword={registerPassword}
                          confirmRegisterPassword={confirmRegisterPassword}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="confirm password"
                          className="block -mt-2 text-sm text-[#747486]"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          name=" confirm password"
                          placeholder="Confirm Password"
                          value={confirmRegisterPassword}
                          onChange={(e) => {
                            setConfirmRegisterPassword(e.target.value);
                          }}
                          style={{
                            borderColor: pwdConfirm ? "#0E72ED" : "red",
                          }}
                          className="w-full text-black focus:border-[#0E72ED] focus:border-1 focus:outline-none border-[1px] mt-2  border-[#ccc] rounded-xl py-[0.35rem] pl-4 text-base"
                          required
                        />
                      </div>
                      <div className="-mb-8  ">
                        <p className="-mt-2 -mb-[0.2rem] text-xs">
                          By signing up, I agree to the{" "}
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
                  <div className="absolute w-full -top-[2.8rem]">
                    <div className="flex  w-2/3 items-center mx-auto">
                      <hr className=" w-1/3 h-[1px]" />
                      <p className="mx-auto text-[#747487]">Or sign with</p>
                      <hr className=" w-1/3 h-[1px]" />
                    </div>
                  </div>
                  <div className="absolute w-full mt-1">
                    <div className="flex w-2/3  mx-auto  items-center justify-around">
                      <div className="cursor-pointer h-20 hover:text-[black] flex flex-col justify-between  items-center">
                        <img
                          src={signinData[0].img}
                          onClick={handleTwitterLogin}
                          className="w-[49px] h-[49px] rounded-2xl border-[#e4e2e2] border-[1px] hover:bg-[#e4e2e2] p-[0.9rem] mx-auto text-[30px]"
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
                          className="w-[48px] h-[49px] rounded-2xl border-[#e4e2e2] border-[1px] hover:bg-[#e4e2e2] p-[0.9rem] mx-auto text-[30px]"
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
                          className="w-[49px] h-[49px] rounded-2xl border-[#e4e2e2] border-[1px] hover:bg-[#e4e2e2] p-[0.9rem] mx-auto text-[30px]"
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
                          className="w-[49px] h-[49px] rounded-2xl border-[#e4e2e2] border-[1px] hover:bg-[#e4e2e2] p-[0.9rem] mx-auto text-[30px]"
                          alt={signinData[3].name}
                        />
                        <p className="text-center text-[rgba(4,4,19,0.56)] mx-auto">
                          {signinData[3].name}
                        </p>
                      </div>
                    </div>
                    <p className="w-2/3 mx-auto my-4 text-xs">
                      Zoom is protected by reeCAPTCHA and their{" "}
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

export default SignUp;
