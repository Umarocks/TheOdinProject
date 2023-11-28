import React from "react";

function ProfessionalForm() {
  return (
    <>
      <form>
        <div class="input-container">
          <label for="jobTitle">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            placeholder="Enter Job Title"
            id="jobTitle"
            value=""
          />
        </div>
        <div class="input-container">
          <label for="company">Company</label>
          <input
            type="text"
            name="company"
            placeholder="Enter Company"
            id="company"
            value=""
          />
        </div>
        <div class="input-dates">
          <div class="input-container">
            <label for="startDatePro">Start Date</label>
            <input
              type="date"
              name="startDatePro"
              placeholder="mm / dd / yy"
              id="startDatePro"
              value=""
            />
          </div>
          <div class="input-container">
            <label for="endDatePro">End Date</label>
            <input
              type="date"
              name="endDatePro"
              placeholder="mm / dd / yy"
              id="endDatePro"
              value=""
            />
          </div>
        </div>
        <div class="input-container">
          <label for="mainTasks">Description</label>
          <textarea
            name="mainTasks"
            placeholder="Main tasks"
            id="mainTasks"
          ></textarea>
        </div>
        <div class="form-buttons">
          <span></span>
          <button class="save-form" type="submit" disabled="">
            <span>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="svg-right"
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
