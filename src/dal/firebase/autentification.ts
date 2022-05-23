import { ActionCreatorWithPayload, PayloadAction } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AppDispatch } from "../../store/store";
import { auth } from "./firebaseConfing";


export const createNewAccount = (email: string, password: string) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in 
			const user = userCredential.user;
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
		});
}


export const  getCurretnUser = (
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
	  dispatch(action(email))
	} 
	console.log('current user: ', user)
	dispatch(action(null))
	return user
}


