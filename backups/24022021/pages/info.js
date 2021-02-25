import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Info() {
    return (
        <div className={styles.home}>
        <Head>
          <title>algot.io - Info</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <p>
          This website provides live visualization of a high-frequency-trading algorithim I wrote in C++. 
          The algorithim runs on my local machine while also logging transactions asynchronously to the cloud. 
        </p>
        <p>
           Currently this website is testing, so you may see data feeds being wiped occasionally. 
        </p>
        <p>
          The assets currently being traded are not real but they are traded on
          real real-time data. Currently only cryptocurrencies are "traded" due to the high cost of obtaining
          real-time stock data.
        </p>
        <p>
          Exchange fees are currently not factored into the descion to make trades. So displayed results not accurate. 
        </p>

        <p>
          There are some user facing features planned for this site. Eventually users will be able to influence descions made by the high-frequency trading algorithim directly and indirectly.
        </p>
        <div></div>


        </div>
    )
  }