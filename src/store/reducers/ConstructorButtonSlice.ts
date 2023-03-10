/*eslint-disable */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
/*eslint-enable */
interface ConstructorButtonState {
   valueConstructorButton: boolean
}

const initialState: ConstructorButtonState = {
   valueConstructorButton: true,
}

export const constructorButtonSlice = createSlice({
   name: 'constructor',
   initialState,
   reducers: {
      setTrue(state) {
         state.valueConstructorButton = true
      },
      setFalse(state) {
         state.valueConstructorButton = false
      },
      toggleConstructor(state) {
         state.valueConstructorButton = !state.valueConstructorButton
      },
   },
})

export default constructorButtonSlice.reducer
