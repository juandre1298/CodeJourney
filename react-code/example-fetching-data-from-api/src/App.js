import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  /* fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    }); */
  /* there's a better way to call an api, but we need to install it first.
 so we need to type in the terminal: npm install axios */
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className="App">
      <button onClick={fetchCatFact}> Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
