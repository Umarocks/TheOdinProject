import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GeneralInfo from "./Components/GeneralInfo";
import EducationInfo from "./Components/EducationInfo";
import ProfessionalExperience from "./Components/ProfessionalExperience";
import CVGenerator from "./Components/CVGenerator";
import SaveResume from "./Components/SaveResume";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CVGenerator />
      <SaveResume />
      <GeneralInfo />
      <EducationInfo />
      <ProfessionalExperience />
    </>
  );
}

export default App;
