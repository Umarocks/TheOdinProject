import { useState } from "react";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import PersonalDetails from "./components/personalInfo/PersonalDetails.jsx";
import uniqid from "uniqid";
import exampleData from "./exampleData.js";

function App() {
  
    const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
    // const [sections, setSections] = useState(exampleData.sections);
    // console.log(exampleData.personalInfo)
    // const [sectionOpen, setSectionOpen] = useState(null);
    // const [currentPage, setCurrentPage] = useState("content");
    // const [resumeLayout, setResumeLayout] = useState("top");
    // // Store prevState to revert changes when user clicks "cancel"
    // const [prevState, setPrevState] = useState(null);
    function handlePersonalInfoChange(e) {
      const { key } = e.target.dataset;
      console.log(e.target.dataset)
      console.log(e.target.value)
      setPersonalInfo({ ...personalInfo, [key]: e.target.value });
    }

    return (
      <>
        <PersonalDetails
          onChange={handlePersonalInfoChange}
          fullName={personalInfo.fullName}
          email={personalInfo.email}
          phoneNumber={personalInfo.phoneNumber}
          address={personalInfo.address}
        />
      </>
    );
  
}

export default App;
