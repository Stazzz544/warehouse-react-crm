import './style.scss/ConfirmGreenBtn.scss'

interface TProps {
	function: any
	discriptionText: string
}

const ConfirmGreenBtn = (props:TProps) => {
	return (
		<button
			onClick={props.function}
			className="confirm-green-btn">
			{props.discriptionText}
		</button>
	)
}

export default ConfirmGreenBtn