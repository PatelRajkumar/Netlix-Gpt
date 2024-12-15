import { useRef, useState } from "react";
import { checkValidateData, validateName } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  User,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { FirebaseError } from "firebase/app";
import { useNavigate } from "react-router";
import Header from "../component/Header";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGIN_BG_IMAGE } from "../assets/icons";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const name = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);

  const signInHandler = async () => {
    try {
      const userCreds = await signInWithEmailAndPassword(
        auth,
        email?.current?.value ?? "",
        password?.current?.value ?? ""
      );
      navigate("/browse");
      console.log("sign in success", userCreds.user);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        setErrorMessage(error.message);
      }
    }
  };
  const signUpHandler = async () => {
    try {
      const userCreds = await createUserWithEmailAndPassword(
        auth,
        email?.current?.value ?? "",
        password?.current?.value ?? ""
      );
      await updateProfile(auth.currentUser as User, {
        displayName: name.current?.value,
      });
      const user = auth.currentUser;
      dispatch(
        addUser({
          uid: user?.uid,
          email: user?.email,
          displayName: user?.displayName,
        })
      );
      navigate("/browse");
      console.log("sign up success", userCreds?.user);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        setErrorMessage(error.message);
      }
      // console.log(error:FirebaseError);
    }
  };
  const onSubmitHandler = async () => {
    console.log("on submit handler");
    // if(email.current && password.current){
    const error = checkValidateData(
      email?.current?.value ?? "",
      password?.current?.value ?? ""
    );
    setErrorMessage(error);
    if (!isSignInForm) {
      const error = validateName(name?.current?.value ?? "");
      if (!errorMessage) {
        setErrorMessage(error);
        console.log("inside return");
        // return
      }
    }
    console.log("Error message: " + errorMessage);
    if (errorMessage) return;
    console.log("Checking for sign signup");
    isSignInForm ? signInHandler() : signUpHandler();
    console.log(email?.current?.value);
    console.log(password?.current?.value);
    // }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={LOGIN_BG_IMAGE}
          alt="bg-image"
        />
      </div>
      <div className="relative top-40">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-1/3 flex flex-col mx-auto bg-[#000000] bg-opacity-[0.7]  p-5 text-white"
          action=""
        >
          <h1 className="text-2xl m-2 p-2 ">
            {isSignInForm ? "Sign In" : "Sign Up"}{" "}
          </h1>
          {isSignInForm || (
            <input
              ref={name}
              className="m-4 p-4  bg-transparent border-2 focus:border-white focus:outline-none border-white rounded-md"
              type="text"
              placeholder="Name"
            />
          )}
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
          <p className="text-[#E50914] font-bold text-lg m-2 p-2">
            {errorMessage ? errorMessage : " "}
          </p>
          <button
            className="m-4 p-2  text-xl bg-[#E50914] rounded-md"
            type="submit"
            onClick={onSubmitHandler}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="m-4 cursor-pointer"
            onClick={() => setIsSignInForm(!isSignInForm)}
          >
            {isSignInForm
              ? "New to Netflix Sign Up"
              : "Already a Netlix User Sign In"}{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
