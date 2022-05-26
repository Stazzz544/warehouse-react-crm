import { useCallback, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import './styles/customCheckbox.scss'

interface TProps {
	checkStatus: boolean
	action: any
}

const CustomCheckbox = (props: TProps) => {

	const dispatch = useAppDispatch()
	const checkboxChangeValue = () => dispatch(props.action(!props.checkStatus))


	return (
		<div className="confirm-checkbox">
			<div className="confirm-checkbox__discription-text">- запомнить меня</div>
			<label
			
			className= {props.checkStatus ? 'confirm-checkbox__label checked':'confirm-checkbox__label'}>
				<input 
				onClick={checkboxChangeValue}
				defaultChecked={props.checkStatus}
				className='confirm-checkbox__checkbox' 
				type='checkbox'/>
			</label>
		</div>
	)
}

export default CustomCheckbox