import { useState } from "react"
import SingIn from "./singIn/SingIn"
import './styles/Auth.scss'

const Auth = () => {
	const [isNewUser, setIsNewUser] = useState(false)
	return (
		<div className="auth">
			<div className="auth__wrapper">
				<button 
				onClick={() => setIsNewUser(false)}
				className="auth__signIn">Войти</button>
				<button 
				onClick={() => setIsNewUser(true)}
				className="auth__signUp">Зарегестрироваться</button>
				<div className="auth__form">
					{isNewUser ?
					<>yes</>
					:
						<SingIn/>
					}
				</div>
			</div>
		</div>

	)
}

export default Auth