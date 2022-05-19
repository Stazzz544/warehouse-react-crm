import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createNewProducReducer from './reducers/createNewProductSlice'

const rootReducer = combineReducers({
	createNewProducReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']