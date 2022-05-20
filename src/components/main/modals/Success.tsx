import { useAppDispatch } from '../../../hooks/redux'
import './styles/Modals.scss'

type TProps ={
	successText: string
	closeModal: any
}

const Success: React.FC<TProps>= (props) => {
	const dispatch = useAppDispatch()
	
	return (
		<div className="modal">
			<div className="modal__wrapper modal__wrapper_success">
				<div className="modal__message">
					{props.successText}
				</div>
				<button 
				onClick={()=>{dispatch(props.closeModal(''))}}
				className="modal__bnt">Понятно </button>
			</div>
		</div>
	)
}

export default Success