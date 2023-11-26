import React, { useState } from "react";
import ProfessionalForm from "./ProfessionalForm";
function ProfessionalExperience() {
  const [professionalInfoFormShow, setProfessionalInfoFormShow] =
    useState(false);

  function handleProfessionalInfoForm() {
    setProfessionalInfoFormShow(!professionalInfoFormShow);
  }
  return (
    <>
      <div className="ProfessionalInfoConatiner">
        <div className="ProfessionalInfo">
          <div className="ProfessionalInfoIconAndHead">
            <div>
              <img
                src="https://rmathr.github.io/cv-project/b5791876cc5188ae758a.png"
                alt=""
              />
              <h3>ProfessionalExperience</h3>
            </div>
          </div>
          <div className="ProfessionalInfoDropDownIcon">
            <img
              src="https://rmathr.github.io/cv-project/9a85e2732c3a2bab601e.png"
              alt=""
              onClick={handleProfessionalInfoForm}
            />
          </div>
          <div className="ProfessionalInfoDropDown">
            {professionalInfoFormShow && <ProfessionalForm />}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfessionalExperience;
