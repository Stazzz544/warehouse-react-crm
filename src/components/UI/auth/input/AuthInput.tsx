import { useAppDispatch } from "../../../../hooks/redux"
import './style/AuthInput.scss'

interface TProps {
	discriptionText: string
	type?: string
	inputAction: any
	inputValue: string
}

const AuthInput = (props: TProps) => {
	
	const dispatch = useAppDispatch()
	const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(props.inputAction(e.target.value))
	}

	return(
		<div className="auth-input">
			<div className="auth-input__discription">{props.discriptionText}</div>
			<div className="auth-input__input-wrapper">
				<input 
				value={props.inputValue}
				onInput={changeInputValue}
				className="auth-input__input" 
				type={props.type || 'string'} />
			</div>
		</div>
	)
}

export default AuthInput