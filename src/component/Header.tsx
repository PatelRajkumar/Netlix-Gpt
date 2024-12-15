import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { HEADER_NETFLIX_LOGO } from "../assets/icons";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store: any) => store.user);
  const SignOutClick = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch {
      console.log("Sign out failed");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="w-[100%] absolute z-10 flex justify-between">
      <div className="p-2 m-2 w-40">
        <img src={HEADER_NETFLIX_LOGO} alt="logo" />
      </div>
      {user && (
        <div className="m-2 p-2 text-lg">
          <span>{user.displayName ?? "Guest User"}</span>
          <button onClick={SignOutClick}> Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
