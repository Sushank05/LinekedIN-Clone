import firebase from "firebase";
// const firebase = require('firebase');
// const firebaseConfig = {
//     apiKey: "AIzaSyDahgiuWpyv_QR-EfLKuCVC2_kxAddrwNM",
//     authDomain: "linkedin-clone-1af21.firebaseapp.com",
//     projectId: "linkedin-clone-1af21",
//     storageBucket: "linkedin-clone-1af21.appspot.com",
//     messagingSenderId: "253970617342",
//     appId: "1:253970617342:web:3ea9d4ba4139d7a8d426af"
//   };
const firebaseConfig = {
  apiKey: "AIzaSyDq_XpeKHDz265pLbieUAEATzA1Oe_a7Mo",
  authDomain: "linkedin-clone-a1ef8.firebaseapp.com",
  projectId: "linkedin-clone-a1ef8",
  storageBucket: "linkedin-clone-a1ef8.appspot.com",
  messagingSenderId: "634752266074",
  appId: "1:634752266074:web:167bf994e14431d2124d63"
};

  const firebaseApp =  firebase.initializeApp(firebaseConfig);
  //Database
  const db = firebaseApp.firestore();
// authentication
const auth= firebase.auth();
  export{ db ,auth} 