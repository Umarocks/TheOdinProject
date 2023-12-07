import React from "react";

function ProfessionalForm() {
  return (
    <>
      <form>
        <div className="input-container">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            placeholder="Enter Job Title"
            id="jobTitle"
            defaultValue=""
          />
        </div>
        <div className="input-container">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            placeholder="Enter Company"
            id="company"
            defaultValue=""
          />
        </div>
        <div className="input-dates">
          <div className="input-container">
            <label htmlFor="startDatePro">Start Date</label>
            <input
              type="date"
              name="startDatePro"
              placeholder="mm / dd / yy"
              id="startDatePro"
              defaultValue=""
            />
          </div>
          <div className="input-container">
            <label htmlFor="endDatePro">End Date</label>
            <input
              type="date"
              name="endDatePro"
              placeholder="mm / dd / yy"
              id="endDatePro"
              defaultValue=""
            />
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="mainTasks">Description</label>
          <textarea
            name="mainTasks"
            placeholder="Main tasks"
            id="mainTasks"
          ></textarea>
        </div>
        <div className="form-buttons">
          <span></span>
          <button className="save-form" type="submit" disabled="">
            <span>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="svg-right"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
              </svg>{" "}
              <span></span>Save
            </span>
          </button>
        </div>
      </form>
    </>
  );
}

export default ProfessionalForm;
