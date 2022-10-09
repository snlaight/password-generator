import {
  UPPERCASE_LETTERS,
  LOWERCASE_LETTERS,
  NUMBERS,
  SYMBOLS,
} from '@utils/constants';

const generatePassword = ({ length = 8, options }) => {
  const { uppercase, lowercase, numbers, symbols } = options;

  const characterPool = [];

  if (uppercase) {
    characterPool.push(...UPPERCASE_LETTERS);
  }

  if (lowercase) {
    characterPool.push(...LOWERCASE_LETTERS);
  }

  if (numbers) {
    characterPool.push(...NUMBERS);
  }

  if (symbols) {
    characterPool.push(...SYMBOLS);
  }

  return Array.from(
    { length },
    () => characterPool[Math.floor(Math.random() * characterPool.length)]
  ).join('');
};

export default generatePassword;
