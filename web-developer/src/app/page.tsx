import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Particles from './particles'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Particles id="tsparticles" />
    </main>
  )
}
