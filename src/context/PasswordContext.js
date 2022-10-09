// create context to hold password generation requirements
import React, { createContext, useState } from 'react';

export const PasswordContext = createContext();

export const PasswordProvider = ({ children }) => {
  const [passwordLength, setPasswordLength] = useState(6);
  const [maxPasswordLength, setMaxPasswordLength] = useState(20);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <PasswordContext.Provider
      value={{
        passwordLength,
        setPasswordLength,
        includeUppercase,
        setIncludeUppercase,
        includeLowerCase,
        setIncludeLowerCase,
        includeNumbers,
        setIncludeNumbers,
        includeSymbols,
        setIncludeSymbols,
        maxPasswordLength,
        setMaxPasswordLength,
        password,
        setPassword,
      }}>
      {children}
    </PasswordContext.Provider>
  );
};
