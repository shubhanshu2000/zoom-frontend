import React from "react";

function PasswordCheck({
  registerPassword,
  confirmRegisterPassword,
  visible,
  setVisible,
}) {
  return (
    <>
      <div
        className=" "
        style={{ visibility: visible ? "visible" : "hidden" }}
        onClick={() => setVisible(false)}
      >
        <div className="  relative">
          <div className="z-[9]  text-sm  mt-1 text-[#333] font-normal right-0 left-auto bg-[#fff] leading-6   rounded-xl bg- w-full shadow-[0px_5px_30px_0px_rgba(0,0,0,0.6)] p-4 absolute">
            <p>Password must:</p>
            <ul className="list-disc ml-8 my-2">
              <li>Have at least 8 characters</li>
              <li>Have at least 1 letter (a, b , c...)</li>
              <li>Have at least 1 number (1, 2, 3...)</li>
              <li>Include both uppercase and lowercase characters</li>
            </ul>
            <p>Password must NOT:</p>
            <ul className="list-disc ml-8 mt-2">
              <li>
                Contain four consecutive characters (e.g. "11111", "12345",
                "abcde", or "qwert")
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordCheck;
