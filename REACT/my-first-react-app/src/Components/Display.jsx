import React from "react";
import EducationDisplay from "./EducationDisplay";
// const generalInfoObj = {
//   id: generalInfoObjid,
//   name: nameRef.current.value,
//   email: emailRef.current.value,
//   phone: phoneRef.current.value,
//   city: cityRef.current.value,
//   form: "GeneralInfo",
// };
// const educationFormObj = {
//   id: id,
//   degree: degreeRef.current.value,
//   school: schoolRef.current.value,
//   city: cityRef.current.value,
//   country: countryRef.current.value,
//   startDate: startDateRef.current.value,
//   endDate: endDateRef.current.value,
//   form: "EducationInfo",
// };
function Display(props) {
  return (
    <>
      <div className="displayContainer">
        <div className="generalInfoDisplay">
          <div
            className="generalName"
            style={{ borderBottom: "2px black solid" }}
          >
            <h1>{props.generalInfoForm.name}</h1>
          </div>
          <div className="generalemailetc">
            <p>
              {props.generalInfoForm.email +
                " " +
                props.generalInfoForm.phone +
                " " +
                props.generalInfoForm.city}
            </p>
          </div>
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
