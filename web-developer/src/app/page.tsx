"use client";

import { Inter } from 'next/font/google'
import Particles from './particles'
import styles from './page.module.css'
import Header from "./components/header";
import ContactForm from './components/form';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Particles id="tsparticles" />

      <Header />

      <section id="home">
        <div className="grid max-w-screen-lg px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-2 lg:pt-18 bg-slate-100">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-5xl">Udvikling. Enterprise Cloud løsninger.</h1>
            <p className="mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl">Jeg kan hjælpe med udvikling af alt fra backend til fullstack web løsninger. Derudover har jeg stor viden som cloud arkitekt af cloud løsninger på både Microsoft Azure samt Amazon AWS, specielt inden for større og mere komplekse cloud løsninger.</p>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="grid max-w-screen-lg px-4 pt-20 pb-4 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:grid-cols-2 lg:pt-4 bg-slate-200">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-3xl xl:text-4xl">Om</h1>
            <p className="mb-4 font-light text-gray-900 lg:mb-4 md:text-lg lg:text-xl">Jeg arbejder til dagligt i en større Dansk/Europæisk virksomhed som Cloud Architect, hvor jeg står for det overordnede design af vores Cloud løsninger, vi bruger primært Microsoft Azure, samt en del hos Amazon AWS. Så ting som Microsoft Cloud Adoption Framework (CAF) og Enterprise Scale ikke bare buzzwords, men noget jeg har stor erfaring med til dagligt. Det er mit ansvar at sørge for at scalere vores Cloud Platform, ved at følge best practices, så det overordnede design kan skalere til hundredevis af brugere/teams. Grundet størelsen og kompleksiteten af de løsninger jeg designer/drifter til dagligt, har jeg en bred og dyb viden inden for alt fra helt simple ting som storage/vms, til ekstremt komplekse miljø med Hub/Spoke virtual netværk design, med peering til flere on-prem lokationer, det er meget få Azure services vi ikke har brugt i et eller andet omfang.</p>
            <p className="mb-4 font-light text-gray-900 lg:mb-4 md:text-lg lg:text-xl">Før mit job som Cloud Architect, var jeg en del af vores Cloud DevOps/Engineering team, hvor jeg stod for at implementere alle vores Cloud infrastruktur som kode (IaC), vi både ARM templates/bicep, men også via Python/C# kode mod Azure/Graph REST APIerne til de mere komplekse ting. Derudover har jeg siden før år 2000, altid interesseret og arbejdet med udvikling, først web udvikling via Classic ASP, senere asp.net med C# samt Python via Django/Flask, til senere at udvikle desiderede microservice løsninger, derudover har jeg rent privat en stor interesse inden for programmering i alt fra C#, over Python, C++, til Rust.</p>
            <p className="mb-4 font-light text-gray-900 lg:mb-4 md:text-lg lg:text-xl">Da jeg til dagligt har et job jeg er fint tilfreds med, så vil alt udvikling/konsulent ydelser ske uden for almindelig arbejdstid, og dette er ikke til forhandling, så inden du kontakter mig skal du være afklaret med dette. Jeg er naturligvis også altid åben for nye job tilbud, hvis noget interessant skulle dukke op.</p>
          </div>
        </div>
      </section>

      <section id="competances">
        <div className="grid max-w-screen-lg px-4 pt-20 pb-4 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:grid-cols-2 lg:pt-4 bg-slate-100">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-3xl xl:text-4xl">Kompetancer</h1>
            <p className="mb-4 font-light text-gray-900 lg:mb-4 md:text-lg lg:text-xl">Nedenstående er en overordnet liste af områder jeg har stor erfaring med, men listen vil blive alt for lang hvis alt skal listes op, kontakt mig gerne hvis du har spørgsmål om nogle specifikke kompetancer der ikke fremgår af listen.</p>
          </div>
        </div>
      </section>

      <section id='prices'>
        <div className="grid max-w-screen-lg px-4 pt-20 pb-4 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:grid-cols-2 lg:pt-4 bg-slate-200">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-3xl xl:text-4xl">Priser</h1>
            <p className="mb-4 font-light text-gray-900 lg:mb-4 md:text-lg lg:text-xl">Vejledende time priser:</p>


            <ul className="max-w-md divide-y divide-gray-200">
              <li className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-medium text-gray-900 truncate">
                      Cloud konsulent
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      (Design, Advise, IaC, DevOps, Azure, AWS)
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    1200 DKK/t
                  </div>
                </div>
              </li>
              <li className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-medium text-gray-900 truncate">
                      Backend udvikling
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      (C#, Python, Node.Js)
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    1000 DKK/t
                  </div>
                </div>
              </li>
              <li className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-medium text-gray-900 truncate">
                      Fullstack udvikling
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      (React, Next.js, ASP.NET Core MVC , Razor Pages)
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    1200 DKK/t
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id='contact'>
        <div className="grid max-w-screen-lg px-4 pt-20 pb-4 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:grid-cols-2 lg:pt-4 bg-slate-100">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-3xl xl:text-4xl">Kontakt</h1>
            <p className="mb-4 font-light text-gray-900 lg:mb-4 md:text-lg lg:text-xl">
              Du kan kontakte mig via nedenstående formular, eller via mail på <a href="mailto:kontakt@web-developer.dk">kontakt@web-developer.dk</a>
            </p>
          </div>
        </div>
        <div className='grid max-w-screen-lg mx-auto p-4 lg:grid-cols-2 bg-slate-100'>
          <div className='lg:col-span-7'>
            <ContactForm />
          </div>
        </div>
      </section>

    </>
  )
}
