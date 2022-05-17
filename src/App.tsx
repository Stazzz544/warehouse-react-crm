import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';
import './styles/App.scss';

function App() {

	const {users, isLoading, error}  = useAppSelector(state => state.userReducer)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchUsers())
	},[])
	
	return (
		<div className="app">
			{isLoading && <h1>Идёт загрузка...</h1>}
			{error && <h1>{error}</h1>}

			{users.map( user => {
				return (
					<div key={user.id}> {user.name}</div>
				)
			})}
		</div>
	);
}

export default App;

