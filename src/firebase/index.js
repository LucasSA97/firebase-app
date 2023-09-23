// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getMessaging, getToken } from "firebase/messaging";
import { getFirestore } from "firebase/firestore";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsTdEXui4XVEvsID1CL-RZxr49-Hjv5J8",
  authDomain: "fir-shop-7d55b.firebaseapp.com",
  projectId: "fir-shop-7d55b",
  storageBucket: "fir-shop-7d55b.appspot.com",
  messagingSenderId: "713649552930",
  appId: "1:713649552930:web:937ab171029b5b697f547b",
};

const devFirebaseConfig = {
  apiKey: "AIzaSyAYYxD1n6IpeKRWBE42X3mX_EHYx5MSa_0",
  authDomain: "dev-firebase-shop.firebaseapp.com",
  projectId: "dev-firebase-shop",
  storageBucket: "dev-firebase-shop.appspot.com",
  messagingSenderId: "639669348215",
  appId: "1:639669348215:web:7370d1200af37c13c8a372"
}

let app 
if(process.env.NODE_ENV === 'production'){
  app = initializeApp(firebaseConfig);
} else {
  app = initializeApp(devFirebaseConfig)
};

export { app }

const vapidKeyProd = "Jr9fRoe3pzu10gnurQA9MLnX-3VZ-M0Ut_4SoiCH5_s";
const vapidKeyDev= "sGdZKqmbdiMOtR-epw_6UDD-jgegNok-TFCpKNyvuAs";

export const messaging = getMessaging(app);

getToken(messaging, { vapidKey: process.env.NODE_ENV === 'production' ? vapidKeyProd : vapidKeyDev })
  .then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      // console.log('currentToken', currentToken);
      sendTokenToServer(currentToken);
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });

const sendTokenToServer = token => {
  if (localStorage.getItem("tokenSentToServer")) return;
  //Implementar la logica de que en el servidor se almacene el token
    localStorage.setItem('tokenSentToServer', '1')
  }

  export const db = getFirestore()
  










