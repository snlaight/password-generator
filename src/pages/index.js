import Head from 'next/head';

import { PasswordForm } from '@components';

export default function Home() {
  return (
    <div className='jetbrainsMain'>
      <Head>
        <title>Password Generator | Santiago Laight</title>
      </Head>
      <h1 className='headingL'>Password generator</h1>
      <PasswordForm />
    </div>
  );
}
