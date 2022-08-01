import React from "react";
import signinData from "./signindata";

function SignInOption() {
  return (
    <>
      <div className="flex w-2/3 mx-auto justify-around">
        {signinData.map((item, index) => {
          return (
            <div className="">
              <div
                key={index}
                className="bg-contain  bg-no-repeat "
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <p className=" ">{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SignInOption;
