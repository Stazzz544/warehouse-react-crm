import { Route, Routes } from 'react-router-dom'
import AdmissioProduct from './admissioProduct/AdmissioProduct'
import CreateNewProduct from './createNewProduct/CreateNewProduct'
import CurrentStateWarehouse from './currentStateWarehouse/CurrentStateWarehouse'
import Home from './home/Home'
import IssueProduct from './issueProduct/IssueProduct'
import './style/Main.scss'

const Main = () => {
	return(
		<main className="main">
			<div className='container'>
				<Routes>
					<Route path="/" element={<Home/>} />
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