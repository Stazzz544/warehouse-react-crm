import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Header from './components/header/Header';
import Main from "./components/main/Main";
import { autoLoginization } from "./dal/firebase/autentification";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchCurrentUser } from "./store/reducers/autentificationSlice";
import './styles/App.scss';

function App() {
	const dispatch = useAppDispatch()
	const {currentUser} = useAppSelector(state => state.AutentificationReducer)

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
			</div>
		</Router>
	);
}

export default App;



