import { signInFirebase } from '../../../dal/firebase/autentification'
import { useAppSelector } from '../../../hooks/redux'
import { setEmailInputValue, setPasswordInputValue, setRememberMe } from '../../../store/reducers/autentificationSlice'
import AuthBtn from '../../UI/auth/btn/AuthBtn'
import AuthInput from '../../UI/auth/input/AuthInput'
import AuthTitle from '../../UI/auth/title/AuthTitle'
import CustomCheckbox from '../../UI/customCheckbox/CustomCheckbox'
import './styles/SingIn.scss'

const SignIn = () => {

	const {
		userPasswordInputValue,
		userEmailInputValue,
		rememberMe
	} = useAppSelector(state => state.AutentificationReducer)


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

					<div className="sing__input-wrapper">
						<CustomCheckbox
						action={setRememberMe}
						checked={rememberMe}
						/>
					</div>

				</div>


				<div className="sing__btn-wrapper">
					<AuthBtn 
						btnText={'Авторизироваться'}
						userEmail={userEmailInputValue}
						userPassword={userPasswordInputValue}
						btnFunc={signInFirebase}
						btnColor={'#24DD3C'} />
				</div>

			</div>
		</div>
	)
}

export default SignIn