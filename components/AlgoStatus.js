import { Fragment} from 'react';
export default function  AlgoStatus({ state, status_msg }) {
    return (
        <Fragment>
        <div>{state.buylim}</div> <div>{state.sellim}</div> <div>{status_msg} </div> <div> VWAP </div> <div> testing @ twitch </div>
      </Fragment>

    );
  }