import TradeFeed from '../components/TradeFeed'
import AssetValue from '../components/AssetValue'
import AlgoStatus from '../components/AlgoStatus';
import UserPoll from '../components/UserPoll'
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

  var status_msg = getCurStatus();



    

  return (
    <div className={styles.container}>
      <Head>
        <title>algot.io - user driven HFT</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h3>hft client connection status</h3>
        <div style ={{color: 'green'}}> online </div>


      <div className={styles.header}><h1>Wallet</h1></div>
      <div className={styles.assetGrid}>
          <h3> asset </h3>
          <h3>current value </h3>
          <h3>start of day value </h3>
          <AssetValue currency = {"USDT"} value = {state.balance} sod = {"10000.0000"}/>
          <AssetValue currency = {"ETH"} value = {state.quantity} sod = {"0.0000"}/>
        </div>

      <div className={styles.header}><h1>Strategy</h1></div>
        <div className={styles.strategyGrid}>
          <h3> buy limit (USDT) </h3>
          <h3> sell limit (USDT) </h3>
          <h3> current status </h3>
          <h3> type </h3>
          <h3> user polling </h3>
          <AlgoStatus state = {state} status_msg = {status_msg}/>
        </div>



      <div className={styles.header}><h1>Strategy Poll (testing) </h1></div>
        <div> participate in a poll. results are used to influence the algorithm in real-time. </div>
          polls are generated automatically during periods of inactivity
           <UserPoll />

      <div className={styles.header}><h1>Analysis (testing)</h1></div>
          <div>  </div>
       



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




