import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCEvP6byPqwVvBIw89R3SG1Zv68jHuuSJs",
  authDomain: "catch-of-the-day-hafeez-syed-7.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-hafeez-syed-7.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
