import React from "react";

function GeneralInfoDisplay(props) {
  return (
    <>
      <div className="generalName">
        <h2>{props.generalInfoForm.name}</h2>
      </div>
      <div className="generalemailetc">
        <p>{props.generalInfoForm.email}</p>

        <p>{props.generalInfoForm.phone}</p>

        <p>{props.generalInfoForm.city}</p>
      </div>
    </>
  );
}

export default GeneralInfoDisplay;
