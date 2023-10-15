import React, { useState } from "react";

function RegisterComponent() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAgeChange = (e) => {
    const newAge = parseInt(e.target.value, 10);
    if (newAge > 0 && newAge <= 100) {
      setAge(newAge);
      setError("");
    } else {
      setError("Age must be greater than 0 and less than or equal to 100.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with the form data here
    console.log("JSON", { email, firstName, lastName, age });
  };
  return (
    <div style={{ maxWidth: "40%"}}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            First Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Age:
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            value={age}
            onChange={handleAgeChange}
            min={1}
            max={100}
            required
          />
          {error && <div className="text-danger">{error}</div>}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegisterComponent;
