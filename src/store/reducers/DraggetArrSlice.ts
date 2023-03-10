/*eslint-disable */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IInitDate from '../../interfaces/IInitDate'
/*eslint-enable */
interface DraggetState {
   arr: Array<IInitDate> | []
}

const initialState: DraggetState = {
   arr: [],
}

export const draggetArrSlice = createSlice({
   name: 'dragget',
   initialState,
   reducers: {
      setDraggetArr(state, action: PayloadAction<IInitDate>) {
         if (action.payload.type === 'screen')
            state.arr = [{ ...action.payload, noActive: true }, ...state.arr]
         else state.arr = [...state.arr, { ...action.payload, noActive: true }]
      },
      removeEl(state, action: PayloadAction<number>) {
         state.arr = state.arr.filter((el, index) => index != action.payload)
      },
   },
})

export default draggetArrSlice.reducer
