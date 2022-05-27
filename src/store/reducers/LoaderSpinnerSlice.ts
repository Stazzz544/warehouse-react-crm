import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoaderState } from "../../models/ILoader";


const initialState: LoaderState = {
	loaderSpinnerActive: false
}

export const LoaderSpinnerSlice = createSlice({
	name: 'LoaderSpinner',
	initialState,
	reducers: {
		isLoaderActive(state, action: PayloadAction<boolean>) {
			state.loaderSpinnerActive = action.payload
		},
	}
})


export default LoaderSpinnerSlice.reducer;

export const {
	isLoaderActive,
} = LoaderSpinnerSlice.actions