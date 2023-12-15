import React from "react";
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
function EducationDisplay(props) {
  return (
    <>
      <div className="educationLeftSide">
        <div className="school">
          <b>{props.element.school}</b>
        </div>
        <div className="degree">
          <p>{props.element.degree}</p>
        </div>
      </div>
      <div className="educationRightSide">
        <p>{props.element.startDate + " " + props.element.endDate}</p>
      </div>
    </>
  );
}

export default EducationDisplay;
