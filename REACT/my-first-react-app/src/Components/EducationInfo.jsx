import React, { useState } from "react";
import EducationForm from "./EducationForm";
export default function EducationInfo() {
  const [educationInfoFormShow, setEducationInfoForm] = useState(false);

  const handleEducationInfoForm = () => {
    setEducationInfoForm(!educationInfoFormShow);
  };

  return (
    <>
      <div className="EducationInfoContainer">
        <div className="EducationInfo">
          <div className="EducationInfoIconAndHead">
            <img src="" alt="" />
            <h3>Education Information</h3>
          </div>
          <div className="EducationInfoDropDownIcon">
            <img
              src="https://rmathr.github.io/cv-project/9a85e2732c3a2bab601e.png"
              alt=""
              onClick={handleEducationInfoForm}
            />
          </div>
          <div className="EducationInfoDropDown">
            {educationInfoFormShow && <EducationForm />}
          </div>
        </div>
      </div>
    </>
  );
}
