import styles from '../styles/Home.module.css'
import { firestore } from '../lib/firebase';
import {  useState } from 'react'






export default function UserPoll({ question, expiry }) {
    const [value, setValue] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const addPollData = val => {
        firestore.collection("poll").doc().set({
            value: val
        })
    }

    const handleChange = event => {
        setValue(event.target.value);
      };

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);
        addPollData(value)
        setTimeout(() => {
            setSubmitting(false);
          }, 2000);
      };


  
    return (
      <div className={styles.card}>
          <h3  style={{ margin:"0em" }}>🚨 new user poll 🚨</h3>
          {submitting && <div> Submitting .. </div>}
            <form onSubmit ={handleSubmit}>
                <fieldset>
                    <label style={{ padding:"1em" }}>suggest a new sell limit</label>
                    <input style={{ width:"50%" }} id="poll-question" onChange={handleChange}></input>
                </fieldset>
                <button className={styles.btn} onClick={handleSubmit}>Submit</button>
            </form>
            <p>starts @ 02/25/2020 11:00pm MST</p>
            <p>expires: ???</p>
      </div>
    );
  }