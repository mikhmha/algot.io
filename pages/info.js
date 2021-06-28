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
          <br></br><br></br>
          
          crypto trading fee = VIP market maker price + pay with exchange coin  <br></br><br></br> 



  
          There are some user facing features planned for this site. Eventually users will be able to influence decisions made by the high-frequency trading algorithm directly and indirectly. <br></br><br></br>

          If you are interested in this project, please find my contact info at the github link below. <br></br><br></br>



          new stuff coming:
          <br></br>24/7 uptime
          <br></br>multi currency trading
          <br></br>more historical data + live analytics
          <br></br>improved trading strategy
          <br></br><br></br>



        </p>

        <div></div>
        <h1>contact </h1>
  
        <a href="https://github.com/mikhmha">github</a>

        </div>
    )
  }