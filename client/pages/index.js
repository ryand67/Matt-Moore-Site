import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matt Moore</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
      </Head>

      <main className={styles.hero}>
        <h1 className={styles.siteHeader}>MATT MOORE</h1>
        {/* <hr className={styles.heroHr} /> */}
        <p className={styles.heroDesc}>Singer, Songwriter, Musician</p>
        <button className={styles.heroButton}>About Me</button>
      </main>
    </div>
  )
}
