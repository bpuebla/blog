import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyles } from '../app/styles/common';
import '../app/styles/force.css';

export default function App({ Component, pageProps }: AppProps) {
 return (
   <>
     <Global styles={globalStyles} />
     <Component {...pageProps} />
   </>
 );
}