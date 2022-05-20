import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MaterialTypes } from "../../models/ICreateNewProductSlice";
import { FetchProductsFromDbSliceState } from "../../models/IFetchProductsFromDbSlice";


const initialState: FetchProductsFromDbSliceState = {
	products: [],
	isLoading: false,
	error: '',
}

export const FetchProductsFromDbSlice = createSlice({
	name: 'fetchProductsFromDbSlice',
	initialState,
	reducers: {
		fetchProductsFromDb(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload
			state.error = ''
		},
		fetchProductsFromDbSuccess(state, action: PayloadAction<MaterialTypes[]>) {
			state.products = action.payload
			state.isLoading = false
			state.error = ''
		},
		fetchProductsFromDbError(state, action: PayloadAction<string>) {
			state.isLoading = false
			state.error = action.payload
		},
	}
})


export default FetchProductsFromDbSlice.reducer;

export const {
	fetchProductsFromDb,
	fetchProductsFromDbSuccess,
	fetchProductsFromDbError,
} = FetchProductsFromDbSlice.actions