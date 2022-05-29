import { createNewAccount } from '../../../dal/firebase/autentification'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import {
	clearAllFields,
	setEmailInputValue,
	setPasswordInputValue,
	setUserLoginInputValue,
	showModalAuthSuccess,
} from '../../../store/reducers/AutentificationSlice'
import { showErrorInformModal } from '../../../store/reducers/InformModalSlice'
import { isLoaderActive } from '../../../store/reducers/LoaderSpinnerSlice'
import { showErrorModalWithChoise, showSuccessModalWithChoise } from '../../../store/reducers/ModalWithChoiseSlice'
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


	const modalWithChoiseActiveFuncSuccess = (): void => {
		const text: string = 'Ваша учётная запись зарегистрирована! Желаете войти в систему?'

		showSuccessModalWithChoise({
			modalWithChoiseMessage: text,
			modalWithChoiseButtonLeftText: 'да',
			modalWithChoiseButtonRightText: 'нет',
		})
	}

	const modalWithChoiseActiveFuncError = () => {
		// функция обработки ошибки при регистрации
	}

	const validationForm = () => {
		const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

		if (userLoginInputValue.length < 2) {
			dispatch(showErrorInformModal({ informModalmessage: 'Минимальная длина логина 2 символа', informModalButtonText: 'понятно' }))
			return false
		} else if (!EMAIL_REGEXP.test(userEmailInputValue)) {
			dispatch(showErrorInformModal({ informModalmessage: 'Некорректно введён E-mail адресс. Формат адреса test@test.com(ru...)', informModalButtonText: 'понятно' }))
			return false
		} else if(userPasswordInputValue.length < 6) {
			dispatch(showErrorInformModal({ informModalmessage: 'Минимальная длина пароля 6 символов', informModalButtonText: 'понятно' }))
			return false
		}
		return true
	}
	

	const createNewAccountFuncWrapper = () => {

		if (!validationForm()) return false
		
		createNewAccount(
			userEmailInputValue,
			userPasswordInputValue,
			userLoginInputValue,
			clearAllFields,
			dispatch,
			showErrorInformModal,
			isLoaderActive,
			showModalAuthSuccess,
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