import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyA3wN2QPMsoPNvQRHsTEDWWRxr0MLGfyXA",
    authDomain: "algot-c71b7.firebaseapp.com",
    projectId: "algot-c71b7",
    storageBucket: "algot-c71b7.appspot.com",
    messagingSenderId: "822898367804",
    appId: "1:822898367804:web:0f342e0122f7261d861239"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();
export const storage = firebase.storage();


export async function getLatestTrade(username) {
  const usersRef = firestore.collection('users');
  const query = usersRef.where('username', '==', username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}




export const fromMillis = firebase.firestore.Timestamp.fromMillis;
/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */

export function tradeToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    fillTime: data?.fillTime.toMillis() || 0
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    //createdAt: data?.createdAt.toMillis() || 0,
    //updatedAt: data?.updatedAt.toMillis() || 0,
  };
}