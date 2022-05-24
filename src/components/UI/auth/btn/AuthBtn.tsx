import './style/AuthBtn.scss'

interface TProps {
	btnText: string
	btnColor: string
}

const AuthBtn = (props: TProps) => {
	return(
		<button style={{backgroundColor: props.btnColor}} className="auth-btn">
			<div className="auth-btn__span">{props.btnText}</div>
		</button>
	)
}

export default AuthBtn