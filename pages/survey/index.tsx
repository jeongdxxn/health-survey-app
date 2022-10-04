import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "../../src/components/Footer";
import Header from "../../src/components/Header";
import SurveyForm from "../../src/components/SurveyForm";
import styles from "../../styles/Home.module.css";

export default function SurveyPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <Head>
        <title>Servey Form</title>
        <meta name="description" content="Helth Survey From" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <SurveyForm queryId={id} />
      </main>

      <Footer />
    </div>
  );
}
