import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import PasswordCheck from "./PasswordCheck";
import MultipleAuth from "../MultipleAuth";

function SignUp() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmRegisterPassword, setConfirmRegisterPassword] = useState("");
  const [change, setChange] = useState(false);
  const [pwdConfirm, setPwdConfirm] = useState(false);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

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

  const handleConfirmPassword = () => {
    if (registerPassword !== confirmRegisterPassword) {
      setPwdConfirm(false);
    } else {
      setPwdConfirm(true);
    }
  };

  useEffect(() => {
    handleConfirmPassword();
  }, [confirmRegisterPassword]);

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
                          onFocus={() => setVisible(true)}
                          onBlur={() => setVisible(false)}
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
                        {pwdConfirm ? (
                          <label
                            htmlFor="confirm password"
                            className="block -mt-2 text-sm text-[#747486]"
                          >
                            Confirm Password
                            <input
                              type="password"
                              name=" confirm password"
                              placeholder="Confirm Password"
                              value={confirmRegisterPassword}
                              onChange={(e) => {
                                setConfirmRegisterPassword(e.target.value);
                              }}
                              className="w-full text-black focus:border-[#0E72ED] focus:border-1 focus:outline-none border-[1px] mt-2  border-[#ccc] rounded-xl py-[0.35rem] pl-4 text-base"
                              required
                            />
                          </label>
                        ) : (
                          <label
                            htmlFor="confirm password"
                            className="block -mt-2 text-sm text-[#747486]"
                          >
                            Confirm Password
                            <input
                              type="password"
                              name=" confirm password"
                              placeholder="Confirm Password"
                              value={confirmRegisterPassword}
                              onChange={(e) => {
                                setConfirmRegisterPassword(e.target.value);
                              }}
                              className="w-full   text-black focus:border-red-600 focus:border-1 focus:outline-none border-[1px] mt-2  border-[#ccc] rounded-xl py-[0.35rem] pl-4 text-base"
                              required
                            />
                            <span className="text-red-600">
                              Confirm password doesn't match
                            </span>
                          </label>
                        )}
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
                          disabled={!pwdConfirm}
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
                    <MultipleAuth />
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
