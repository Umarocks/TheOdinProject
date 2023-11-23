import React from "react";

export default function GeneralInfoForm() {
  return (
    <>
      <div className="Name">
        <h3>Full Name</h3>
        <input type="text" />
      </div>
      <div className="Email">
        <h3>Email</h3>
        <input type="email" />
      </div>
      <div className="Phone Number">
        <h3>Phone Number</h3>
        <input type="number" />
      </div>
      <div className="City,Province">
        <h3>City,Province</h3>
        <input type="text" />
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
