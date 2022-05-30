import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Header from './components/header/Header';
import Main from "./components/main/Main";
import LoaderSpinner from "./components/UI/loaderSpinner/LoaderSpinner";
import ModaAuthSuccess from "./components/UI/modals/modaAuthSuccess/ModalAuthSuccess";
import ModalInform from "./components/UI/modals/modalInform/ModalInform";
import { autoLoginization } from "./dal/firebase/autentification";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchCurrentUser } from "./store/reducers/AutentificationSlice";
import './styles/App.scss';

function App() {
	const dispatch = useAppDispatch()
	const { currentUser, visibleModalAuthSuccess } = useAppSelector(state => state.AutentificationReducer)
	const { informModalErrorText, informModalSuccessText, informModalButtonText } = useAppSelector(state => state.InformModalReducer)
	const { loaderSpinnerActive } = useAppSelector(state => state.LoaderSpinner)

	useEffect(() => {
		console.log('useEffect app', Date.now())
		autoLoginization(dispatch, fetchCurrentUser)
	}, [])


	return (
		<div className="app-wrapper">
			{loaderSpinnerActive ? <LoaderSpinner/> : false}

			{
				currentUser === null ?
					<Router>
						<div className="app auth-active">
							<Auth />
							{visibleModalAuthSuccess && <ModaAuthSuccess />}
							{informModalErrorText && <ModalInform informText={informModalErrorText} color={'red'} buttonModalText={informModalButtonText} />}
						</div>
					</Router>
					:
					<Router>
						<div className="app">
							<Header />
							<Main />
							{informModalErrorText && <ModalInform informText={informModalErrorText} color={'red'} buttonModalText={informModalButtonText}/>}
							{informModalSuccessText && <ModalInform informText={informModalSuccessText} color={'green'} buttonModalText={informModalButtonText} />}
						</div>
					</Router>
			}
		</div>
	);
}

export default App;



