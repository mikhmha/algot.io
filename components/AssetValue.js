
import { Fragment} from 'react';
export default function  AssetValue({ currency, value, sod }) {
    return (
        <Fragment>
        <div>{currency}</div> <div>{value}</div> <div>{sod}</div>
      </Fragment>

    );
  }