import { useReducer } from "react";
import "./styles.css";

export default function App() {
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };

      case "DECREMENT":
        return { count: state.count - 1 };

      default:
        return state.count;
    }
  };

  const [state, dispatch] = useReducer(reducerFunction, { count: 50 });
  return (
    <div className="App">
      <h1>{state.count}</h1>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}
