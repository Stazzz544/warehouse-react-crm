import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { modalWithChoiseState } from "../../models/modalWithChoise";


interface ModalWithChoiseAction{
	modalWithChoiseMessage: string
	modalWithChoiseButtonLeftText: string
	modalWithChoiseButtonRightText: string
}

const initialState: modalWithChoiseState = {
	modalWithChoiseErrorText: false,
	modalWithChoiseSuccessText: false,
	modalWithChoiseButtonLeftText: '',
	modalWithChoiseButtonRightText: '',
}

export const showModalWithChoiseSlice = createSlice({
	name: 'showInformModalSlice',
	initialState,
	reducers: {
		showErrorModalWithChoise(state, action: PayloadAction<ModalWithChoiseAction>) {
			state.modalWithChoiseErrorText = action.payload.modalWithChoiseMessage
			state.modalWithChoiseButtonLeftText = action.payload.modalWithChoiseButtonLeftText
			state.modalWithChoiseButtonRightText = action.payload.modalWithChoiseButtonRightText
		},
		showSuccessModalWithChoise(state, action: PayloadAction<ModalWithChoiseAction>) {
			state.modalWithChoiseSuccessText = action.payload.modalWithChoiseMessage
			state.modalWithChoiseButtonLeftText = action.payload.modalWithChoiseButtonLeftText
			state.modalWithChoiseButtonRightText = action.payload.modalWithChoiseButtonRightText
		},
		closeModalWithChoise(state) {
			state.modalWithChoiseSuccessText = false
			state.modalWithChoiseErrorText = false
			state.modalWithChoiseButtonLeftText = ''
			state.modalWithChoiseButtonRightText = ''
		}
	}
})


export default showModalWithChoiseSlice.reducer;

export const {
	showErrorModalWithChoise,
	showSuccessModalWithChoise,
	closeModalWithChoise,
} = showModalWithChoiseSlice.actions