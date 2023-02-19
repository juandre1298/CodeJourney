import "./App.css";
import { Person } from "./components/Person";
// you gotta install the prop-type with: npm install prop-type
function App() {
  return (
    <div className="App">
      <Person
        name="juan"
        email="juan@gmail.com"
        age={21}
        isMarried={true}
        friends={["jessica", "jake", "jerry", "jasmine"]}
      />
    </div>
  );
}

export default App;
