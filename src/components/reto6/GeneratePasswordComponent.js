import React, { useState, useEffect } from "react";

const GeneratePasswordComponent = () => {
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#$%^&*()-_=+[]{}|;:,.<>?/~",
  };

  useEffect(() => {
    generatePassword();
  }, [
    passwordLength,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSpecialChars,
  ]);

  const generatePassword = () => {
    let validChars = "";

    if (includeUppercase) validChars += characters.uppercase;
    if (includeLowercase) validChars += characters.lowercase;
    if (includeNumbers) validChars += characters.numbers;
    if (includeSpecialChars) validChars += characters.symbols;

    let generatedPassword = "";

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[randomIndex];
    }

    setGeneratedPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPassword);
    alert("Password copied to clipboard!");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", marginTop: "50px" }}>
      <h2>Password Generator</h2>
      <div>
        Generated Password: <strong>{generatedPassword}</strong>
      </div>
      <div className="form-group">
        <label htmlFor="passwordLength">
          Password Length: {passwordLength}
        </label>
        <input
          type="range"
          className="form-control-range"
          id="passwordLength"
          min="6"
          max="30"
          value={passwordLength}
          onChange={(e) => setPasswordLength(parseInt(e.target.value))}
        />
      </div>
      <div className="form-check">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="uppercase"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
          <label className="form-check-label" htmlFor="uppercase">
            Include Uppercase
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="lowercase"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
          />
          <label className="form-check-label" htmlFor="lowercase">
            Include Lowercase
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="numbers"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          <label className="form-check-label" htmlFor="numbers">
            Include Numbers
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="specialChars"
            checked={includeSpecialChars}
            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
          />
          <label className="form-check-label" htmlFor="specialChars">
            Include Special Characters
          </label>
        </div>
      </div>
      <button className="btn btn-secondary mt-2" onClick={copyToClipboard}>
        Copy Password
      </button>
    </div>
  );
};
export default GeneratePasswordComponent;
