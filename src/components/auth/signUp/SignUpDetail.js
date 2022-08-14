import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import toast from "react-hot-toast";

function SignUpDetail() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      return navigate("/");
    }
  }, [loggedIn]);

  const handleDataSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: firstName,
        middle: lastName,
        confirmEmail: confirmEmail,
        confirmPassword: confirmPassword,
      });
      toast.success("Data submitted successfully");
      console.log("Document written with ID: ", docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  function onClickHandleUserData(e) {
    if (e.keyCode === 13) {
      handleDataSubmit();
    }
  }

  return (
    <>
      <div className="relative ">
        <div className="absolute top-16  ">
          <div className="flex justify-center w-[98vw] items-center h-screen">
            <div className="flex shadow-2xl h-[90vh] text-black  rounded-2xl  w-[75vw] ">
              <div className="rounded-l-2xl  w-1/2   bg-[#f2f2f2] ">
                <div className=" flex flex-col py-10 justify-evenly items-center h-full">
                  <div className="text-center  w-11/12">
                    <h1 className="text-4xl font-semibold">Welcome to Zoom</h1>
                    <p className="text-xl mt-6 ">
                      Hello! To get started with Zoom we need a few details from
                      you to create your free account.
                    </p>
                  </div>
                  <img
                    src="https://us01st-cf.zoom.us/fe-static/signup-active/img/account_info.eabb9317.png"
                    alt="random"
                  />
                </div>
              </div>

              <div className="w-1/2 relative flex flex-col rounded-r-2xl bg-[#fff]">
                <div className="h-5/6  ">
                  <form
                    className="h-full mt-4"
                    onKeyDown={onClickHandleUserData}
                  >
                    <div className="flex w-8/12 flex-col mx-auto justify-evenly h-full">
                      <div>
                        <label
                          className="block text-sm text-[#747486]"
                          htmlFor="name"
                        >
                          First Name
                        </label>
                        <input
                          className="w-full text-black focus:border-[#0E72ED] focus:border-1 focus:outline-none border-[1px] mt-2  border-[#ccc] rounded-xl py-[0.35rem] pl-4 text-base"
                          name="name"
                          type="name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="First Name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="name"
                          className="block -mt-2 text-sm text-[#747486]"
                        >
                          Last Name
                        </label>
                        <input
                          type="name"
                          name="name"
                          placeholder="Last Name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="w-full text-black focus:border-[#0E72ED] focus:border-1 focus:outline-none border-[1px] mt-2  border-[#ccc] rounded-xl py-[0.35rem] pl-4 text-base"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block -mt-2 text-sm text-[#747486]"
                        >
                          Confirm Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Confirm Email"
                          value={confirmEmail}
                          onChange={(e) => setConfirmEmail(e.target.value)}
                          className="w-full text-black focus:border-[#0E72ED] focus:border-1 focus:outline-none border-[1px] mt-2  border-[#ccc] rounded-xl py-[0.35rem] pl-4 text-base"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="password"
                          className="block -mt-2 text-sm text-[#747486]"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          placeholder="Confirm Password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="w-full text-black focus:border-[#0E72ED] focus:border-1 focus:outline-none border-[1px] mt-2  border-[#ccc] rounded-xl py-[0.35rem] pl-4 text-base"
                          required
                        />
                      </div>
                      <div className="-mb-8  ">
                        <div className="flex items-start">
                          <input
                            className="mr-[0.5rem] mt-[0.278rem]"
                            type="checkbox"
                            name="stay signed in"
                            id="stay signed in"
                          />
                          <label
                            className="leading-5 text-sm"
                            htmlFor="stay signed in"
                          >
                            <span className="font-[500]">For Educators</span>:
                            Select this option if you are signing up on behalf
                            of a school or other organization that provides
                            educational services to children under the age of 18
                          </label>
                        </div>
                        <button
                          className="mx-auto py-2 my-[1.25rem] font-semibold rounded-xl  w-full bg-[#0E72ED] text-[#fff]"
                          type="button"
                          onClick={handleDataSubmit}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <i>
                  <p className="w-2/3 my-6 mx-auto   text-sm">
                    By signing up, I agree to the{" "}
                    <span className="text-[#0956B5] cursor-pointer hover:underline">
                      Zoom's Privacy Statement{" "}
                    </span>
                    and{" "}
                    <span className="hover:underline cursor-pointer text-[#0956B5]">
                      Terms of Service.
                    </span>{" "}
                    apply.
                  </p>
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpDetail;
