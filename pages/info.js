import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Info() {
    return (
        <div className={styles.container}>
        <Head>
          <title>algot.io - Info</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <p className={styles.description}>
        FIXING VIEW FOR MOBILE
        ADDING STRATEGY DATA
        </p>


        </div>
    )
  }