/*eslint-disable */
import { combineReducers, configureStore } from '@reduxjs/toolkit'
/*eslint-enable */

import calcReducer from './reducers/CalculaterSlice'
import runTimeReducer from './reducers/RunTimeButtonSlice'
import constructorReducer from './reducers/ConstructorButtonSlice'
import constructorArrReducer from './reducers/ConstructorArrSlice'
import dragArrReducer from './reducers/DraggetArrSlice'
import calcProcessReducer from './reducers/CalcProcessSlice'

const rootReducer = combineReducers({
   calcReducer,
   runTimeReducer,
   constructorReducer,
   constructorArrReducer,
   dragArrReducer,
   calcProcessReducer,
})

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer,
   })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
