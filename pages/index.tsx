import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../src/components/Header'
import SurveyMain from '../src/components/SurveyMain'
import Footer from '../src/components/Footer'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Health Servey App</title>
        <meta name="description" content="Helth Survey App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <SurveyMain />
      </main>

      <Footer />
    </div>
  );
}

export default Home
