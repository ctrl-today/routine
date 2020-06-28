
export class FireService {
	constructor() {
		this.fb = firebase.app();
		this.firestore = firebase.firestore();
	}

	getRoutines() {
		let routines = this.firestore.collection('routines').doc('myRoutine');

		return routines.get().then(doc => {
			let data = doc.data();
			console.log(data);
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
