import { autoLoginization, logoutFirebase, signInFirebase } from '../../../../dal/firebase/autentification'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { clearAllFields, fetchCurrentUser, setRememberMe, showModalAuthSuccess } from '../../../../store/reducers/AutentificationSlice'
import { showErrorInformModal, showSuccessInformModal } from '../../../../store/reducers/InformModalSlice'
import { isLoaderActive } from '../../../../store/reducers/LoaderSpinnerSlice'
import CustomCheckbox from '../../customCheckbox/CustomCheckbox'
import './styles/ModaAuthSuccess.scss'

const ModaAuthSuccess = () => {
	const dispatch = useAppDispatch()

	const {
		userPasswordInputValue,
		userEmailInputValue,
		rememberMe
	} = useAppSelector(state => state.AutentificationReducer)
	
	const signInFirebaseFuncWrapper = () => {
		signInFirebase(
			userEmailInputValue,
			userPasswordInputValue,
			rememberMe,
			showErrorInformModal,
			isLoaderActive,
			dispatch,
		) 
		autoLoginization(dispatch, fetchCurrentUser)
		dispatch(showModalAuthSuccess(false))

	}

	const closeModal = () => {
		dispatch(showModalAuthSuccess(false))
		logoutFirebase(dispatch, clearAllFields)
	}

	return (
		<div className="registrtion-info-modal">
			<div className="registrtion-info-modal__wrapper">
				<div className="registrtion-info-modal__wrapper-bg-symbol"></div>
				<p className="registrtion-info-modal__title">Поздравляем!</p>
				<p className="registrtion-info-modal__text">Регистрация прошла успешно и теперь Вы можете воспользоваться своей учётной записью для входа в приложение.</p>
				<CustomCheckbox
					action={setRememberMe}
					checkStatus={rememberMe}
				/>
				<div className="registrtion-info-modal__btns-wrapper">
					<button onClick={signInFirebaseFuncWrapper} className='registrtion-info-modal__btn enter'>Войти</button>
					<button onClick={closeModal} className='registrtion-info-modal__btn no-enter'>Не входить</button>
				</div>
			</div>
		</div>
	)
}

export default ModaAuthSuccess


