import React from 'react';
import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app';
import { GlobalContext } from '../components/context/Context';
import { Analytics } from '@vercel/analytics/react';

const paramsReducer = (params: any, data: { key: string; value: any }) => {
  let nParams = {
    ...params,
  };
  nParams[data.key] = data.value;
  return nParams;
};

let defaultParams = {
  firebaseConfig: null,
  initAnimation: false,
  sections: [
    {
      id: 1,
      name: "Home"
    },
    {
      id: 2,
      name: "About"
    },
    {
      id: 3,
      name: "Experience"
    },
    {
      id: 4,
      name: "Projects"
    },
    {
      id: 5,
      name: "Get in Touch"
    }
  ],
  selectedSectionId: 1,
  nextSectionId: 1,
};

const App = ({ Component, pageProps }: AppProps) => {
  const [params, dispatchParams] = React.useReducer(
    paramsReducer,
    defaultParams
  );

  return (
    <GlobalContext.Provider value={{ params, dispatchParams }}>
      <Component {...pageProps} />
      <Analytics />
    </GlobalContext.Provider>
  )
}

export default appWithTranslation(App /*, nextI18NextConfig */)