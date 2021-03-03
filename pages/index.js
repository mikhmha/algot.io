import TradeFeed from '../components/TradeFeed'
import AssetValue from '../components/AssetValue'
import AlgoStatus from '../components/AlgoStatus'
import ConStatus from '../components/ConStatus'

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { firestore, tradeToJSON, stateToJSON } from '../lib/firebase';
import { useDocumentData, useCollection, useCollectionData } from 'react-firebase-hooks/firestore';






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

  //var status_msg = getCurStatus();
  const status_msg = "----"


    

  return (
    <div className={styles.container}>
      <Head>
        <title>algot.io - user driven HFT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ConStatus status = {state.constatus} />


      <div className={styles.header}><h1>Wallet</h1></div>
      <div className={styles.assetGrid}>
          <h3> asset </h3>
          <h3>current value </h3>
          <h3>start of day </h3>
          <AssetValue currency = {"USDT"} value = {state.balance} sod = {"10000.0000"}/>
          <AssetValue currency = {"ETH"} value = {state.quantity} sod = {"0.0000"}/>
      </div>

      <div className={styles.header}><h1>Strategy</h1></div>
        <div className={styles.strategyGrid}>
          <h4>current bid (USDT)</h4>
          <h4>current ask (USDT)</h4>
          <h4>current status</h4>
          <h4>type</h4>
          <h4>user polling</h4>
          <AlgoStatus state = {state} status_msg = {status_msg}/>
        </div>
      <strong>last trade</strong>
      <p>{ new Date(state.updatedAt.seconds * 1000).toLocaleString("en-US")}</p>
      <p>help the algorithm find new buy and sell limits by voting at</p>
      <a href="https://www.twitch.tv/algottwitch">twitch.tv/algottwitch</a>





      <div className={styles.header}><h1>Live Trade Feed</h1></div>
        <i>last 20 trades</i>
        <div className={styles.tradeFeed}>
          <h4>type</h4>
          <h4>price (USDT)</h4>
          <h4>quantity (ETH)</h4>
          <h4>total (USDT)</h4>
          <h4>fill time</h4>
          <TradeFeed trade={trades} />
        </div>
    </div>
  )
}




