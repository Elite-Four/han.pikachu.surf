import firebase from 'firebase'
const app = firebase.initializeApp({
  apiKey: "AIzaSyCh9xtlktB1SAIAsCPZOK_WlLsRbGzTR8Y",
  authDomain: "hankana-a4c27.firebaseapp.com",
  databaseURL: "https://hankana-a4c27.firebaseio.com",
  projectId: "hankana-a4c27",
  storageBucket: "hankana-a4c27.appspot.com",
  messagingSenderId: "1014280140204"
})

export default app
export const db = app.database()