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
      <h1>Random Page</h1>
      <div className="opcions">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
      <div className="User-Info">
        {user && (
          <>
            <p>{auth.currentUser?.displayName}</p>
            {/* we also need to install: npm install react-firebase-hooks */}
            <img
              className="profile-picture"
              src={auth.currentUser?.photoURL || ""}
              width="100"
              height="100"
            />
            <button onClick={signUserOut}>Log Out</button>
          </>
        )}
      </div>
    </div>
  );
};
