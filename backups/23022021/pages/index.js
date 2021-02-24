import TradeFeed from '../components/TradeFeed'
import Loader from '../components/Loader';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { firestore, fromMillis, tradeToJSON } from '../lib/firebase';
import { useDocumentData, useCollection, useCollectionData } from 'react-firebase-hooks/firestore';
import { useState } from 'react';





const LIMIT = 5;



export async function getStaticProps(context) {
  const tradesQuery = firestore
    .collectionGroup('trades')
    .orderBy('fillTime', 'desc')
    .limit(LIMIT);

  const trades = (await tradesQuery.get()).docs.map(tradeToJSON);
  return {
    props: { trades }, // will be passed to the page component as props
  };

}

function useSSR(ref, options) {
  const [value, loading, error] = useCollectionData(ref)

  if (options?.startWith && loading) {
    return [options.startWith, loading, error]
  } 

  else {
    return [value, loading, error]
  }

}




export default function Home(props) {


  const [loading, setLoading] = useState(false);
  const [tradesEnd, setTradesEnd] = useState(false);


  const ref =  firestore.collectionGroup('trades').orderBy('fillTime', 'desc').limit(LIMIT);
  const [trades] = useSSR(ref, { startWith: props.trades});


  return (
    <div className={styles.container}>
      <Head>
        <title>algot.io</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <TradeFeed trade={trades} />
      </main>

      <footer className={styles.footer}>
          algot.io 
      </footer>
    </div>
  )
}




