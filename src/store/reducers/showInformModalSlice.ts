import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { showInformModalState } from "../../models/IShowInformModal";

interface InformModalAction{
	messageModal: string
	buttonModalText: string
}

const initialState: showInformModalState = {
	errorModalText: false,
	successModalText: false,
	buttonModalText: '',
}

export const showInformModalSlice = createSlice({
	name: 'showInformModalSlice',
	initialState,
	reducers: {
		showErrorModal(state, action: PayloadAction<InformModalAction>) {
			state.errorModalText = action.payload.messageModal
			state.buttonModalText = action.payload.buttonModalText
		},
		showSuccessModal(state, action: PayloadAction<InformModalAction>) {
			state.successModalText = action.payload.messageModal
			state.buttonModalText = action.payload.buttonModalText
		},
		closeInformModal(state) {
			state.successModalText = false
			state.errorModalText = false
			state.buttonModalText = ''
		}
	}
})


export default showInformModalSlice.reducer;

export const {
	showErrorModal,
	showSuccessModal,
	closeInformModal,
} = showInformModalSlice.actions