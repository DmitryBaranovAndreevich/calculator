import styles from './display.module.css'
import Keyboard from '../keyboard/keyboard'
import IDisplay from '../../interfaces/IDisplay'
import { FC } from 'react'
import { useAppSelector } from '../../hooks/redux'

const Display: FC<IDisplay> = ({ value = 0, id, disabled, noActive, type }) => {
   const { value: displayMessage } = useAppSelector(
      (state) => state.calcReducer,
   )
   return (
      <Keyboard id={id} disabled={disabled} noActive={noActive} type={type}>
         <p className={styles.screen}>
            {displayMessage && !disabled ? displayMessage : value}
         </p>
      </Keyboard>
   )
}

export default Display
