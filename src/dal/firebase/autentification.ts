import { ActionCreatorWithPayload, PayloadAction } from "@reduxjs/toolkit";
import { browserSessionPersistence, createUserWithEmailAndPassword, onAuthStateChanged, setPersistence, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { AppDispatch } from "../../store/store";
import { auth } from "./firebaseConfing";


export const createNewAccount = (email: string, password: string, login: string) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in 
			const user = userCredential.user;
			console.log('userWasCreated:', user.displayName )
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

export const signInFirebase = (
	email: string, 
	password: string, 
	) => {
		setPersistence(auth, browserSessionPersistence)
		.then(() => {
			return signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
		});
}


export const autoLoginization = (
	dispatch: AppDispatch,
	action: ActionCreatorWithPayload<string | null>) => {
	onAuthStateChanged(auth, (user) => {
		if (user) {
			dispatch(action(user.displayName))
			const uid = user.uid;
			console.log('autologin: ', user.displayName)
		} else {
			dispatch(action(null))
		}
	});
}

export const logoutFirebase = (dispatch: AppDispatch, action: any) => {
	signOut(auth).then(() => {
		dispatch(action())
	}).catch((error) => {
	// An error happened.
	});
}
