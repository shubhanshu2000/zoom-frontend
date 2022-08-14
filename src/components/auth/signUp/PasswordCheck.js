import React, { useEffect } from "react";

function PasswordCheck({ registerPassword, change, setChange, visible }) {
  const minC = document.getElementsByClassName("li-text");
  const passLength = registerPassword.length;
  const hasnum = /\d/;
  const passLenCheck = () => {
    if (passLength >= 8) {
      minC[0].style.color = "green";
    } else if (passLength > 0 && passLength < 8) {
      minC[0].style.color = "red";
    } else {
      minC[0].style.color = "#333333";
    }
  };

  function hasLetter(str) {
    if (str.toUpperCase() !== str.toLowerCase()) {
      minC[1].style.color = "green";
    } else if (passLength === 0) {
      minC[1].style.color = "#333333";
    } else {
      minC[1].style.color = "red";
    }
  }
  function hasNumber(num) {
    if (hasnum.test(num)) {
      minC[2].style.color = "green";
    } else if (passLength === 0) {
      minC[2].style.color = "#333333";
    } else {
      minC[2].style.color = "red";
    }
  }
  function hasBothCase(str) {
    if (str.toLowerCase() !== str && str.toUpperCase() !== str) {
      minC[3].style.color = "green";
    } else if (passLength === 0) {
      minC[3].style.color = "#333333";
    } else {
      minC[3].style.color = "red";
    }
  }

  function pwdMustNotContain(str) {
    if (
      str.includes("password") ||
      str.includes("Password") ||
      str.includes("PASSWORD") ||
      str.includes("11111") ||
      str.includes("12345") ||
      str.includes("abcde") ||
      str.includes("qwert")
    ) {
      minC[4].style.color = "red";
      // minC[4].style.listStyle.content = "✖";
    } else if (passLength === 0) {
      minC[4].style.color = "#333333";
    } else {
      minC[4].style.color = "green";
    }
  }

  useEffect(() => {
    if (passLength >= 1) {
      setChange(true);
    } else {
      setChange(false);
    }
  }, [passLength]);

  if (change) {
    passLenCheck();
    hasLetter(registerPassword);
    hasNumber(registerPassword);
    hasBothCase(registerPassword);
    pwdMustNotContain(registerPassword);
  }
  return (
    <>
      <div className="" style={{ visibility: visible ? "visible" : "hidden" }}>
        <div className="  relative">
          <div className="z-[9]   text-sm  mt-1 text-[#333] font-normal right-0 left-auto bg-[#fff] leading-6   rounded-xl bg- w-full shadow-[0px_5px_30px_0px_rgba(0,0,0,0.6)] p-4 absolute">
            <p>Password must:</p>
            <ul className="list-disc ml-8 my-2">
              <li className="li-text">Have at least 8 characters</li>
              <li className="li-text">Have at least 1 letter (a, b , c...)</li>
              <li className="li-text">Have at least 1 number (1, 2, 3...)</li>
              <li className="li-text">
                Include both uppercase and lowercase characters
              </li>
            </ul>
            <p>Password must NOT:</p>
            <ul className="list-disc ml-8 mt-2">
              <li className="li-text">
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
