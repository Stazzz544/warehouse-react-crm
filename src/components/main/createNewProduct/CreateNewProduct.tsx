/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState } from 'react'
import { fetchProducts, getProductTypes } from '../../../dal/firebase/getDataFromDb'
import { createNewProductInDb } from '../../../dal/firebase/pushDataToDb'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { MaterialTypes } from '../../../models/ICreateNewProductSlice'
import { chooseTypeOfMaterial, fetchMaterialsFromDb, fetchMaterialsFromDbError, fetchMaterialsFromDbSuccess, setNameOfNewProductInputValue, setSuccessText } from '../../../store/reducers/createNewProductSlice'
import { fetchProductsFromDbError, fetchProductsFromDbSuccess } from '../../../store/reducers/fetchProductsFromDbSlice'
import DirectoryTitle from '../../UI/directoryTitle/DirectoryTitle'
import './styles/CreateNewProduct.scss'
import Error from '../../UI/modals/Error'
import Success from '../../UI/modals/Success'
import Dropdown from '../../UI/dropdown/Dropdown'
import ConfirmGreenBtn from '../../UI/buttons/confirmGreenBtn/ConfirmGreenBtn'


const CreateNewProduct = () => {
	const dispatch = useAppDispatch()

	
	
	const { 
		materialTypes, 
		choisenTypeOfMaterial, 
		nameOfNewProductInputValue,
		error: newProductError,
		successText: newProductSuccess,
	} = useAppSelector(state => state.createNewProducReducer)

	const { products } = useAppSelector(state => state.fetchProductsFromDbReducer)
	
	

	const isProductConsist = () => {
		
		let isConsist = false;
		if (!products[choisenTypeOfMaterial]) return false

		const productsArr: any = Object.values(products[choisenTypeOfMaterial])

		for(let key in productsArr) {
			if(productsArr[key].productName === nameOfNewProductInputValue) isConsist = true
		}
		return isConsist
	}

	// const [dropdown, setDropdown] = useState(false)

	useEffect(() => {
		dispatch(fetchMaterialsFromDb(true))
		getProductTypes(
			dispatch,
			fetchMaterialsFromDbSuccess,
			fetchMaterialsFromDbError
		)
	}, [])

	const createNewProduct = () => {
		
		if (isProductConsist()) {
			dispatch(fetchMaterialsFromDbError('Такой товар уже есть в базе'))
		} else if (!nameOfNewProductInputValue) {
			dispatch(fetchMaterialsFromDbError('Не введено название товара'))
		} else if (!choisenTypeOfMaterial) {
			dispatch(fetchMaterialsFromDbError('Не выбран тип товара'))
		} else {
			createNewProductInDb(nameOfNewProductInputValue, choisenTypeOfMaterial)
			fetchProducts(dispatch, fetchProductsFromDbSuccess, fetchProductsFromDbError)
			dispatch(setNameOfNewProductInputValue(''))
			dispatch(setSuccessText('Товар был успешно добавлен в базу данных'))
		}
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

					<Dropdown
						choisenItemInDropdown={choisenTypeOfMaterial}
						ifNothingChoise={'Материал не выбран'}
						arrayOfDropdownItems={materialTypes}
						arrayItem={'material'}
						actionForDispatch={chooseTypeOfMaterial}
					/>




					{/* <div onClick={() => { setDropdown(!dropdown) }} className='product-card__dropdown-wrapper'>

						<div className="product-card__dropdown-list-item choisen">{choisenTypeOfMaterial? choisenTypeOfMaterial: 'Материал не выбран'}</div>

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
					</div> */}

					
				</div>

				<div className="product-card__button-wrapper">
					<ConfirmGreenBtn 
					function={createNewProduct} 
					discriptionText={'Создать товар'}/>
				</div>

			</div>

			{newProductError ? 
				<Error errorText={newProductError} closeModal={fetchMaterialsFromDbError}/>:false
			}
			{newProductSuccess ? 
				<Success successText={newProductSuccess} closeModal={setSuccessText}/>:false
			}
		</div>


	)
}

export default CreateNewProduct	
