import { Fragment} from 'react';

export default function EventFeed({ event }) {
    return event ? event.map((event) => <PostEvent event={event} />) : null;
  }
  
function PostEvent({ event }) {

    return (
      <Fragment>
        <div style ={{color: 'brown'}}>inactivity</div> <div>set cur bid/ask to market </div> <div style ={{color: event.status === '1' ? 'green' : 'red'}}>execute</div> <div>{new Date(event.processedAt.seconds * 1000).toLocaleString("en-US")} </div> 
      </Fragment>
  
 

    );
  }

