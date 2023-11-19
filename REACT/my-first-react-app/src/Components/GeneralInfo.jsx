import React from "react";
import GeneralInfoForm from "./GeneralInfoForm";
import { useState } from "react";
export default function GeneralInfo(props) {
  const[generalInfoFormShow , setGeneralInfoForm] = useState(false);

  const handleGeneralInfoForm= () => {
    setGeneralInfoForm(!generalInfoFormShow);
  }
  return (


    <div className="generalInfoContainer">
      <div className="generalInfo">
        <img src="" alt="" />
        <h3>General Information</h3>
        <img src="https://rmathr.github.io/cv-project/9a85e2732c3a2bab601e.png" alt="" onClick={handleGeneralInfoForm} />
      </div>
      <div className="GeneralInfoDropDown">
        {generalInfoFormShow && <GeneralInfoForm/>}
      </div>
    </div>
  );
}
