import { useEffect, useState } from "react"
import SignIn from "./singIn/SingIn"
import SignUp from "./singUp/SingUp"
import './styles/Auth.scss'
import background from '../../img/auth/bg.jpg'
import logo from '../../img/auth/logo.svg'
import { getCurretnUser } from "../../dal/firebase/autentification"


const Auth = () => {

	const [isNewUser, setIsNewUser] = useState(false)

	return (
		<div className="auth">
			<div className="auth__wrapper">
				<div className="auth__left-side">
					<img className="auth__left-side-bg" src={background} alt="" />
					<h1 className="auth__left-side-title">Green warehose inc</h1>
					<div className="company-logo">
						<img className="company-logo__svg" src={logo} alt="" />
					</div>
				</div>

				<div className="auth__right-side">
					<div className="auth__form">
						<div className="auth__form-btn-wrapper">
							<button
								onClick={() => setIsNewUser(false)}
								className="auth__signIn-btn">
								<span className="auth__signIn-btn-span" >Регистрация</span>
							</button>

							<button
								onClick={() => setIsNewUser(true)}
								className="auth__signUp-btn">
								<span className="auth__signIn-btn-span">Вход</span>
							</button>

						</div>

						{isNewUser ?
							<SignIn />
							:
							<SignUp />
						}

					</div>
				</div>
			</div>
		</div>

	)
}

export default Auth