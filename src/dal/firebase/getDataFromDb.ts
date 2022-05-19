import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { child, get } from "firebase/database";
import { MaterialTypes } from "../../models/IcreateNewProductSlice";
import { AppDispatch } from "../../store/store";
import { dbRef } from "./firebaseConfing";


export const getProductTypes = async (

	dispatch: AppDispatch,
	actionSuccess: ActionCreatorWithPayload<MaterialTypes[]>,
	actionError: ActionCreatorWithPayload<string>,

	) => { 
		await get(child(dbRef, '/productCommon/product'))
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
