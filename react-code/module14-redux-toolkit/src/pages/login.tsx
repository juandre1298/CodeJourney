import { useState } from "react";
import { login, logout } from "../store";
import { useDispatch } from "react-redux";

export const Login = () => {
  const [newUSername, setNewUsername] = useState("");

  const dispatch = useDispatch();
  return (
    <h1>
      THIS IS THE LOGIN PAGE
      <input
        onChange={(e) => {
          setNewUsername(e.target.value);
        }}
      />
      <button onClick={() => dispatch(login({ username: newUsername }))}>
        {" "}
        Submit Login
      </button>
      <button> Logout</button>
    </h1>
  );
};
