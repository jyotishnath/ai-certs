import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { AppProps } from 'next/app';
import { MyContextProvider } from '../app/MyContext';
import Navigation from '../app/navigation';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <MyContextProvider>
      <Navigation />
      <Component {...pageProps} />
    </MyContextProvider>
  );
};

export default App;