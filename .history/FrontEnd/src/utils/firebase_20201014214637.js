const firebase = require('firebase')
const env = require('dotenv').config()
 var firebaseConfig = {
    apiKey: "AIzaSyBiJLCn8lm1oRK1x09fbAE1QCXGaas7A2Y",
    authDomain: "streamline-4ea7b.firebaseapp.com",
    databaseURL: "https://streamline-4ea7b.firebaseio.com",
    projectId: "streamline-4ea7b",
    storageBucket: "streamline-4ea7b.appspot.com",
    messagingSenderId: "1046799424662",
    appId: "1:1046799424662:web:34407ca2ead51a2d9ab6b7",
    measurementId: "G-FXHT8NW8LE"
};
  
firebase.initializeApp(firebaseConfig)
console.log(env)