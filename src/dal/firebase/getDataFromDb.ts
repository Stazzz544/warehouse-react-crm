import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { child, get, getDatabase, ref, onValue } from "firebase/database";
import { MaterialTypes } from "../../models/ICreateNewProductSlice";
import { AppDispatch } from "../../store/store";
import { db, dbRef } from "./firebaseConfing";


export const getProductTypes = async (

	dispatch: AppDispatch,
	actionSuccess: ActionCreatorWithPayload<MaterialTypes[]>,
	actionError: ActionCreatorWithPayload<string>,

) => {
	await get(child(dbRef, '/productCommon/productTypes'))
		.then((snapshot) => {
			if (snapshot.exists()) {
				dispatch(actionSuccess(snapshot.val()))
			} else {
				dispatch(actionError("No data available"))
				console.log("No data available");
			}
		}).catch((error) => {
			console.error(error);
		});
}



export const fetchProducts = async (
	dispatch: AppDispatch,
	actionSuccess: ActionCreatorWithPayload<MaterialTypes[]>,
	actionError: ActionCreatorWithPayload<string>,

) => {
	await get(child(dbRef, '/productCommon/products'))
		.then((snapshot) => {
			if (snapshot.exists()) {
				dispatch(actionSuccess(snapshot.val()))
			} else {
				dispatch(actionError("No data available"))
				console.log("No data available");
			}
		}).catch((error) => {
			console.error(error);
		});
}




