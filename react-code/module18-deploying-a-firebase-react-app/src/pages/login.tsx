import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };

  return (
    <section className="loginPage">
      <div className="imgSection">
        <img
          className="worldImg"
          src="/flat-globe-travel-background/worldImg.png"
        />
      </div>
      <div className="loginText">
        <h1>Login Page</h1>
        <p>Sign In With Google To Continue</p>

        <button className="loginMethod" onClick={signInWithGoogle}>
          <FcGoogle className="googlelogo" /> <p>Sign In with google</p>
        </button>
      </div>
    </section>
  );
};
