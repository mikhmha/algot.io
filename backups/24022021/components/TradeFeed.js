//import Link from 'next/link';

import { Fragment} from 'react';

export default function TradeFeed({ trade }) {
    return trade ? trade.map((trade) => <PostTrade trade={trade} />) : null;
  }
  
function PostTrade({ trade }) {

    return (
      <Fragment>
        <div style ={{color: trade.type === 'bid' ? 'red' : 'green'}}>{trade.type}</div> <div>{trade.price}</div> <div>{trade.quantity}</div> <div>{trade.total}</div> <div>{trade.fillTime.seconds}</div>
      </Fragment>
  
 

    );
  }

