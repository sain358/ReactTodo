import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBdMf1RUUZ-MtZZTyrhVyjl6SRbKXIHUzQ",
    authDomain: "todo358-cf7ef.firebaseapp.com",
    databaseURL: "https://todo358-cf7ef.firebaseio.com",
    projectId: "todo358-cf7ef",
    storageBucket: "todo358-cf7ef.appspot.com",
    messagingSenderId: "527215036649",
    appId: "1:527215036649:web:ffd116bbe9b9257ebd4878",
    measurementId: "G-VMPFV822DE"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const firebaseRef = firebase.database().ref();
export default firebase;