import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import {
	browserLocalPersistence,
	browserSessionPersistence,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	setPersistence,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from "firebase/auth";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { AppDispatch } from "../../store/store";
import { auth } from "./firebaseConfing";


export const createNewAccount = (
	email: string,
	password: string,
	rememberMe = false,
	login: string,
	actionClearAllFields: any,
	dispatch: AppDispatch,
) => {
	createUserWithEmailAndPassword(auth, email, password, )
		.then((userCredential) => { // Signed in 	
			const user = userCredential.user;
			console.log('userWasCreated:', user.displayName)	
		})
		.then(() => {//изменение имени юзера с дефолтного на введёное
			changeUserDisplayName(login)
			logoutFirebase(dispatch, actionClearAllFields)
		})
		.then(()=>{
			
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
	rememberMe = false,
) => {
	if (rememberMe) {
		//enter with remember me
		setPersistence(auth, browserLocalPersistence)
			.then(() => {
				singIn(email, password)
				console.log('user remembered')
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	} else {

		setPersistence(auth, browserSessionPersistence)
			.then(() => {
				singIn(email, password)
				console.log('user not remembered')
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	}
}

const singIn = async (
	email: string,
	password: string,
) => {
	return await signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {

		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
		});
}

export const autoLoginization = (
	dispatch: AppDispatch,
	action: ActionCreatorWithPayload<string | null>
) => {
	onAuthStateChanged(auth, (user) => {
		if (user) {
			dispatch(action(user.displayName))
			const uid = user.uid;
			console.log('autologin: ', user.displayName)
		} else {
			dispatch(action(null))
			console.log('no user')
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
