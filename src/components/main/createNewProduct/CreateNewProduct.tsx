/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect } from 'react'
import { fetchProducts, getProductTypes } from '../../../dal/firebase/getDataFromDb'
import { createNewProductInDb } from '../../../dal/firebase/pushDataToDb'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { chooseTypeOfMaterial, fetchMaterialsFromDb, fetchMaterialsFromDbError, fetchMaterialsFromDbSuccess, setNameOfNewProductInputValue } from '../../../store/reducers/NewProductSlice'
import { fetchProductsFromDbError, fetchProductsFromDbSuccess } from '../../../store/reducers/ProductsFromDbSlice'
import DirectoryTitle from '../../UI/directoryTitle/DirectoryTitle'
import './styles/CreateNewProduct.scss'
import Dropdown from '../../UI/dropdown/Dropdown'
import ConfirmGreenBtn from '../../UI/buttons/confirmGreenBtn/ConfirmGreenBtn'
import { showErrorInformModal, showSuccessInformModal } from '../../../store/reducers/InformModalSlice'


const CreateNewProduct = () => {
	const dispatch = useAppDispatch()

	const { 
		materialTypes, 
		choisenTypeOfMaterial, 
		nameOfNewProductInputValue,
	} = useAppSelector(state => state.CreateNewProducReducer)

	const { products } = useAppSelector(state => state.ProductsFromDbReducer)
	
	const isProductConsist = () => {
		let isConsist = false;
		if (!products[choisenTypeOfMaterial]) return false

		const productsArr: any = Object.values(products[choisenTypeOfMaterial])

		for(let key in productsArr) {
			if(productsArr[key].productName === nameOfNewProductInputValue) isConsist = true
		}
		return isConsist
	}

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
			dispatch(showErrorInformModal({informModalmessage: 'Такой товар уже есть в базе', informModalButtonText: 'Упс'}))
		} else if (!nameOfNewProductInputValue) {
			dispatch(showErrorInformModal({informModalmessage: 'Не введено название товара', informModalButtonText: 'Упс'}))
		} else if (!choisenTypeOfMaterial) {
			dispatch(showErrorInformModal({informModalmessage: 'Не выбран тип товара', informModalButtonText: 'Упс'}))
		} else {
			createNewProductInDb(nameOfNewProductInputValue, choisenTypeOfMaterial)
			fetchProducts(dispatch, fetchProductsFromDbSuccess, fetchProductsFromDbError)
			dispatch(setNameOfNewProductInputValue(''))
			dispatch(showSuccessInformModal({informModalmessage: 'Товар был успешно добавлен в базу данных', informModalButtonText: 'Отлично!'}))
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
				
				</div>

				<div className="product-card__button-wrapper">
					<ConfirmGreenBtn 
					function={createNewProduct} 
					discriptionText={'Создать товар'}/>
				</div>

			</div>

		</div>
	)
}

export default CreateNewProduct	
