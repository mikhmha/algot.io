import TradeFeed from '../components/TradeFeed'
import AssetValue from '../components/AssetValue'
import AlgoStatus from '../components/AlgoStatus';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { firestore, tradeToJSON, stateToJSON } from '../lib/firebase';
import { useDocumentData, useCollection, useCollectionData } from 'react-firebase-hooks/firestore';
import { useState } from 'react';





const LIMIT = 20;



export async function getStaticProps(context) {
  const tradesQuery = firestore
    .collectionGroup('trades')
    .orderBy('fillTime', 'desc')
    .limit(LIMIT);
  const trades = (await tradesQuery.get()).docs.map(tradeToJSON);

  const stateRef = firestore.collection("state").doc("current");
  const state = stateToJSON(await stateRef.get());


  return {
    props: { trades, state }, // will be passed to the page component as props
  };

}

function useSSRCollection(ref, options) {
  const [value, loading, error] = useCollectionData(ref)

  if (options?.startWith && loading) {
    return [options.startWith, loading, error]
  } 

  else {
    return [value, loading, error]
  }
}

function useSSRDoc(ref, options) {
  const [value, loading, error] = useDocumentData(ref)

  if (options?.startWith && loading) {
    return [options.startWith, loading, error]
  } 

  else {
    return [value, loading, error]
  }

}




export default function Home(props) {

  const tradesRef =  firestore.collectionGroup('trades').orderBy('fillTime', 'desc').limit(LIMIT);
  const [trades] = useSSRCollection(tradesRef, { startWith: props.trades});

  const stateRef = firestore.collection("state").doc("current");
  const [state] = useSSRDoc(stateRef, { startWith: props.state});



  function getCurStatus() {
    var msg = "";

    msg += (state.buystate === "1") ? "to buy ETH @ <= limit " : "";
    msg += (state.sellstate === "1") ? "to sell ETH@ => limit " : "";

    return msg;

  }

  var status_msg = getCurStatus();
  console.log(status_msg);


    

  return (
    <div className={styles.container}>
      <Head>
        <title>algot.io</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className={styles.header}><h1>Wallet</h1></div>
      <div className={styles.assetGrid}>
          <h3> asset </h3>
          <h3>current value </h3>
          <h3>start of day value </h3>
          <AssetValue currency = {"USDT"} value = {state.balance} sod = {"10000.0000"}/>
          <AssetValue currency = {"ETH"} value = {state.quantity} sod = {"0.0000"}/>
        </div>


      <div className={styles.header}><h1>Status</h1></div>
        <div className={styles.statusGrid}>
          <h3> buy limit (USDT) </h3>
          <h3> sell limit (USDT) </h3>
          <h3>current strategy </h3>
          <AlgoStatus state = {state} status_msg = {status_msg}/>
        </div>

        <div className={styles.header}><h1>Strategy Poll</h1></div>
          <p> participate in a poll. results are used to influence the algorithim in real-time. </p>
           polls are generated automatically during periods of inactivity

      <div className={styles.header}><h1>Live Trade Feed</h1></div>
        <i>last 20 trades</i>
        <div className={styles.tradeFeed}>
          <h3>type</h3>
          <h3>price (USDT)</h3>
          <h3>quantity (ETH)</h3>
          <h3>total (USDT)</h3>
          <h3>fill time</h3>
          <TradeFeed trade={trades} />
        </div>
    </div>
  )
}




