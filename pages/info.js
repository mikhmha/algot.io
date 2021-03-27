import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Info() {
    return (
        <div className={styles.main}>
        <Head>
          <title>algot.io - Info</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <p>
          This website provides live visualization of a high-frequency-trading algorithm I wrote in C++. <br></br>
          The algorithm runs on my local machine while also logging transactions asynchronously to the cloud. <br></br>
          This website is currently testing so you may see data feeds being wiped occasionally. <br></br><br></br>

          In order to meet the low latency requirements of high-frequency trading, the C++ trading client utilizes
          several performance oriented C++ libraries and optimization tricks to acheive ultra low latency for networking, data processing, and IPC. <br></br>
          <br></br><br></br>
          
          Only cryptocurrencies are "traded" right now due to the high cost of obtaining real-time stock data. <br>
          </br>The development framework is pretty flexible so it can be pointed to a variety of crypto data feeds.<br></br> 
          If theres a cryptocurrency you would like to see traded send a suggestion! 
          Maybe we can try trading it for a few days.<br></br><br></br>



  
          There are some user facing features planned for this site. Eventually users will be able to influence decisions made by the high-frequency trading algorithm directly and indirectly. Currently this feature 
          is testing via twitch. <br></br><br></br>

          if you would like to get in touch about this project, reach out. I am always looking for feedback or help!
        </p>

        <div></div>
        <h1>contact </h1>
  
        <a href="https://github.com/mikhmha/algot.io">github</a>

        </div>
    )
  }