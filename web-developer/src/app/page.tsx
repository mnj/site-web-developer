"use client";

import { Inter } from 'next/font/google'
import Particles from './particles'
import styles from './page.module.css'
import Header from "./components/header";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Particles id="tsparticles" />

      <Header />

      <section>
        <div className="grid max-w-screen-lg px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-2 lg:pt-28 bg-slate-400">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-5xl">Udvikling. Enterprise Cloud Konsulent.</h1>
                <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl bg-green-200">Jeg kan hjælpe med udvikling af alt fra backend til fullstack web løsninger. Derudover har jeg stor viden som cloud arkitekt af cloud løsninger på både Microsoft Azure samt Amazon AWS, specielt inden for større og mere komplekse cloud løsninger.</p>
            </div>
        </div>
    </section>

    <section>
        <div className="grid max-w-screen-lg px-4 pt-20 pb-4 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:grid-cols-2 lg:pt-4 bg-slate-700">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="mb-4 text-xl font-extrabold leading-none tracking-tight md:text-2xl xl:text-3xl">Udvikling. Enterprise Cloud Konsulent.</h1>
                <p className="mb-4 font-light text-gray-500 lg:mb-4 md:text-lg lg:text-xl bg-green-200">Jeg kan hjælpe med udvikling af alt fra backend til fullstack web løsninger. Derudover har jeg stor viden som cloud arkitekt af cloud løsninger på både Microsoft Azure samt Amazon AWS, specielt inden for større og mere komplekse cloud løsninger.</p>
            </div>
        </div>
    </section>


    </>
  )
}
