import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GeneralInfo from "./Components/GeneralInfo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GeneralInfo />
    </>
  );
}

export default App;
