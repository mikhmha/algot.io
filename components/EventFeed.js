import { Fragment} from 'react';

export default function EventFeed({ event }) {
    return event ? event.map((event) => <PostEvent event={event} />) : null;
  }
  
function PostEvent({ event }) {

    return (
      <Fragment>
        <span style ={{color: 'brown'}}>rt-analysis</span> 
        <span>nb: {event.newbid} {"   "} na: {event.newask} </span>
        
        
        {(() => {
              switch (event.status) 
              {
                case '0':
                  return  <span style ={{color: "red"}}>  {"reject"} </span>;
                case '1':
                  return  <span style ={{color: "green"}}>  {"execute"} </span>;
                default:
                  return null;
               }
        })()}
        <span>{new Date(event.processedAt.seconds * 1000).toLocaleString("en-US")} </span> 
      </Fragment>
  
 

    );
  }

