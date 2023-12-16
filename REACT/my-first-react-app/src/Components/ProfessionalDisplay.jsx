import React from "react";

// {
//       id: 3,
//       jobTitle: "Software Engineer",
//       company: "Tech Solutions Inc.",
//       city: "Cityville",
//       startDate: "2020-06-01",
//       endDate: "2022-05-30",
//       description:
//         "Developed web applications and collaborated with cross-functional teams.",
//     },
function ProfessionalDisplay(props) {
  return (
    <>
      <div className="professionalLeftSide">
        <div className="JobTitle">
          <b>{props.element.jobTitle}</b>
        </div>
        <div className="professionalLeftSideDown">
          <div className="company">
            <p>{props.element.company}</p>
          </div>
          <div className="city">
            <p>{props.element.city}</p>
          </div>
        </div>
      </div>
      <div className="professionalRightSide">
        <p>{props.element.startDate + " " + props.element.endDate}</p>
      </div>
      <div className="professionalDescription">
        <p>{props.element.description}</p>
      </div>
    </>
  );
}

export default ProfessionalDisplay;
