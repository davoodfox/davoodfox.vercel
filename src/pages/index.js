import Head from "next/head";
import styles from "../styles/Home.module.css";
import TipModal from "../components/TipModal";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Davood Rafiee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <TipModal info={{ name: "Joe", value: "100" }}></TipModal>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
