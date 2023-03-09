import { FC } from 'react'
import { useDrag } from 'react-dnd'
import IKeyboard from '../../interfaces/IKeyboard'
import styles from './keyboard.module.css'

const Keybord: FC<IKeyboard> = ({ children, id, disabled, noActive }) => {
   const [, dragRef] = useDrag({
      type: 'keyboard',
      item: { id },
   })
   return (
      <div
         ref={!noActive && !disabled ? dragRef : null}
         className={`${styles.wrapper} ${
            disabled ? styles.wrapper_disabled : ''
         }`}
      >
         {children}
      </div>
   )
}

export default Keybord
