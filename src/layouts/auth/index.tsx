import Head from 'next/head';

import styles from './auth.module.css';

const Auth = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Control de finanzas</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
}
export default Auth
