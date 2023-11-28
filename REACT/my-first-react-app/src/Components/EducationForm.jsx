import React from "react";

export default function EducationForm() {
  return (
    <>
      <form>
        <div class="input-container">
          <label for="degree">Degree</label>
          <input
            type="text"
            name="degree"
            placeholder="Enter Degree / Field of Study"
            id="degree"
            value=""
          />
        </div>
        <div class="input-container">
          <label for="school">School</label>
          <input
            type="text"
            name="school"
            placeholder="Enter school / university"
            id="school"
            value=""
          />
        </div>
        <div class="input-container">
          <label for="city">City</label>
          <input
            type="text"
            name="city"
            placeholder="Enter City"
            id="city"
            value=""
          />
        </div>
        <div class="input-container">
          <label for="country">Country</label>
          <input
            type="text"
            name="country"
            placeholder="Enter Country"
            id="country"
            value=""
          />
        </div>
        <div class="input-dates">
          <div class="input-container">
            <label for="startDate">Start Date</label>
            <input
              type="date"
              name="startDate"
              placeholder="mm / dd / yy"
              id="startDate"
              value=""
            />
          </div>
          <div class="input-container">
            <label for="endDate">End Date</label>
            <input
              type="date"
              name="endDate"
              placeholder="mm / dd / yy"
              id="endDate"
              value=""
            />
          </div>
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
