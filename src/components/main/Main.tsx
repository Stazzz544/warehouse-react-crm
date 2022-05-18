import { Route, Routes } from 'react-router-dom'
import './style/Main.scss'

const Main = () => {
	return(
		<main className="main">
			<Routes>
				<Route path="/" element={<MainContent />} />
				<Route path="goods" element={<MainContent />} />
				<Route path="adminPanel" element={<AdminPanel />} />
				<Route path="authPage" element={<AuthPage />} />
			</Routes>
		</main>
	)
}

export default Main