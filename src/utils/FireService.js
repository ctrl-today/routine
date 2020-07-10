import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Routine firebase UNIQUE NON-SECRET CONFIG OBJECT 
// ( Do not adjust, you silly pickle )
const firebaseConfig = {
  apiKey: "AIzaSyAggBp8qB7ecmxNXYtmiWLrRjhJtT7E0YA",
  authDomain: "ctrl-routine.firebaseapp.com",
  databaseURL: "https://ctrl-routine.firebaseio.com",
  projectId: "ctrl-routine",
  storageBucket: "ctrl-routine.appspot.com",
  messagingSenderId: "872709776681",
  appId: "1:872709776681:web:3bb93335adf9c213e1c338",
  measurementId: "G-HGKXE516KP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export class FireService {
	constructor() {
		this.fb = firebase.app();
		this.firestore = firebase.firestore();
	}

	getRoutines() {
		let routines = this.firestore.collection('routines').doc('myRoutine');

		return routines.get().then(doc => {
			let data = doc.data();
			return data;
		});
	}

	updateRoutine(data) {
		let routine = this.firestore.collection('routines').doc('myRoutine');

		routine.update({steps: data});
	}

	googleLogin() {
		const provider = new firebase.auth.GoogleAuthProvider();

		firebase.auth().signInWithPopup(provider).then(result => {
			const user = result.user;
			document.write(`Hello ${user.displayName}`);
			console.log(user);
		}).cath(console.log())
	}
}
