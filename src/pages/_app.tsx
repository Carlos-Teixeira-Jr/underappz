import '@/styles/globals.css'
import 'typeface-roboto';
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { SessionProvider, useSession } from 'next-auth/react';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  const { push } = useRouter();

  // useEffect(() => {
  //   const handleLoggedIn = async () => {
  //     if (session) {
  //       push("/feed");
  //     } else {
  //       push("/");
  //     }
  //   };
  //   handleLoggedIn();
  // }, []);

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  ) 
}
