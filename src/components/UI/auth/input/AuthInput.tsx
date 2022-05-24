import { useAppDispatch } from "../../../../hooks/redux"
import './style/AuthInput.scss'

interface TProps {
	disctipyionText: string
	type?: string
	action: any
}

const AuthInput = (props: TProps) => {
	
	const dispatch = useAppDispatch()

	return(
		<div className="auth-input">
			<div className="auth-input__discription">{props.disctipyionText}</div>
			<div className="auth-input__input-wrapper">
				<input className="auth-input__input" type={props.type || 'string'} />
			</div>
		</div>
	)
}

export default AuthInput