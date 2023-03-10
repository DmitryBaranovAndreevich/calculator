/*eslint-disable */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
/*eslint-enable */
interface RunTimeButtonState {
   valueRunTimeButton: boolean
}

const initialState: RunTimeButtonState = {
   valueRunTimeButton: false,
}

export const runtimeButtonSlice = createSlice({
   name: 'runtime',
   initialState,
   reducers: {
      setTrue(state) {
         state.valueRunTimeButton = true
      },
      setFalse(state) {
         state.valueRunTimeButton = false
      },
      toggleRunTime(state) {
         state.valueRunTimeButton = !state.valueRunTimeButton
      },
   },
})

export default runtimeButtonSlice.reducer
