import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { HEADER_NETFLIX_LOGO } from "../assets/icons";

const Header = () => {
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
  return (
    <div className="w-[100%] absolute z-10 flex justify-between">
      <div className="p-2 m-2 w-40">
        <img
          src={HEADER_NETFLIX_LOGO}
          alt="logo"
        />
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
