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



          The development framework is pretty flexible so it can be pointed to a variety of crypto data feeds.<br></br> 


          crypto trading fee = VIP market maker price + pay with exchange coin  <br></br><br></br> 


          There are some user facing features planned for this site. Eventually users will be able to influence decisions made by the high-frequency trading algorithm.<br></br><br></br>

          if you would like to get in touch about this project please find my contact information at the github link below. <br></br><br></br>



          new stuff coming:
          <br></br>24/7 uptime
          <br></br>multi currency trading
          <br></br>more historical data + live analytics
          <br></br>improved trading strategy
          <br></br><br></br>
          i know about tether. but trading stocks costs too much.


        </p>

        <div></div>
        <h1>contact </h1>
  
        <a href="https://github.com/mikhmha" style="color: #cc0000">github</a>

        </div>
    )
  }