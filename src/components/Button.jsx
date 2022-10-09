import { useContext } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

import { PasswordContext } from '@context/PasswordContext';
import generatePassword from '@utils/generatePassword';

const Button = () => {
  const {
    passwordLength,
    includeUppercase,
    includeLowerCase,
    includeNumbers,
    includeSymbols,
    password,
    setPassword,
  } = useContext(PasswordContext);

  const handleGeneratePassword = () => {
    const generatedPassword = generatePassword({
      length: passwordLength,
      options: {
        uppercase: includeUppercase,
        lowercase: includeLowerCase,
        numbers: includeNumbers,
        symbols: includeSymbols,
      },
    });
    setPassword(generatedPassword);
  };

  return (
    <button
      className='py-4 px-12 bg-success hover:bg-primary border-2 border-primary text-primary hover:text-success hover:border-success w-full uppercase flex flex-row justify-center items-center space-x-2'
      onClick={handleGeneratePassword}>
      Generate
      <ArrowRightIcon className='h-4 w-4 ml-2' />
    </button>
  );
};

export default Button;
