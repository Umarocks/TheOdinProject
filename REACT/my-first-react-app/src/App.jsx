import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GeneralInfo from "./Components/GeneralInfo";
import EducationInfo from "./Components/EducationInfo";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GeneralInfo />
      <EducationInfo />
    </>
  );
}

export default App;
