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
        <h3>Full Name</h3>
        <input type="number" />
      </div>
      <div className="City,Province">
        <h3>Full Name</h3>
        <input type="text" />
      </div>
      <div className="SaveButton">
        <button>
          <img src="" alt="" />
          Save
        </button>
      </div>
    </>
  );
}
