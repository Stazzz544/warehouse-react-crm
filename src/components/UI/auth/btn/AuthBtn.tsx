import { AppDispatch } from '../../../../store/store'
import './style/AuthBtn.scss'

interface TProps {
	btnText: string
	btnColor: string
	btnFunc: any
}

const AuthBtn = (props: TProps) => {
	return(
		<button 
			onClick={props.btnFunc}
			style={{backgroundColor: props.btnColor}} 
			className="auth-btn">
			<div className="auth-btn__span">{props.btnText}</div>
		</button>
	)
}

export default AuthBtn