import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GeneralInfo from "./Components/GeneralInfo";
import EducationInfo from "./Components/EducationInfo";
import ProfessionalExperience from "./Components/ProfessionalExperience";
import CVGenerator from "./Components/CVGenerator";
import SaveResume from "./Components/SaveResume";
import resumeData from "./resumeData";

function App() {
  return (
    <>
      <div className="container">
        <div className="Cv">
          <CVGenerator />
        </div>
        <div className="InputAndDisplay">
          <div className="Input">
            <div className="SaveResume">
              <SaveResume />
            </div>
            <GeneralInfo generalData={resumeData.generalInfo} />
            <EducationInfo EducationInfoData={resumeData.educationInfo} />
            <ProfessionalExperience
              ProfessionalExperienceData={resumeData.professionalExperience}
            />
          </div>
          <div className="Display"></div>
        </div>
      </div>
    </>
  );
}

export default App;
