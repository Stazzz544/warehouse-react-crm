import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createNewProductSliceState, MaterialTypes } from "../../models/ICreateNewProduct";



const initialState: createNewProductSliceState = {
	materialTypes: [],
	isLoading: false,
	error: '',
	choisenTypeOfMaterial: '',
	nameOfNewProductInputValue: '',
}

export const createNewProductSlice = createSlice({
	name: 'createNewProductSlice',
	initialState,
	reducers: {
		fetchMaterialsFromDb(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload
			state.error = ''
		},
		fetchMaterialsFromDbSuccess(state, action: PayloadAction<MaterialTypes[]>) {
			state.materialTypes = action.payload
			state.isLoading = false
			state.error = ''
		},
		fetchMaterialsFromDbError(state, action: PayloadAction<string>) {
			state.isLoading = false
			state.error = action.payload
		},
		chooseTypeOfMaterial(state, action: PayloadAction<string>) {
			state.choisenTypeOfMaterial = action.payload
		},
		setNameOfNewProductInputValue(state, action: PayloadAction<string>) {
			state.nameOfNewProductInputValue = action.payload
		},
	}
})


export default createNewProductSlice.reducer;

export const {
	chooseTypeOfMaterial,
	fetchMaterialsFromDbSuccess, 
	fetchMaterialsFromDbError, 
	fetchMaterialsFromDb,
	setNameOfNewProductInputValue,
} = createNewProductSlice.actions