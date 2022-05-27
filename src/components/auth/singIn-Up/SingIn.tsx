import { signInFirebase } from '../../../dal/firebase/autentification'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { setEmailInputValue, setPasswordInputValue, setRememberMe } from '../../../store/reducers/AutentificationSlice'
import { showErrorInformModal, showSuccessInformModal } from '../../../store/reducers/InformModalSlice'
import { isLoaderActive } from '../../../store/reducers/LoaderSpinnerSlice'
import AuthBtn from '../../UI/auth/btn/AuthBtn'
import AuthInput from '../../UI/auth/input/AuthInput'
import AuthTitle from '../../UI/auth/title/AuthTitle'
import CustomCheckbox from '../../UI/customCheckbox/CustomCheckbox'
import './styles/SingIn-Up.scss'

const SignIn = () => {
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
			showSuccessInformModal,
			showErrorInformModal,
			isLoaderActive,
			dispatch,
		)
	}
	

	return (
		<div className='sing'>
			<AuthTitle title='Авторизация' />

			<div className="sing__all-inp-and-btn-flex-wrapper">
				<div className='sing__input-flex-wrapper'>

					<div className="sing__input-wrapper">
						<AuthInput
							discriptionText='E-mail'
							inputValue={userEmailInputValue}
							inputAction={setEmailInputValue}/>
					</div>

					<div className="sing__input-wrapper">
						<AuthInput
							discriptionText='Пароль'
							inputValue={userPasswordInputValue}
							inputAction={setPasswordInputValue}
							type={'password'} />
					</div>

					<div className="sing__input-wrapper checkbox">
						<CustomCheckbox
							action={setRememberMe}
							checkStatus={rememberMe}
						/>
					</div>

				</div>


				<div className="sing__btn-wrapper">
					<AuthBtn 
						btnText={'Авторизироваться'}
						btnFunc={signInFirebaseFuncWrapper}
						btnColor={'#24DD3C'} />
				</div>

			</div>
		</div>
	)
}

export default SignIn