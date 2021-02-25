import { Fragment} from 'react';
export default function  AlgoStatus({ state, status_msg }) {
    return (
        <Fragment>
        <div>{state.buylim}</div> <div>{state.sellim}</div> <div>waiting {status_msg} </div>
      </Fragment>

    );
  }