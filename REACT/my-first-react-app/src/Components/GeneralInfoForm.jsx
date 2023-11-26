import React from "react";

export default function GeneralInfoForm() {
  return (
    <>
      <div class="input-container">
        <label for="fullName">Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          id="fullName"
          value=""
        />
      </div>
      <div class="input-container">
        <label for="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          id="email"
          value=""
        />
      </div>
      <div class="input-container">
        <label for="phone">Phone Number</label>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          id="phone"
          value=""
        />
      </div>
      <div class="input-container">
        <label for="address">City and province</label>
        <input
          type="text"
          name="address"
          placeholder="City, Province"
          id="address"
          value=""
        />
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
    </>
  );
}
