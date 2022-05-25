import './style/AuthBtn.scss'

interface TProps {
	btnText: string
	btnColor: string
	userLogin?: string
	userEmail: string
	userPassword: string
	btnFunc: any
}

const AuthBtn = (props: TProps) => {

	const sendDataToDb = () => {
		props.btnFunc(props.userEmail, props.userPassword, props.userLogin)
	}

	return(
		<button 
			onClick={sendDataToDb}
			style={{backgroundColor: props.btnColor}} 
			className="auth-btn">
			<div className="auth-btn__span">{props.btnText}</div>
		</button>
	)
}

export default AuthBtn