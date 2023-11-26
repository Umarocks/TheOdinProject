import React from "react";

export default function EducationForm() {
  return (
    <>
      <div className="Degree">
        <h3>Degree</h3>
        <input type="text" />
      </div>
      <div className="School">
        <h3>School</h3>
        <input type="text" />
      </div>
      <div className="City">
        <h3>City</h3>
        <input type="text" />
      </div>
      <div className="Country">
        <h3>Country</h3>
        <input type="text" />
      </div>
      <div className="Date">
        <div className="StartDate">
          <h3>Start Date</h3>
          <input type="date" name="StartDateInput" id="" />
        </div>
        <div className="EndDate">
          <h3>End Date</h3>
          <input type="date" name="EndDateInput" id="" />
        </div>
      </div>
      <div className="SaveButton">
        <button>
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
          Save
        </button>
      </div>
    </>
  );
}
