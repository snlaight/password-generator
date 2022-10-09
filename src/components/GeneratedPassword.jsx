import { useContext, useState } from 'react';
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';

import { PasswordContext } from '@context/PasswordContext';

const GeneratedPassword = () => {
  const { password } = useContext(PasswordContext);
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  const handleCopy = () => {
    copyToClipboard();
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <div className='p-6 bg-primary'>
      <div className='flex flex-row justify-between'>
        <input
          type='text'
          disabled
          className='jetBrainsMain my-auto text-white'
          placeholder='P4$5W0rD!'
          value={password}
        />
        <div className='flex flex-row space-x-4'>
          {isCopied ? <h1 className='text-success transition-transform '>COPIED</h1> : null}
          <ClipboardDocumentIcon
            className='text-success h-6 w-6 hover:text-accent cursor-pointer'
            onClick={handleCopy}
          />
        </div>
      </div>
    </div>
  );
};

export default GeneratedPassword;
