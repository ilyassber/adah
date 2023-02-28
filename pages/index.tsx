import React from 'react';
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import HomeLayout from '../ui/layouts/HomeLayout';
import HomeCard from '../ui/cards/HomeCard';
import { GlobalContext } from '../components/context/Context';
import AboutCard from '../ui/cards/AboutCard';
import ExperienceCard from '../ui/cards/ExperienceCard';
import ProjectsCard from '../ui/cards/ProjectsCard';
import GetInTouchCard from '../ui/cards/GetInTouchCard';

import type { GetServerSideProps, GetStaticProps, InferGetStaticPropsType } from 'next'

import { useTranslation, Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ScrollLayout from '../ui/layouts/ScrollLayout';

const inter = Inter({ subsets: ['latin'] })

type HomeProps = {
  firebaseConfig: any,
};

const Home: React.FC<HomeProps> = (props) => {

  const router = useRouter()
  const { t } = useTranslation('common')

  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  const changeTo = router.locale === 'en' ? 'fr' : 'en'

  const { params, dispatchParams } = React.useContext(GlobalContext);

  React.useEffect(() => {
    dispatchParams({ key: "firebaseConfig", value: props.firebaseConfig });
  }, []);

  return (
    <>
      <Head>
        <title>Ilyass BERCHIDA</title>
        <meta name="description" content="Ilyass BERCHIDA personal portfolio. Includes experience, personal projects, and social media links to get in touch." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/shuriken.svg" />
      </Head>
      <main className="h-screen w-screen bg-gradient-to-b from-[#182B2B] to-[#2B2B2B]">
        <>
          {/* Global site tag (gtag.js) - Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${props.firebaseConfig.ga_id}`}
          />
          <Script
            id='google-analytics'
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${props.firebaseConfig.ga_id}', {
                  page_path: window.location.pathname,
                });
              `
            }}
          />
        </>
        <HomeLayout className="h-screen w-full bg-gradient-to-b from-[#182B2B] to-[#2B2B2B] overflow-hidden">
          <ScrollLayout className="h-full w-full flex flex-col justify-center">
            {params.selectedSectionId == 1
              ? (<HomeCard className="h-full w-full" />)
              : params.selectedSectionId == 2
                ? (<AboutCard className="h-full w-full" />)
                : params.selectedSectionId == 3
                  ? (<ExperienceCard className="h-full w-full" />)
                  : params.selectedSectionId == 4
                    ? (<ProjectsCard className="h-full w-full" />)
                    : params.selectedSectionId == 5
                      ? (<GetInTouchCard className="h-full w-full" />)
                      : null}
          </ScrollLayout>
        </HomeLayout>
      </main>
    </>
  )
};

export const getServerSideProps: GetServerSideProps = async ({
  locale,
}) => {
  const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
    ga_id: process.env.GA_ID
  };
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
      firebaseConfig: firebaseConfig
    },
  }
}

export default Home;
