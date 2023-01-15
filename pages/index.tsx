import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import HomeLayout from '../ui/layouts/HomeLayout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>ADAH</title>
        <meta name="description" content="Personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-screen">
        <HomeLayout className="h-full w-full bg-gradient-to-b from-[#182B2B] to-[#2B2B2B]"><div className="h-full w-full flex flex-col justify-center p-24">
          <p className="font-semibold text-xl text-[#D19E18] mb-8">
            Hi, I'm
          </p>
          <p className="font-montserrat font-bold text-5xl text-[#E2E8F0] mb-8">
            Ilyass BERCHIDA
          </p>
          <p className="font-bold text-5xl text-[#9197A0] leading-normal mb-8">
            I build things & ensure<br />functionality.
          </p>
          <p className="font-normal text-lg text-[#9197A0] leading-normal">
            I'm a <span className="font-semibold text-[#D19E18]">Software developer</span> specialized in creating digital<br />experiences mainly for the web. Currently focusing on building<br />digital tools that enhance agriculture at <span className="font-semibold text-[#D19E18]">AgriEdge</span>.
          </p>
        </div>
        </HomeLayout>
      </main>
    </>
  )
}
