import { Fragment} from 'react';
export default function  AlgoStatus({ state }) {
    return (
        <Fragment>
        <span style = {{color : state.expired === true ? 'red': 'green'}}>{state.buylim}</span> 
        <span style = {{color: 'green'}}>{state.sellim}</span> 
        <span>{new Date(state.updatedAt.seconds * 1000).toLocaleString("en-US")} </span>  
        <span> testing @ twitch </span>
      </Fragment>

    );
  }