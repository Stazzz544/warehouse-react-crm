import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createNewProducReducer from './reducers/createNewProductSlice'
import fetchProductsFromDbReducer from './reducers/fetchProductsFromDbSlice'
import AutentificationReducer from './reducers/autentificationSlice'
import showInformModalReducer from './reducers/showInformModalSlice'

const rootReducer = combineReducers({
	createNewProducReducer,
	fetchProductsFromDbReducer,
	AutentificationReducer,
	showInformModalReducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']