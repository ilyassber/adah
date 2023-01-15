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
        <HomeLayout className="h-full w-full bg-gradient-to-b from-[#182B2B] to-[#2B2B2B]">

        </HomeLayout>
      </main>
    </>
  )
}
