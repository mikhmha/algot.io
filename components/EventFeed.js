import { Fragment} from 'react';

export default function EventFeed({ event }) {
    return event ? event.map((event) => <PostEvent event={event} />) : null;
  }
  
function PostEvent({ event }) {

    return (
      <Fragment>
        <span style ={{color: 'brown'}}>rt-analysis</span> 
        <span style = {{color : event.newbid === event.curbid ? 'green': 'red'}}>{event.oldbid} → {event.newbid} </span>
        <span style = {{color : event.newask === event.curask ? 'green': 'red'}}>{event.oldask} → {event.newask} </span>
        <span>{new Date(event.processedAt.seconds * 1000).toLocaleString("en-US")} </span> 
      </Fragment>
  
 

    );
  }

