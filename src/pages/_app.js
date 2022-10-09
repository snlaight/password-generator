import '@styles/globals.css';

import { PasswordProvider } from '@context/PasswordContext';

function MyApp({ Component, pageProps }) {
  return (
    <PasswordProvider>
      <Component {...pageProps} />
    </PasswordProvider>
  );
}

export default MyApp;
