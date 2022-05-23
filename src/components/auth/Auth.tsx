import { useState } from "react"
import SingIn from "./singIn/SingIn"
import SingUp from "./singUp/SingUp"
import './styles/Auth.scss'
import background from '../../img/auth/bg.jpg'


const Auth = () => {
	const [isNewUser, setIsNewUser] = useState(false)

	return (
		<div className="auth">
			<div className="auth__wrapper">
				<div className="auth__left-side">
					<img className="auth__left-side-bg" src={background} alt="" />
				</div>

				<div className="auth__right-side">
					<div className="auth__form">
						{isNewUser ?
							<SingUp />
							:
							<SingIn />
						}
						<button
							onClick={() => setIsNewUser(false)}
							className="auth__signIn">Войти</button>

						<button
							onClick={() => setIsNewUser(true)}
							className="auth__signUp">Регистрация</button>

					</div>
				</div>



			</div>
		</div>

	)
}

export default Auth