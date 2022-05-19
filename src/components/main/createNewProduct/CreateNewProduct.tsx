import { useEffect, useState } from 'react'
import { getProductTypes } from '../../../dal/firebase/getDataFromDb'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { MaterialTypes } from '../../../models/IcreateNewProductSlice'
import { chooseTypeOfMaterial, fetchMaterialsFromDb, fetchMaterialsFromDbError, fetchMaterialsFromDbSuccess } from '../../../store/reducers/createNewProductSlice'
import DirectoryTitle from '../../UI/DirectoryTitle'
import './styles/CreateNewProduct.scss'

const CreateNewProduct = () => {

	const dispatch = useAppDispatch()
	const { materialTypes, choisenTypeOfMaterial } = useAppSelector(state => state.createNewProducReducer)
	const [dropdown, setDropdown] = useState(false)

	useEffect(() => {
		dispatch(fetchMaterialsFromDb(true))
		getProductTypes(
			dispatch,
			fetchMaterialsFromDbSuccess,
			fetchMaterialsFromDbError
		)
	}, [])


	return (
		<div className='CreateNewProduct'>
			<DirectoryTitle title='Создание нового товара' />

			<div className="product-card">

				<div className="product-card__input-wrapper">
					<label className='product-card__label' htmlFor="product-name">Название товара:</label>
					<input className='product-card__input' id='product-name' type="text" />
				</div>

				<div className="product-card__dropdown-main-wrapper">

					<div className='product-card__label'>Тип товара:</div>
					<div onClick={() => { setDropdown(!dropdown) }} className='product-card__dropdown-wrapper'>

						<div className="product-card__dropdown-list-item choisen">{choisenTypeOfMaterial}</div>
						<div className={!dropdown ? "product-card__dropdown-list" : "product-card__dropdown-list active"}>
							{
								materialTypes.map((item: MaterialTypes) => {
									return (
										<div
											onClick={()=>{dispatch(chooseTypeOfMaterial(item.material))}}
											key={item.id}
											className="product-card__dropdown-list-item">
											{item.material}
										</div>
									)
								})
							}

						</div>
					</div>
				</div>

				<div className="product-card__button-wrapper">
					<button className="product-card__button">Создать товар</button>
				</div>

			</div>

		</div>


	)
}

export default CreateNewProduct	