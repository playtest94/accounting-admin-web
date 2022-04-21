
import { ReactElement, ReactNode } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import type { AppContext, AppProps } from 'next/app'
import { NextPage } from 'next';
import { parseCookies } from 'nookies';

import { redirectUser } from '../utils'

import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page)

  return <NextUIProvider>
    {getLayout(<Component {...pageProps} />)}
  </NextUIProvider >
}

MyApp.getInitialProps = async ({ Component, ctx }: any) => {
  const jwt = parseCookies(ctx).jwt;
  // api.setBaseURL(process.env.STRAPI_URL)
  // api.setHeader('Authorization', `Bearer ${jwt}`)
  console.log('_app', { jwt })
  if (!jwt && ctx.pathname !== '/auth/callback') {
    redirectUser(ctx, `${process.env.STRAPI_URL}/api/connect/auth0`)
  }

  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
}

export default MyApp
