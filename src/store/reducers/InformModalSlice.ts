import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { showInformModalState } from "../../models/IShowInformModal";

export interface InformModalAction{
	informModalmessage: string
	informModalButtonText: string
}

const initialState: showInformModalState = {
	informModalErrorText: false,
	informModalSuccessText: false,
	informModalButtonText: '',
}

export const informModalSlice = createSlice({
	name: 'informModal',
	initialState,
	reducers: {
		showErrorInformModal(state, action: PayloadAction<InformModalAction>) {
			state.informModalErrorText = action.payload.informModalmessage
			state.informModalButtonText = action.payload.informModalButtonText
		},
		showSuccessInformModal(state, action: PayloadAction<InformModalAction>) {
			state.informModalSuccessText = action.payload.informModalmessage
			state.informModalButtonText = action.payload.informModalButtonText
		},
		closeInformModal(state) {
			state.informModalSuccessText = false
			state.informModalErrorText = false
			state.informModalButtonText = ''
		}
	}
})


export default informModalSlice.reducer;

export const {
	showErrorInformModal,
	showSuccessInformModal,
	closeInformModal,
} = informModalSlice.actions