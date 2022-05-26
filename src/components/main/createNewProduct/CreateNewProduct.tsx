/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect } from 'react'
import { fetchProducts, getProductTypes } from '../../../dal/firebase/getDataFromDb'
import { createNewProductInDb } from '../../../dal/firebase/pushDataToDb'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { chooseTypeOfMaterial, fetchMaterialsFromDb, fetchMaterialsFromDbError, fetchMaterialsFromDbSuccess, setNameOfNewProductInputValue, setSuccessText } from '../../../store/reducers/createNewProductSlice'
import { fetchProductsFromDbError, fetchProductsFromDbSuccess } from '../../../store/reducers/fetchProductsFromDbSlice'
import DirectoryTitle from '../../UI/directoryTitle/DirectoryTitle'
import './styles/CreateNewProduct.scss'
import Dropdown from '../../UI/dropdown/Dropdown'
import ConfirmGreenBtn from '../../UI/buttons/confirmGreenBtn/ConfirmGreenBtn'
import { showErrorModal, showSuccessModal } from '../../../store/reducers/showInformModalSlice'


const CreateNewProduct = () => {
	const dispatch = useAppDispatch()

	const { 
		materialTypes, 
		choisenTypeOfMaterial, 
		nameOfNewProductInputValue,
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
			dispatch(showErrorModal({messageModal: 'Такой товар уже есть в базе', buttonModalText: 'Упс'}))
		} else if (!nameOfNewProductInputValue) {
			dispatch(showErrorModal({messageModal: 'Не введено название товара', buttonModalText: 'Упс'}))
		} else if (!choisenTypeOfMaterial) {
			dispatch(showErrorModal({messageModal: 'Не выбран тип товара', buttonModalText: 'Упс'}))
		} else {
			createNewProductInDb(nameOfNewProductInputValue, choisenTypeOfMaterial)
			fetchProducts(dispatch, fetchProductsFromDbSuccess, fetchProductsFromDbError)
			dispatch(setNameOfNewProductInputValue(''))
			dispatch(showSuccessModal({messageModal: 'Товар был успешно добавлен в базу данных', buttonModalText: 'Отлично!'}))
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
