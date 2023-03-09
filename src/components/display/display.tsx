import styles from './display.module.css'
import Keyboard from '../keyboard/keyboard'
import IDisplay from '../../interfaces/IDisplay'
import { FC } from 'react'

const Display: FC<IDisplay> = ({ value = 0, id, disabled, noActive }) => {
   return (
      <Keyboard id={id} disabled={disabled} noActive={noActive}>
         <p className={styles.screen}>{value}</p>
      </Keyboard>
   )
}

export default Display
