/*eslint-disable */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IInitDate from '../../interfaces/IInitDate'
import {
   bottomKeyboard,
   mainKeyboard,
   topKeyboard,
} from '../../service/buttonsValue'
/*eslint-enable */
interface CalculateState {
   arr: Array<IInitDate>
}

const initialState: CalculateState = {
   arr: [
      { type: 'screen', value: 0, disabled: false, id: 123, noActive: false },
      {
         type: 'top',
         value: topKeyboard,
         disabled: false,
         id: 124,
         noActive: false,
      },
      {
         type: 'middle',
         value: mainKeyboard,
         disabled: false,
         id: 125,
         noActive: false,
      },
      {
         type: 'bottom',
         value: bottomKeyboard,
         disabled: false,
         id: 126,
         noActive: false,
      },
   ],
}

export const constructorArrSlice = createSlice({
   name: 'calculater',
   initialState,
   reducers: {
      setDisabled(state) {
         state.arr = state.arr.map((el) => {
            return { ...el, disabled: el.disabled ? el.disabled : !el.disabled }
         })
      },
      setEnabled(state, action: PayloadAction<IInitDate[]>) {
         console.log(action.payload)
         state.arr = state.arr.map((el) => {
            const elInDragArr = action.payload.find(
               (elem) => elem.type === el.type,
            )
            return { ...el, disabled: elInDragArr ? true : false }
         })
      },
      setElemDisabled(state, action: PayloadAction<number>) {
         state.arr[action.payload].disabled = true
      },

      setElemEnabled(state, action: PayloadAction<string>) {
         const elm = state.arr.find((el) => el.type == action.payload)
         if (elm) elm.disabled = false
      },
   },
})

export default constructorArrSlice.reducer
