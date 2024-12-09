import { useRef, useState } from "react";
import { checkValidateData, validateName } from "../utils/validate";

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true) 

  const [errorMessage,setErrorMessage] = useState<string | null>(null)

  const name = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);

  const onSubmitHandler = () => {
    // if(email.current && password.current){
      const error = checkValidateData(email?.current?.value ?? "" ,password?.current?.value ?? "");
      setErrorMessage(error);
      if(!isSignInForm){
        const error = validateName(name?.current?.value ?? "")
        errorMessage ||  setErrorMessage(error)
      }
      console.log(email?.current?.value)
      console.log(password?.current?.value)
    // }
  }
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
          onSubmit={(e) => e.preventDefault()}
          className="w-1/3 flex flex-col mx-auto bg-[#000000] bg-opacity-[0.7]  p-5 text-white"
          action=""
        >
          <h1 className="text-2xl m-2 p-2 ">{isSignInForm ? "Sign In" : "Sign Up"} </h1>
          {
            isSignInForm ||
            <input
            ref={name}
            className="m-4 p-4  bg-transparent border-2 focus:border-white focus:outline-none border-white rounded-md"
            type="text"
            placeholder="Name"
          />
          }
          <input
            ref={email}
            className="m-4 p-4  bg-transparent border-2 focus:border-white focus:outline-none border-white rounded-md"
            type="text"
            placeholder="Email"
          />
          <input
            ref={password}
            className="m-4 p-4  bg-transparent border-2 focus:border-white focus:outline-none border-white rounded-md"
            type="password"
            placeholder="Enter Password"
          />
          <p className="text-[#E50914] font-bold text-lg m-2 p-2">{errorMessage?  errorMessage : " "}</p>
          <button
            className="m-4 p-2  text-xl bg-[#E50914] rounded-md"
            type="submit"
            onClick={onSubmitHandler}
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
