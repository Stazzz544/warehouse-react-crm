import { useState } from 'react'
import { useAppDispatch } from '../../../hooks/redux'
import './styles/Dropdown.scss'


const Dropdown = (props: any) => {
	const dispatch = useAppDispatch()
	const [dropdown, setDropdown] = useState(false)


	return (
		<div onClick={() => { setDropdown(!dropdown) }} className='product-card__dropdown-wrapper'>

		<div className="product-card__dropdown-list-item choisen">{props.choisenItemInDropdown? props.choisenItemInDropdown: props.ifNothingChoise}</div>

		<div className={!dropdown ? "product-card__dropdown-list" : "product-card__dropdown-list active"}>
			{
				props.arrayOfDropdownItems.map((item: any) => {
					return (
						<div
							onClick={()=>{dispatch(props.actionForDispatch(item.material))}}
							key={item.id}
							className="product-card__dropdown-list-item">
							{item.material}
						</div>
					)
				})
			}
		</div>
	</div>
	)
}

export default Dropdown