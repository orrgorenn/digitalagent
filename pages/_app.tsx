import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const theme = (()=> {
      if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme');
      }

      if (typeof window !== "undefined" && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      }
  
      return 'light';
    })();
  
    if(theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
