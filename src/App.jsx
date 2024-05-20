import React, { useState } from "react";

function App() {
  const [passwordLength, setPasswordLength] = useState(6);
  const [includeAlphabets, setIncludeAlphabets] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const handleLengthChange = (e) => {
    const value = Math.min(Math.max(e.target.value, 6), 14);
    setPasswordLength(value);
  };

  const handleGeneratePassword = () => {
    let characters = "";
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    if (includeAlphabets) characters += alphabet;
    if (includeNumbers) characters += numbers;
    if (includeSpecialChars) characters += specialChars;

    if (characters === "") {
      characters = alphabet;
    }

    let password = "";
    const length = Math.min(passwordLength, 14);
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    setGeneratedPassword(password);
  };

  return (
    <div>
      <h1>Password Generator</h1>
      <div>
        <label>
          Password Length:
          <input
            type="number"
            value={passwordLength}
            onChange={handleLengthChange}
            min={6}
            max={14}
            placeholder="Minimum 6 Characters"
          />
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeAlphabets}
            onChange={() => setIncludeAlphabets(!includeAlphabets)}
          />
          Include Alphabets
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Include Numbers
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeSpecialChars}
            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
          />
          Include Special Characters
        </label>
      </div>
      <div>
        <button onClick={handleGeneratePassword}>Generate Password</button>
      </div>
      {generatedPassword && (
        <div>
          <h2>Generated Password:</h2>
          <div className="output">{generatedPassword}</div>
        </div>
      )}
    </div>
  );
}

export default App;
