import { useEffect, useState } from 'react'
import { getProductTypes } from '../../../dal/firebase/getDataFromDb'
import { createNewProductInDb } from '../../../dal/firebase/pushDataToDb'

import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { MaterialTypes } from '../../../models/ICreateNewProductSlice'
import { chooseTypeOfMaterial, fetchMaterialsFromDb, fetchMaterialsFromDbError, fetchMaterialsFromDbSuccess, setNameOfNewProductInputValue } from '../../../store/reducers/createNewProductSlice'
import DirectoryTitle from '../../UI/DirectoryTitle'
import './styles/CreateNewProduct.scss'

// const createNewProdu = () => {

// }

const CreateNewProduct = () => {



	const dispatch = useAppDispatch()
	const { 
		materialTypes, 
		choisenTypeOfMaterial, 
		nameOfNewProductInputValue, 
	} = useAppSelector(state => state.createNewProducReducer)

	const { products } = useAppSelector(state => state.fetchProductsFromDbReducer)

	const objCicle = () => {
		const arr =  products[choisenTypeOfMaterial]
		console.log(arr)
		for (let item in arr) {
			for(let itemInside in item){
				console.log(itemInside)
			}
		}
	}
	objCicle()


	const [dropdown, setDropdown] = useState(false)

	useEffect(() => {
		dispatch(fetchMaterialsFromDb(true))
		getProductTypes(
			dispatch,
			fetchMaterialsFromDbSuccess,
			fetchMaterialsFromDbError
		)
	}, [])

	const createNewProduct = () => {
		

		createNewProductInDb(nameOfNewProductInputValue, choisenTypeOfMaterial)
	}


	return (
		<div className='CreateNewProduct'>
			<DirectoryTitle title='Создание нового товара' />

			<div className="product-card">

				<div className="product-card__input-wrapper">
					<label className='product-card__label'>Название товара:</label>
					<input 
					value={nameOfNewProductInputValue}
					onInput={(e)=>{dispatch(setNameOfNewProductInputValue(e.currentTarget.value))}}
					className='product-card__input' 
					type="text" />
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
					<button 
					onClick={createNewProduct}
					className="product-card__button">
						Создать товар
					</button>
				</div>

			</div>

		</div>


	)
}

export default CreateNewProduct	