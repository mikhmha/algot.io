import { Fragment} from 'react';
export default function  AlgoStatus({ state }) {
    return (
        <Fragment>
        <div>{state.buylim}</div> <div>{state.sellim}</div> <div>{new Date(state.updatedAt.seconds * 1000).toLocaleString("en-US")} </div>  <div> testing @ twitch </div>
      </Fragment>

    );
  }