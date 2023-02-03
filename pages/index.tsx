import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import HomeLayout from '../ui/layouts/HomeLayout';
import HomeCard from '../ui/cards/home/HomeCard';
import { GlobalContext } from '../components/context/Context';
import AboutCard from '../ui/cards/about/AboutCard';
import ExperienceCard from '../ui/cards/experience/ExperienceCard';
import ProjectsCard from '../ui/cards/projects/ProjectsCard';
import GetInTouchCard from '../ui/cards/contact/GetInTouchCard';

import type { GetServerSideProps, GetStaticProps, InferGetStaticPropsType } from 'next'

import { useTranslation, Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const inter = Inter({ subsets: ['latin'] })

type HomeProps = {
  className: string;
};

const Home: React.FC<HomeProps> = (props) => {

  const router = useRouter()
  const { t } = useTranslation('common')

  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  const changeTo = router.locale === 'en' ? 'de' : 'en'

  const { params, dispatchParams } = React.useContext(GlobalContext);

  React.useEffect(() => {
    console.log(params.selectedSectionId);
  }, [params.selectedSectionId]);

  return (
    <>
      <Head>
        <title>ADAH</title>
        <meta name="description" content="Personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-screen">
        <HomeLayout className="h-screen w-full bg-gradient-to-b from-[#182B2B] to-[#2B2B2B] overflow-hidden">
          <div className="h-screen w-full flex flex-col justify-center">
            {params.selectedSectionId == 1
              ? (<HomeCard className="w-full" />)
              : params.selectedSectionId == 2
                ? (<AboutCard className="w-full" />)
                : params.selectedSectionId == 3
                  ? (<ExperienceCard className="h-auto w-full" />)
                  : params.selectedSectionId == 4
                    ? (<ProjectsCard className="w-full" />)
                    : params.selectedSectionId == 5
                      ? (<GetInTouchCard className="w-full" />)
                      : null}
          </div>
        </HomeLayout>
      </main>
    </>
  )
};

export const getServerSideProps: GetServerSideProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})

export default Home;
