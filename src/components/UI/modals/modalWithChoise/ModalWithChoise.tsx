import { useAppSelector } from '../../../../hooks/redux'
import { setRememberMe } from '../../../../store/reducers/AutentificationSlice'
import CustomCheckbox from '../../customCheckbox/CustomCheckbox'
import './styles/ModalWithChoise.scss'

const ModalWithChoise = () => {

	const { rememberMe } = useAppSelector(state => state.AutentificationReducer)

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
					<button className='registrtion-info-modal__btn enter'>Войти</button>
					<button className='registrtion-info-modal__btn no-enter'>Не входить</button>
				</div>
			</div>
		</div>
	)
}

export default ModalWithChoise