import React from "react";
import EducationDisplay from "./EducationDisplay";
import GeneralInfoDisplay from "./GeneralInfoDisplay";
// const generalInfoObj = {
//   id: generalInfoObjid,
//   name: nameRef.current.value,
//   email: emailRef.current.value,
//   phone: phoneRef.current.value,
//   city: cityRef.current.value,
//   form: "GeneralInfo",
// };

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
            {props.educationInfoForm.map((element) => (
              <EducationDisplay key={element.id} element={element} />
            ))}
          </div>
        </div>
        <div className="professionalInfoDisplay"></div>
      </div>
    </>
  );
}

export default Display;
