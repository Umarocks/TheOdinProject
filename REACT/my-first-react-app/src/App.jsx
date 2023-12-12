import { useState } from "react";
import "./App.css";
import GeneralInfo from "./Components/GeneralInfo";
import EducationInfo from "./Components/EducationInfo";
import ProfessionalExperience from "./Components/ProfessionalExperience";
import CVGenerator from "./Components/CVGenerator";
import SaveResume from "./Components/SaveResume";

function App() {
  const [generalInfoForm, setGeneralInfoForm] = useState("");
  const [educationInfoForm, setEducationInfoForm] = useState([]);
  const [professionalInfoForm, setProfessionalInfoForm] = useState([]);

  function saveInput(obj) {
    switch (obj.form) {
      case "GeneralInfo":
        setGeneralInfoForm(obj);
        console.log(generalInfoForm);
        break;
      case "EducationInfo":
        const x = [...educationInfoForm,obj];
        setEducationInfoForm(x);
        console.log(educationInfoForm)
        break;
        case "ProfessionalInfo":
        const y = [...professionalInfoForm,obj];
        setProfessionalInfoForm(y);
        console.log(professionalInfoForm)
        break;
      }
    
  }

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
            <GeneralInfo saveInput={saveInput} />
            <EducationInfo saveInput={saveInput} />
            <ProfessionalExperience saveInput={saveInput} />
          </div>
          <div className="Display"></div>
        </div>
      </div>
    </>
  );
}

export default App;
