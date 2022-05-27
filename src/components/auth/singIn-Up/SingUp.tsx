import { createNewAccount } from '../../../dal/firebase/autentification'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import {
	clearAllFields,
	setEmailInputValue,
	setPasswordInputValue,
	setUserLoginInputValue,
} from '../../../store/reducers/AutentificationSlice'
import { showSuccessModalWithChoise } from '../../../store/reducers/ModalWithChoiseSlice'
import AuthBtn from '../../UI/auth/btn/AuthBtn'
import AuthInput from '../../UI/auth/input/AuthInput'
import AuthTitle from '../../UI/auth/title/AuthTitle'
import './styles/SingIn-Up.scss'

const SignUp = () => {
	const dispatch = useAppDispatch()

	const {
		userLoginInputValue,
		userPasswordInputValue,
		userEmailInputValue,
	} = useAppSelector(state => state.AutentificationReducer)
	

	const modalWithChoiseActiveFuncSuccess = () => {
		const text:string = 'Ваша учётная запись зарегистрирована! Желаете войти в систему?'
		
		showSuccessModalWithChoise({
			modalWithChoiseMessage: text,
			modalWithChoiseButtonLeftText: 'да',
			modalWithChoiseButtonRightText: 'нет',
		 })
	}

	const modalWithChoiseActiveFuncError = () => {
			// функция обработки ошибки при регистрации
	}

	const createNewAccountFuncWrapper = () => {
		createNewAccount(
			userEmailInputValue,
			userPasswordInputValue,
			userLoginInputValue,
			clearAllFields,
			dispatch,
			modalWithChoiseActiveFuncSuccess,
			modalWithChoiseActiveFuncError,
		)
	}

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
					btnFunc={createNewAccountFuncWrapper}
					btnText={'Зарегистироваться'} 
					btnColor={'#234687'}
					/>
				</div>

			</div>

		</div>
	)
}

export default SignUp