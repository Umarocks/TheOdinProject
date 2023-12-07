import React from "react";

function EducationForm() {
  return (
    <>
      <form>
        <div className="input-container">
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            name="degree"
            placeholder="Enter Degree / Field of Study"
            id="degree"
            defaultValue=""
          />
        </div>
        <div className="input-container">
          <label htmlFor="school">School</label>
          <input
            type="text"
            name="school"
            placeholder="Enter school / university"
            id="school"
            defaultValue=""
          />
        </div>
        <div className="input-container">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            placeholder="Enter City"
            id="city"
            defaultValue=""
          />
        </div>
        <div className="input-container">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            placeholder="Enter Country"
            id="country"
            defaultValue=""
          />
        </div>
        <div className="input-dates">
          <div className="input-container">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              name="startDate"
              placeholder="mm / dd / yy"
              id="startDate"
              defaultValue=""
            />
          </div>
          <div className="input-container">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              name="endDate"
              placeholder="mm / dd / yy"
              id="endDate"
              defaultValue=""
            />
          </div>
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

export default EducationForm;
