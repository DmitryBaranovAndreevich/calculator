/*eslint-disable */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
/*eslint-enable */
interface CalculateState {
   value: string
}

const initialState: CalculateState = {
   value: '',
}

export const calcSlice = createSlice({
   name: 'constructorArr',
   initialState,
   reducers: {
      addValue(state, action: PayloadAction<string>) {
         if (state.value.length < 8) state.value += action.payload
      },
      setInitValue(state) {
         state.value = ''
      },
      setValue(state, action: PayloadAction<string>) {
         state.value = action.payload
      },
   },
})

export default calcSlice.reducer
