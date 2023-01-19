import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import HomeLayout from '../ui/layouts/HomeLayout';
import HomeCard from '../ui/cards/home/HomeCard';
import { GlobalContext } from '../components/context/Context';
import AboutCard from '../ui/cards/about/AboutCard';

const inter = Inter({ subsets: ['latin'] })

type HomeProps = {
  className: string;
};

const Home: React.FC<HomeProps> = (props) => {

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
          <div className="w-full flex flex-col justify-center p-24">
            {params.selectedSectionId == 1
              ? (<HomeCard className="w-full" />)
              : params.selectedSectionId == 2
                ? (<AboutCard className="w-full" />)
                : null}
          </div>
        </HomeLayout>
      </main>
    </>
  )
};

export default Home;
