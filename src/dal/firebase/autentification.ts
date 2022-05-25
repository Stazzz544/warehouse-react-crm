import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { browserSessionPersistence, createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { AppDispatch } from "../../store/store";
import { auth } from "./firebaseConfing";


export const createNewAccount = (email: string, password: string, login: string) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in 
			const user = userCredential.user;
			console.log('userWasCreated')
		})
		//изменение имени юзера с дефолтного на введёное
		.then(() => {
			changeUserDisplayName(login)
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
		});
}

const changeUserDisplayName = (login: string) => {
	const user: any = auth.currentUser;
	updateProfile(user, {
		displayName: login
	}).then(() => {
		console.log('name ' + login + ' added to user')
	}).catch((error) => {
		// An error occurred
		// ...
	});
}

export const userAutentification = (email: string, password: string) => {
	setPersistence(auth, browserSessionPersistence)
		.then(() => {
			return signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					// Signed in 
					const user = userCredential.user;

					console.log('пользователь авторизирован: ', user.displayName)
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
				})
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
		});
}


export const getCurretnUser = (
	dispatch: AppDispatch,
	action: ActionCreatorWithPayload<string | null>) => {
	const user = auth.currentUser;
	if (user !== null) {
		// The user object has basic properties such as display name, email, etc.
		const displayName = user.displayName;
		const email = user.email;
		const photoURL = user.photoURL;
		const emailVerified = user.emailVerified;

		// The user's ID, unique to the Firebase project. Do NOT use
		// this value to authenticate with your backend server, if
		// you have one. Use User.getToken() instead.
		const uid = user.uid;
		dispatch(action(displayName))
	}
	console.log('current user: ', user)
	dispatch(action(null))
	return user
}


