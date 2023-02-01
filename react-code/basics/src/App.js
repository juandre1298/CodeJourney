import "./App.css";
import { User } from "./User";
import { useState } from "react";
function App() {
  const isGreen = false;
  const names = ["Juan", "pedro", "lukas", "peppa pig", "uso carruso", "etc"];
  const users = [
    { name: "Juan", age: 21 },
    { name: "Jake", age: 25 },
    { name: "Jessica", age: 45 },
  ];
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  let gasplanets = planets.filter((planet, key) => {
    return planet.isGasPlanet;
  });
  // States

  const [age, setAge] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [showText, setShowText] = useState(true);
  const [textColor, setTextColor] = useState("black");
  const [count, setCount] = useState(0);
  let increaseAge = () => {
    console.log(age);
    setAge(age + 1);
  };
  const handelInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <GetNameComponent name="juan" age={24} email="juan@gmail.com" />
      <GetNameComponent name="oscar" age={41} email="oscar@gmail.com" />
      <GetNameComponent name="CR7" age={37} email="cristiano@gmail.com" />
      {/* example with conditionals */}
      {/* basicaly you can do conditional as you did in vanilla JS */}
      {age >= 18 ? <h1> over age</h1> : <h1> under age</h1>}
      {/* here style need to be placed as object */}
      <h1 style={{ color: isGreen ? "green" : "red" }}> conditional style</h1>
      {/* another way to make conditionals in react */}
      {isGreen && <button> This is a button</button>}
      {/* array function */}
      {names.map((name, key) => {
        return <h1 key={key}>{name}</h1>;
      })}
      {/* working with objects */}

      {/* an alternative much cooler is this one that calls the component from another js file named User.js*/}
      {users.map((user, key) => {
        return <User name={user.name} age={user.age} />;
      })}
      <p>
        {" "}
        excercise: can only display the true isGasPlanet of the planets Array{" "}
      </p>
      <p>creating a new array using a filter</p>
      {gasplanets.map((planet, key) => {
        return <h1 key={key}>{planet.name}</h1>;
      })}
      <p> atempt 2 of solve the excercise </p>
      <p>using if conditional insite of map function</p>
      {planets.map((planet, key) => {
        if (planet.isGasPlanet) return <h1 key={key}>{planet.name}</h1>;
      })}
      <p> atempt 3 of solve the excercise </p>
      <p>using && conditional insite of map function</p>
      {planets.map(
        (planet, key) => planet.isGasPlanet && <h1 key={key}>{planet.name}</h1>
      )}
      <h1 style={{ color: "blue" }}>MODULE 4: STATES IN REACT USESTATE HOOK</h1>
      {age}
      <button onClick={increaseAge}>Increase Age</button>
      <h2>Example with input</h2>
      <input type="text" onChange={handelInputChange} />
      {inputValue}
      <h2>another cool example</h2>
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show/Hide
      </button>
      {showText && <h1>Hi my name is Juan</h1>}
      <h2>example with css style</h2>
      <button
        onClick={() => {
          setTextColor(textColor === "black" ? "red" : "black");
        }}
      >
        change color
      </button>
      <h1 style={{ color: textColor }}>Hi my name is Juan</h1>
      <h2 style={{ color: "green" }}>Excercise</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Set to Zero
      </button>
      {count}
      <h1 style={{ color: "blue" }}>
        MODULE 5: Crud in React To Do List Tutorial
      </h1>
    </div>
  );
}

// here component need to begin with capital letter
const GetNameComponent = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};
export default App;
