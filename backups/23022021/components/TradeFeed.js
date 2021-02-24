//import Link from 'next/link';
import { fromMillis } from '../lib/firebase';

export default function TradeFeed({ trade }) {
    return trade ? trade.map((trade) => <PostTrade trade={trade} />) : null;
  }
  
  function PostTrade({ trade }) {
    // Naive method to calc word count and read time

    return (
      <div className="card">  
          <h2>
            <a> type: {trade.type} price: {trade.price} quantity: {trade.quantity} total: {trade.total} fill time: {trade.fillTime.seconds} </a>
          </h2>
      </div>
    );
  }