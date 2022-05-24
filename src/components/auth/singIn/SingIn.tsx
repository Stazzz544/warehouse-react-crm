import AuthBtn from '../../UI/auth/btn/AuthBtn'
import AuthInput from '../../UI/auth/input/AuthInput'
import AuthTitle from '../../UI/auth/title/AuthTitle'
import './styles/SingIn.scss'

const SignIn = () => {
	return (
		<div className='sing'>
			<AuthTitle title='Авторизация'/>

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
				<AuthBtn btnText={'Авторизироваться'} btnColor={'#234687'}/>
			</div>

		</div>
	)
}

export default SignIn