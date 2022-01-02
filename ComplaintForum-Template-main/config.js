import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyB_m7YjSFcyp0ObxuDC5mGIL8DniYaHnTA",
  authDomain: "complaint-forum-5ea91.firebaseapp.com",
  projectId: "complaint-forum-5ea91",
  storageBucket: "complaint-forum-5ea91.appspot.com",
  messagingSenderId: "1050929766311",
  appId: "1:1050929766311:web:c0c24199d8156f71c72082"
};

  firebase.initializeApp(firebaseConfig);

  const app = initializeApp(firebaseConfig)

  export default firebase.firestore()

