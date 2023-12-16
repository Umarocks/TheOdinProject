import React from "react";
import EducationDisplay from "./EducationDisplay";
import GeneralInfoDisplay from "./GeneralInfoDisplay";
import ProfessionalDisplay from "./ProfessionalDisplay";

function Display(props) {
  return (
    <>
      <div className="displayContainer">
        <div className="generalInfoDisplay">
          {!props.generalEmpty && (
            <GeneralInfoDisplay generalInfoForm={props.generalInfoForm} />
          )}
        </div>
        <div className="educationalInfoDisplay">
          <div className="educationleftSide">
            {!props.educationEmpty &&
              props.educationInfoForm.map((element) => (
                <EducationDisplay key={element.id} element={element} />
              ))}
          </div>
        </div>
        <div className="professionalInfoDisplay">
          {!props.professionalEmpty &&
            props.professionalInfoForm.map((element) => (
              <ProfessionalDisplay key={element.id} element={element} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Display;
