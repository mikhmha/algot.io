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
          This website provides live visualization of a high-frequency-trading algorithm I wrote in C++. 
          The algorithm runs on my local machine while also logging transactions asynchronously to the cloud. 
        </p>
        <p>
           Currently this website is testing so you may see data feeds being wiped occasionally. 
        </p>
        <p>
          The assets being traded are simulated but they are traded on
          real real-time data. Currently only cryptocurrencies are "traded" due to the high cost of obtaining
          real-time stock data. The development framework is pretty flexible so it can be pointed to a variety of crypto data feeds. If theres a cryptocurrency you would like to see traded send a suggestion! 
          Maybe we can try trading it for a few days.
        </p>
        <p>
          Exchange fees are currently not factored into the decision to make trades. So displayed results not accurate. 
        </p>

        <p>
          There are some user facing features planned for this site. Eventually users will be able to influence decision made by the high-frequency trading algorithim directly and indirectly.
        </p>
        <div></div>
        <h1>contact </h1>
        <a href="https://github.com/mikhmha/algot.io">github</a>

        </div>
    )
  }