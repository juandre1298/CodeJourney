import "./App.css";
import { useCounter } from "./useCounter";

function App() {
  const { count, increase, decrease, restart } = useCounter();
  return (
    <div className="App">
      <button onClick="increase"> +1 </button>
      <button onClick="restart">restart</button>
      <button onClick="decrease">-1</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
