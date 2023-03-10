import { FC } from 'react'
import { calcSlice } from '../../store/reducers/CalculaterSlice'
import IButton from '../../interfaces/IButton'
import styles from './button.module.css'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import calculate from '../../service/calculate'
import { calcProcessSlice } from '../../store/reducers/CalcProcessSlice'

const Button: FC<IButton> = ({ children, size }) => {
   const { clicToRun } = useAppSelector((state) => state.calcProcessReducer)
   const { valueRunTimeButton } = useAppSelector(
      (state) => state.runTimeReducer,
   )
   const { value } = useAppSelector((state) => state.calcReducer)
   const { isRun, isNotRun } = calcProcessSlice.actions
   const { setValue, addValue } = calcSlice.actions
   const dispatch = useAppDispatch()
   const addClass = `button_${size}`
   function handleClick() {
      if (valueRunTimeButton) {
         if (children !== '=') {
            if (
               clicToRun &&
               children !== '+' &&
               children !== '-' &&
               children !== 'x' &&
               children !== '/'
            ) {
               dispatch(setValue(children))
               dispatch(isNotRun())
            } else {
               dispatch(addValue(children))
               dispatch(isNotRun())
            }
         } else {
            const result = calculate(value)
            dispatch(setValue(result))
            dispatch(isRun())
         }
      }
   }
   return (
      <button
         className={`${styles.button} ${styles[addClass]} `}
         onClick={handleClick}
      >
         {children}
      </button>
   )
}

export default Button
