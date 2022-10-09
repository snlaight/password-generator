import { useContext } from 'react';
import { PasswordContext } from '@context/PasswordContext';

const Slider = () => {
  const { passwordLength, setPasswordLength, maxPasswordLength } =
    useContext(PasswordContext);

  const size = (passwordLength * 100) / maxPasswordLength;

  const setSliderBackground = () =>
    `linear-gradient(90deg, #A4FFAF ${size}%, #E6E5EA ${size}%)`;

  return (
    <div className='p-6 bg-primary'>
      <div className='flex flex-row justify-between'>
        <p className='jetBrainsMain my-auto'> Character length</p>
        <p className='text-success headingL'> {passwordLength} </p>
      </div>
      <input
        type='range'
        min='0'
        max={maxPasswordLength}
        value={passwordLength}
        style={{ background: setSliderBackground() }}
        onChange={(e) => setPasswordLength(e.target.value)}
        className='w-full appearance-none'
      />
    </div>
  );
};

export default Slider;
