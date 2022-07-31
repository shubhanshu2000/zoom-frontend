import React, { useState } from "react";

function Join() {
  const [meetID, setMeetID] = useState("");
  function handleChange(e) {
    if (e.target.value.includes(" ")) {
      e.target.value = setMeetID(e.target.value.replace(/\s/g, ""));
    } else {
      setMeetID(e.target.value);
    }
  }
  function removeSpace(e) {
    if (e.code === "Space") {
      e.preventDefault();
    }
  }

  return (
    <>
      <div className="bg-[#fff] flex justify-center items-center h-screen">
        <div className="mt-20 ">
          <h1 className="text-center -mt-12 font-semibold text-3xl">
            Join Meeting
          </h1>
          <div className=" mx-auto text-start w-3/4 mt-20  leading-10 ">
            <label className="text-xs text-[#747486]">
              Meeting ID or Personal Link Name
              <input
                type="text"
                value={meetID}
                onChange={handleChange}
                onKeyDown={removeSpace}
                className="w-full text-black focus:outline-[#0E72ED]   border-2 mt-2  border-[#ccc] rounded-xl py-[0.35rem] pl-4 text-base"
                placeholder="Enter Meeting ID or Personal Link Name"
              />
            </label>
            <p className="text-sm my-4 ">
              By clicking "Join", you agree to our{" "}
              <span className="text-[#0956B5] cursor-pointer">
                Terms of Services
              </span>{" "}
              and{" "}
              <span className="text-[#0956B5] cursor-pointer">
                Privacy Statement
              </span>
            </p>
            <button
              disabled={meetID.length > 4 ? false : true}
              style={{
                backgroundColor: meetID.length > 4 ? "#0E72ED" : "#ccc",
                color: meetID.length > 4 ? "#fff" : "#747486",
              }}
              className="mx-auto font-semibold rounded-xl  w-full "
            >
              Join
            </button>
          </div>
          <p className="mt-20 text-center text-sm text-[#0956B5] ">
            Join a meeting from an H.323/SIP room system
          </p>
        </div>
      </div>
    </>
  );
}

export default Join;
