import React from "react";

function ProfessionalForm() {
  return (
    <>
      <div className="JobTitle">
        <h3>Job Title</h3>
        <input type="text" />
      </div>
      <div className="Company">
        <h3>Company</h3>
        <input type="text" />
      </div>
      <div className="Date">
        <div className="StartDate">
          <h3>Start Date</h3>
          <input type="date" name="" id="" />
        </div>
        <div className="EndDate">
          <h3>End Date</h3>
          <input type="date" />
        </div>
        <div className="Description">
          <textarea name="JobDescription" id="" cols="20" rows="5"></textarea>
        </div>
      </div>
    </>
  );
}

export default ProfessionalForm;
