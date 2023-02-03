import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [excuseOb, setExcuse] = useState("");
  let stop = false;
  const fetchExcuse = (event) => {
    Axios.get(
      `https://excuser-three.vercel.app/v1/excuse/${event?.target.id}`
    ).then((excuseOb) => {
      setExcuse(excuseOb?.data[0]);
    });
  };
  let hello = { target: { id: "party" } };
  useEffect(() => {
    fetchExcuse(hello);
  }, []);

  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      <button onClick={fetchExcuse} id="party">
        Party
      </button>
      <button onClick={fetchExcuse} id="family">
        Family
      </button>
      <button onClick={fetchExcuse} id="office">
        Office
      </button>
      <p>{excuseOb.category}:</p>
      <p>{excuseOb.excuse}</p>
    </div>
  );
}

export default App;
