import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Header from './components/header/Header';
import Main from "./components/main/Main";
import ModalInform from "./components/UI/modals/ModalInform";
import { autoLoginization } from "./dal/firebase/autentification";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchCurrentUser } from "./store/reducers/autentificationSlice";
import './styles/App.scss';

function App() {
	const dispatch = useAppDispatch()
	const {currentUser} = useAppSelector(state => state.AutentificationReducer)
	const {errorModalText, successModalText, buttonModalText} = useAppSelector(state => state.showInformModalReducer)

	useEffect(()=>{
		autoLoginization(dispatch, fetchCurrentUser)
	}, [])

	
	return (
		currentUser === null ? 
		<Router>
			<div className="app auth-active">
				<Auth/>
			</div>
		</Router>
	:
		<Router>
			<div className="app">
				<Header/>
				<Main/>
				{ errorModalText ? <ModalInform informText={errorModalText} color={'red'} buttonModalText={buttonModalText}/> : false }
				{ successModalText ? <ModalInform informText={successModalText} color={'green'} buttonModalText={buttonModalText}/> : false }
			</div>
		</Router>
	);
}

export default App;



