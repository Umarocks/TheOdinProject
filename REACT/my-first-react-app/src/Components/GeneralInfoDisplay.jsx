import React from "react";

function GeneralInfoDisplay(props) {
  return (
    <>
      <div className="generalName" style={{ borderBottom: "2px black solid" }}>
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
    </>
  );
}

export default GeneralInfoDisplay;
