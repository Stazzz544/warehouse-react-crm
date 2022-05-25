import { createNewAccount } from '../../../dal/firebase/autentification'
import { useAppSelector } from '../../../hooks/redux'
import {
	setEmailInputValue,
	setPasswordInputValue,
	setUserLoginInputValue,
} from '../../../store/reducers/autentificationSlice'
import AuthBtn from '../../UI/auth/btn/AuthBtn'
import AuthInput from '../../UI/auth/input/AuthInput'
import AuthTitle from '../../UI/auth/title/AuthTitle'
import './styles/SingUp.scss'

const SignUp = () => {

	const {
		userLoginInputValue,
		userPasswordInputValue,
		userEmailInputValue
	} = useAppSelector(state => state.AutentificationReducer)

	return (
		<div className='sing'>
			<AuthTitle title='Регистрация' />
			<div className="sing__all-inp-and-btn-flex-wrapper">
				<div className='sing__input-flex-wrapper'>

					<div className="sing__input-wrapper">
						<AuthInput
							discriptionText='Логин'
							inputValue={userLoginInputValue}
							inputAction={setUserLoginInputValue} />
					</div>

					<div className="sing__input-wrapper">
						<AuthInput
							discriptionText='E-mail'
							inputValue={userEmailInputValue}
							inputAction={setEmailInputValue} />
					</div>

					<div className="sing__input-wrapper">
						<AuthInput
							discriptionText='Пароль'
							inputValue={userPasswordInputValue}
							inputAction={setPasswordInputValue}
							type={'password'} />
					</div>

				</div>

				<div className="sing__btn-wrapper">
					<AuthBtn 
					userLogin={userLoginInputValue}
					userEmail={userEmailInputValue}
					userPassword={userPasswordInputValue}
					btnFunc={createNewAccount}
					btnText={'Зарегистироваться'} 
					btnColor={'#234687'} />
				</div>

			</div>

		</div>
	)
}

export default SignUp