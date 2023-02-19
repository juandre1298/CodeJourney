import React from "react";
import "./App.css";
import { Person, Country } from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name="juan"
        email="juan@gmail.com"
        age={21}
        isMarried={true}
        friends={["jake", "jessica", "jerry"]}
        country={Country.Canada}
      />
    </div>
  );
}

export default App;
