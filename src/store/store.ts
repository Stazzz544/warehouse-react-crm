import { combineReducers, configureStore } from '@reduxjs/toolkit'
import CreateNewProducReducer from './reducers/NewProductSlice'
import ProductsFromDbReducer from './reducers/ProductsFromDbSlice'
import AutentificationReducer from './reducers/AutentificationSlice'
import InformModalReducer from './reducers/InformModalSlice'
import ModalWithChoiseReducer from './reducers/ModalWithChoiseSlice'

const rootReducer = combineReducers({
	CreateNewProducReducer,
	ProductsFromDbReducer,
	AutentificationReducer,
	InformModalReducer,
	ModalWithChoiseReducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']