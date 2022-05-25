import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AutentificationState } from "../../models/IAutentification"


const initialState: AutentificationState = {
	currentUser: null,
	error: '',
	isLoading: false,
	userLoginInputValue: '',
	userPasswordInputValue: '',
	userEmailInputValue: '',
}

const AutentificationSlise = createSlice({
	name: 'autentificationSlise',
	initialState,
	reducers: {
		fetchCurrentUser(state, action: PayloadAction<string | null>) {
			state.currentUser = action.payload
			state.error = ''
		},
		setUserLoginInputValue(state, action: PayloadAction<string>) {
			state.userLoginInputValue = action.payload
		},
		setPasswordInputValue(state, action: PayloadAction<string>) {
			state.userPasswordInputValue = action.payload
		},
		setEmailInputValue(state, action: PayloadAction<string>) {
			state.userEmailInputValue = action.payload
		},
		clearAllFields(state) {
			state.userLoginInputValue = ''
			state.userPasswordInputValue = ''
			state.userEmailInputValue = ''
		}
	}
})

export default AutentificationSlise.reducer

export const {
	fetchCurrentUser,
	setUserLoginInputValue,
	setPasswordInputValue,
	setEmailInputValue,
	clearAllFields,
} = AutentificationSlise.actions