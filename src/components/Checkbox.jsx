import { useContext } from 'react';
import { PasswordContext } from '@context/PasswordContext';

const useGenerateCheckboxes = () => {
  const {
    includeUppercase,
    setIncludeUppercase,
    includeLowerCase,
    setIncludeLowerCase,
    includeNumbers,
    setIncludeNumbers,
    includeSymbols,
    setIncludeSymbols,
  } = useContext(PasswordContext);

  const checkboxes = [
    {
      name: 'Uppercase',
      value: includeUppercase,
      setValue: setIncludeUppercase,
    },
    {
      name: 'Lowercase',
      value: includeLowerCase,
      setValue: setIncludeLowerCase,
    },
    {
      name: 'Numbers',
      value: includeNumbers,
      setValue: setIncludeNumbers,
    },
    {
      name: 'Symbols',
      value: includeSymbols,
      setValue: setIncludeSymbols,
    },
  ];

  return checkboxes;
};

const Checkbox = () => {
  const checkboxes = useGenerateCheckboxes();

  return (
    <>
      {checkboxes.map((checkbox) => (
        <div
          key={checkbox.name}
          className='flex flex-row justify-start space-x-2 p-6 bg-primary'>
          <input
            type='checkbox'
            checked={checkbox.value}
            onChange={() => checkbox.setValue((prev) => !prev)}
            className='my-auto accent-success h-4 w-4 '
          />
          <p className='jetBrainsMain my-auto'>
            Include{' '}
            {(checkbox.name === 'Uppercase') || (checkbox.name === 'Lowercase')
              ? `${checkbox.name} Letters`
              : checkbox.name}
          </p>
        </div>
      ))}
    </>
  );
};

export default Checkbox;
