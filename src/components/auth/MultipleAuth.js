import React from "react";
import signinData from "./signin/signindata";
import toast from "react-hot-toast";
import { auth } from "./firebase/firebase";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";

function MultipleAuth() {
  const googleProvider = new GoogleAuthProvider();
  const twitterProvider = new TwitterAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const metaProvider = new FacebookAuthProvider();

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
  return (
    <>
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
    </>
  );
}

export default MultipleAuth;
