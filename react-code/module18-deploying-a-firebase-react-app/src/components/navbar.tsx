import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { signOut } from "firebase/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="navbar">
      <div className="namelogo">
        <img src="/loudspeakerColor.png" className="pageLogo" alt="page logo" />
        <h1>TrendScream</h1>
        <p>Express Yourself!</p>
      </div>
      <div className="opcions">
        <Link className="opButton" to="/">
          Home
        </Link>
        {!user ? (
          <Link className="opButton" to="/login">
            Login
          </Link>
        ) : (
          <Link className="opButton" to="/create-post">
            Create Post
          </Link>
        )}
      </div>

      {user && (
        <>
          <div className="User-Info">
            <p>{auth.currentUser?.displayName}</p>
            {/* we also need to install: npm install react-firebase-hooks */}
            <img
              className="profile-picture"
              src={auth.currentUser?.photoURL || ""}
              width="100"
              height="100"
            />
            <button className="opButton" onClick={signUserOut}>
              Log Out
            </button>
          </div>
        </>
      )}
    </div>
  );
};
