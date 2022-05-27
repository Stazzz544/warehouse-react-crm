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
import { InformModalAction } from "../../store/reducers/InformModalSlice";
import { AppDispatch } from "../../store/store";
import { auth } from "./firebaseConfing";


export const createNewAccount = (
	email: string,
	password: string, 
	login: string,
	actionClearAllFields: any,
	dispatch: AppDispatch,
	modalWithChoiseActiveFuncSuccess: any,
	modalWithChoiseActiveFuncError: any,
	showErrorInformModal: ActionCreatorWithPayload<InformModalAction>,
	isLoaderActive: ActionCreatorWithPayload<boolean>,
) => {
	dispatch(isLoaderActive(true))
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
			dispatch(isLoaderActive(false))
			modalWithChoiseActiveFuncSuccess()
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorMessage)
			dispatch(isLoaderActive(false))
			dispatch(showErrorInformModal({informModalmessage: errorMessage, informModalButtonText: 'понятно'}))
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
	modalSuccessFunc: ActionCreatorWithPayload<InformModalAction, string>,
	modalErrorFunc: ActionCreatorWithPayload<InformModalAction, string>,
	isLoaderActive: ActionCreatorWithPayload<boolean>,
	dispatch: AppDispatch
) => {

	dispatch(isLoaderActive(true))
	if (rememberMe) {
		//enter with remember me
		setPersistence(auth, browserLocalPersistence)
			.then(() => {
				singIn(email, password, modalSuccessFunc, modalErrorFunc, isLoaderActive, dispatch)
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				modalErrorFunc(errorMessage)
				dispatch(isLoaderActive(false))
			});

	} else {

		setPersistence(auth, browserSessionPersistence)
			.then(() => {
				singIn(email, password, modalSuccessFunc, modalErrorFunc, isLoaderActive, dispatch)
				console.log('user not remembered')
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				
				modalErrorFunc(errorMessage)
				dispatch(isLoaderActive(false))
			});
	}
}

const singIn = async (
	email: string,
	password: string,
	modalSuccessFunc: ActionCreatorWithPayload<InformModalAction, string>,
	modalErrorFunc: ActionCreatorWithPayload<InformModalAction, string>,
	isLoaderActive: ActionCreatorWithPayload<boolean>,
	dispatch: AppDispatch

) => {
	return await signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			console.log(userCredential, ' <--- user remembered')
			dispatch(isLoaderActive(false))
		})
		.catch((error) => {
			console.log('errorrrrrr')
			const errorCode = error.code;
			const errorMessage = error.message
			console.log('errorrrrrr',errorCode,  errorMessage, error)
			dispatch(modalErrorFunc({informModalmessage: errorMessage, informModalButtonText:'Понятно'}))
			dispatch(isLoaderActive(false))
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
