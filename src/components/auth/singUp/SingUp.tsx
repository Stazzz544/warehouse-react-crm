import AuthBtn from '../../UI/auth/btn/AuthBtn'
import AuthInput from '../../UI/auth/input/AuthInput'
import AuthTitle from '../../UI/auth/title/AuthTitle'
import './styles/SingUp.scss'

const SignUp = () => {
	return (
		<div className='sing'>
			<AuthTitle title='Регистрация'/>

			<div className="sing__input-wrapper">
				<AuthInput 
				disctipyionText='Логин' 
				action={''}/>
			</div>

			<div className="sing__input-wrapper">
				<AuthInput 
				disctipyionText='Пароль' action={''} 
				type={'password'}/>
			</div>

			<div className="sing__input-wrapper">
				<AuthInput 
				disctipyionText='E-mail' 
				action={''}/>
			</div>
			<div className="sing__btn-wrapper">
				<AuthBtn btnText={'Зарегистироваться'} btnColor={'#24DD3C'}/>
			</div>


		</div>
	)
}

export default SignUp