import React, { useState } from 'react';
import './App.css';

const generatePassword = (length, includeSymbols, includeNumbers, includeUppercase, includeLowercase) => {
  const symbols = '!@#$%^&*()_-+=<>?';
  const numbers = '0123456789';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let validChars = '';

  if (includeSymbols) {
    validChars += symbols;
  }

  if (includeNumbers) {
    validChars += numbers;
  }

  if (includeUppercase) {
    validChars += uppercase;
  }

  if (includeLowercase) {
    validChars += lowercase;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * validChars.length);
    password += validChars.charAt(randomIndex);
  }

  return password;
};

const App = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12); // Valor predeterminado de longitud
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(length, includeSymbols, includeNumbers, includeUppercase, includeLowercase);
    setPassword(newPassword);
  };

  const handleCopyToClipboard = () => {
    // Lógica para copiar la contraseña al portapapeles
    // ...
  };

  return (
    <div className="App">
      <h1>Password Generator App</h1>
      <div>
        <label>Length:</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          min={6}
          max={25}
        />
      </div>
      <div>
        <label>
          <input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} />
          Include Symbols
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} />
          Include Numbers
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} />
          Include Uppercase
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={includeLowercase} onChange={() => setIncludeLowercase(!includeLowercase)} />
          Include Lowercase
        </label>
      </div>
      <button onClick={handleGeneratePassword}>Generate Password</button>
      <button onClick={handleCopyToClipboard}>Copy to Clipboard</button>
      <div>
        <label>Password:</label>
        <input type="text" value={password} readOnly />
      </div>
    </div>
  );
};

export default App;