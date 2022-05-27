import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { closeInformModal } from '../../../../store/reducers/InformModalSlice'
import './styles/ModalInform.scss'

interface TProps {
	informText: string
	color: 'red' | 'green'
	buttonModalText: string
}

const ModalSuccess = (props: TProps) => {
	const dispatch = useAppDispatch()

	return (
		<div className="modal">

			{props.color === 'red' ?
				//=======error modal=======
				<div className={"modal__wrapper modal__wrapper-error"}>
					<h3 className="modal__title">Произошла ошибка :</h3>
					<div className="modal__message">
						{props.informText}
					</div>
					<button
						onClick={() => { dispatch(closeInformModal()) }}
						className="modal__bnt">{props.buttonModalText} </button>
				</div>
				:
				false
			}

			{props.color === 'green' ?
				//=======success modal=======
				<div className="modal__wrapper modal__wrapper-success">
					<h3 className="modal__title">Всё прошло хорошо :</h3>
					<div className="modal__message">
						{props.informText}
					</div>
					<button
						onClick={() => { dispatch(closeInformModal()) }}
						className="modal__bnt">{props.buttonModalText} </button>
				</div>
				:
				false
			}
		</div>
	)
}

export default ModalSuccess


