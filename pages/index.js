import TradeFeed from '../components/TradeFeed'
import EventFeed from '../components/EventFeed'
import AssetValue from '../components/AssetValue'
import AlgoStatus from '../components/AlgoStatus'
import ConStatus from '../components/ConStatus'

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { firestore, tradeToJSON, eventToJSON, stateToJSON } from '../lib/firebase';
import { useDocumentData, useCollection, useCollectionData } from 'react-firebase-hooks/firestore';






const trades_LIMIT = 20;
const events_LIMIT = 5;


export async function getStaticProps(context) {


  const stateRef = firestore.collection("state").doc("current");
  const state = stateToJSON(await stateRef.get());

  const tradesQuery = firestore
    .collectionGroup('trades')
    .orderBy('fillTime', 'desc')
    .limit(trades_LIMIT);
  const trades = (await tradesQuery.get()).docs.map(tradeToJSON);


  const eventsQuery = firestore
    .collectionGroup('events')
    .orderBy('processedAt', 'desc')
    .limit(events_LIMIT);
  const events = (await eventsQuery.get()).docs.map(eventToJSON);


  return {
    props: {state, trades, events}, // will be passed to the page component as props
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

  const stateRef = firestore.collection("state").doc("current");
  const [state] = useSSRDoc(stateRef, { startWith: props.state});

  const tradesRef =  firestore.collectionGroup('trades').orderBy('fillTime', 'desc').limit(trades_LIMIT);
  const [trades] = useSSRCollection(tradesRef, { startWith: props.trades});



  const eventsRef = firestore.collectionGroup('events').orderBy('processedAt', 'desc').limit(events_LIMIT);
  const [events] = useSSRCollection(eventsRef, { startWith: props.events});

/*
  function getCurStatus() {
    var msg = "";

    msg += (state.buystate === "1") ? "to buy ETH @ <= limit " : "";
    msg += (state.sellstate === "1") ? "to sell ETH@ => limit " : "";

    return msg;

  }

  var status_msg = getCurStatus();
  const status_msg = "----"
*/

    

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
        <h4>last trade</h4>
        <h4>type</h4>
        <h4>user polling</h4>
        <AlgoStatus state = {state}/>
      </div>
      
      <div className={styles.header}><h1>Event Feed</h1></div>
      <i>last 5 events</i>
      <i>*events are generated dynamically</i>
      <div className={styles.eventFeed}>
        <h4>cause</h4>
        <h4>action</h4>
        <h4>decision</h4>
        <h4>time</h4>
        <EventFeed event = {events} />
      </div>


      <div className={styles.header}><h1>Trade Feed</h1></div>
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




