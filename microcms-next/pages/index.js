import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { client } from "../libs/client";

export default function Home({ cms }) {

  const today = new Date();
  const year = today.getFullYear();
  console.log(cms)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          メインページ
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>microCMS</code>
        </p>
        <div className={styles.grid}>

          {cms.map((cms) => (
            <a href={cms.url} className={styles.card} key={cms.id}>
              <h2>{cms.title} &rarr;</h2>
              <p key={cms.id + 1}>{cms.overview}</p>
            </a>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          {year}{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </p>
      </footer>
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "care" });
  const data2 = await client.get({ endpoint: "categories" });
  const data3 = await client.get({ endpoint: "cms" });
  return {
    props: {
      care: data.contents,
      categories: data2.contents,
      cms: data3.contents,
    },
  };
};