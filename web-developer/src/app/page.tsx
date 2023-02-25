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
        <div className="grid max-w-screen-lg px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28 bg-white dark:bg-gray-900">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Building digital products & brands.</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">This free and open-source landing page template was built using the utility classes from <a href="https://tailwindcss.com" className="hover:underline">Tailwind CSS</a> and based on the components from the <a href="https://flowbite.com/docs/getting-started/introduction/" className="hover:underline">Flowbite Library</a> and the <a href="https://flowbite.com/blocks/" className="hover:underline">Blocks System</a>.</p>
            </div>
        </div>
    </section>

      <section>
        <div className="max-w-screen-lg mx-auto px-4 py-8 lg:px-6 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="w-full items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Work with tools you already use</h2>
              <p className="mb-8 font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>

              <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                <li className="flex space-x-3">
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Continuous integration and deployment</span>
                </li>
                <li className="flex space-x-3">
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Development workflow</span>
                </li>
                <li className="flex space-x-3">
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Knowledge management</span>
                </li>
              </ul>
              <p className="mb-8 font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
            </div>
          </div>
        </div>
      </section>
      

    </>
  )
}
