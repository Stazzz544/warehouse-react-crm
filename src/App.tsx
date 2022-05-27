import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Header from './components/header/Header';
import Main from "./components/main/Main";
import ModalInform from "./components/UI/modals/modalInform/ModalInform";
import ModalWithChoise from "./components/UI/modals/modalWithChoise/ModalWithChoise";

import { autoLoginization } from "./dal/firebase/autentification";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchCurrentUser } from "./store/reducers/AutentificationSlice";
import './styles/App.scss';

function App() {
	const dispatch = useAppDispatch()
	const { currentUser } = useAppSelector(state => state.AutentificationReducer)
	const { informModalErrorText, informModalSuccessText, informModalButtonText } = useAppSelector(state => state.InformModalReducer)
	const { modalWithChoiseSuccessText, modalWithChoiseErrorText, } = useAppSelector(state => state.ModalWithChoiseReducer)

	useEffect(() => {
		autoLoginization(dispatch, fetchCurrentUser)
	}, [])


	return (
		currentUser === null ?
			<Router>
				<div className="app auth-active">
					<Auth />
					{modalWithChoiseErrorText ? <ModalWithChoise /> : false}
					{informModalErrorText ? <ModalInform informText={informModalErrorText} color={'red'} buttonModalText={informModalButtonText} /> : false}
				</div>
			</Router>
			:
			<Router>
				<div className="app">
					<Header />
					<Main />
					{informModalErrorText ? <ModalInform informText={informModalErrorText} color={'red'} buttonModalText={informModalButtonText} /> : false}
					{informModalSuccessText ? <ModalInform informText={informModalSuccessText} color={'green'} buttonModalText={informModalButtonText} /> : false}
				</div>
			</Router>
	);
}

export default App;



