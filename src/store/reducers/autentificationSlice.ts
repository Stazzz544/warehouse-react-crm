import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AutentificationState } from "../../models/IAutentification"


const initialState: AutentificationState = {
	currentUser: 'null',
	error: '',
	isLoading: false,

}

const AutentificationSlise = createSlice({
	name: 'autentificationSlise',
	initialState,
	reducers: {
		fetchCurrentUser(state, action: PayloadAction<string | null>) {
			state.currentUser = action.payload
			state.error = ''
		},
	}
})

export default AutentificationSlise.reducer

export const {
	fetchCurrentUser
} = AutentificationSlise.actions