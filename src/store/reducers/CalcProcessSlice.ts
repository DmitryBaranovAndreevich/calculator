/*eslint-disable */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
/*eslint-enable */
interface CalcProcess {
   clicToRun: boolean
}

const initialState: CalcProcess = {
   clicToRun: false,
}

export const calcProcessSlice = createSlice({
   name: 'calcprocess',
   initialState,
   reducers: {
      isRun(state) {
         state.clicToRun = true
      },
      isNotRun(state) {
         state.clicToRun = false
      },
   },
})

export default calcProcessSlice.reducer
