import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     
      <Head>
        <title>Order food now</title>
        <meta name="description" content="Best app for ordering food in Germany" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      homepage
      {/* <Image src="/img/logo.svg" alt=""/> */}
     
    </div>
  )
}
