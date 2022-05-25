import { useCallback, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import './styles/customCheckbox.scss'

interface TProps {
	checked: boolean
	action: any
}

const CustomCheckbox = (props: TProps) => {
	const {rememberMe} = useAppSelector(state => state.AutentificationReducer)
	const dispatch = useAppDispatch()
	console.log('render')

	const checkboxChangeValue = useCallback(() => {
		dispatch(props.action(!props.checked))
	}, [rememberMe])


	return (
		<div className="confirm-checkbox">
			<div className="confirm-checkbox__discription-text">- запомнить меня</div>
			<label
			
			className= {props.checked ? 'confirm-checkbox__label checked':'confirm-checkbox__label'}>
				<input 
				onClick={checkboxChangeValue}
				defaultChecked={props.checked}
				className='confirm-checkbox__checkbox' 
				type='checkbox'/>
			</label>
		</div>
	)
}

export default CustomCheckbox