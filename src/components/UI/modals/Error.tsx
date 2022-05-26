import { useAppDispatch } from '../../../hooks/redux'
import './styles/Modals.scss'

type TProps = {
	errorText: string
	closeModal: any
}

const Error: React.FC<TProps> = (props) => {
	const dispatch = useAppDispatch()

	return (
		<div className="modal">
			<div className="modal__wrapper modal__wrapper_error">
				<h3 className="modal__title">Произошла ошибка :</h3>
				<div className="modal__message">
					{props.errorText}
				</div>
				<button
					onClick={() => { dispatch(props.closeModal('')) }}
					className="modal__bnt">Понятно </button>
			</div>
		</div>
	)
}

export default Error