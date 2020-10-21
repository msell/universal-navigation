import "firebase/auth";
import "firebase/messaging";

import * as firebase from "firebase/app";
// import * as fbMessaging from "firebase/messaging";

// import * as firebase from 'firebase/app';
// import 'firebase/<PACKAGE>';
const config = {
  apiKey: "AIzaSyBexSfQx4imf4vMm15zTQi4UEsSc8Zktxw",
  authDomain: "universal-react-dev.firebaseapp.com",
  databaseURL: "https://universal-react-dev.firebaseio.com",
  projectId: "universal-react-dev",
  storageBucket: "universal-react-dev.appspot.com",
  messagingSenderId: "113757587457",
  appId: "1:113757587457:web:796facdb6234cef431d800",
  measurementId: "G-EM80FGGCSP",
};

firebase.initializeApp(config);
console.log("firebase initialized");
// export const db = firebase.database();
export const messaging = firebase.messaging();
