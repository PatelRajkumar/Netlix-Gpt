import React, { useState } from "react";

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true)
  return (
    <div>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_small.jpg"
          alt="bg-image"
        />
      </div>
      <div className="relative top-40">
        <form
          className="w-1/3 flex flex-col mx-auto bg-[#000000] bg-opacity-[0.7]  p-5 text-white"
          action=""
        >
          <h1 className="text-2xl m-2 p-2 ">{isSignInForm ? "Sign In" : "Sign Up"} </h1>
          {
            isSignInForm ||
            <input
            className="m-4 p-4  bg-transparent border-2 focus:border-white focus:outline-none border-white rounded-md"
            type="text"
            placeholder="Name"
          />
          }
          <input
            className="m-4 p-4  bg-transparent border-2 focus:border-white focus:outline-none border-white rounded-md"
            type="text"
            placeholder="Email"
          />
          <input
            className="m-4 p-4  bg-transparent border-2 focus:border-white focus:outline-none border-white rounded-md"
            type="password"
            placeholder="Enter Password"
          />
          <button
            className="m-4 p-2  text-xl bg-[#E50914] rounded-md"
            type="submit"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="m-4 cursor-pointer" onClick={() => setIsSignInForm(!isSignInForm)}>{isSignInForm ? "New to Netflix Sign Up" : "Already a Netlix User Sign In"} </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
