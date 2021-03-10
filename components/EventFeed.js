import { Fragment} from 'react';

export default function EventFeed({ event }) {
    return event ? event.map((event) => <PostEvent event={event} />) : null;
  }
  
function PostEvent({ event }) {

    return (
      <Fragment>
        <div style ={{color: 'brown'}}>inactivity</div> 
        <div>set cur bid/ask to market </div> 
        {(() => {
              switch (event.status) 
              {
                case '0':
                  return  <div style ={{color: "red"}}>  {"reject"} </div>;
                case '1':
                  return  <div style ={{color: "green"}}>  {"execute"} </div>;
                default:
                  return null;
               }
        })()}
        <div>{new Date(event.processedAt.seconds * 1000).toLocaleString("en-US")} </div> 
      </Fragment>
  
 

    );
  }

