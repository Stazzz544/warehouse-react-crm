import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { fetchProducts } from '../../dal/firebase/getDataFromDb'
import { useAppDispatch } from '../../hooks/redux'
import { fetchProductsFromDb, fetchProductsFromDbError, fetchProductsFromDbSuccess } from '../../store/reducers/ProductsFromDbSlice'
import AdmissioProduct from './admissioProduct/AdmissioProduct'
import CreateNewProduct from './createNewProduct/CreateNewProduct'
import CurrentStateWarehouse from './currentStateWarehouse/CurrentStateWarehouse'
import Home from './home/Home'
import IssueProduct from './issueProduct/IssueProduct'
import Profile from './profile/Profile'
import './style/Main.scss'


const Main = () => {

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchProductsFromDb(true))
		fetchProducts(
			dispatch,
			fetchProductsFromDbSuccess,
			fetchProductsFromDbError
		)
	}, [])

	return(
		<main className="main">
			<div className='container'>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="profile" element={<	Profile />} />
					<Route path="issue-product" element={<	IssueProduct />} />
					<Route path="admissio-product" element={<AdmissioProduct />} />
					<Route path="create-new-product" element={<CreateNewProduct />} />
					<Route path="current-state-warehouse" element={<CurrentStateWarehouse/>} />
				</Routes>
			</div>
		</main>
	)
}

export default Main

