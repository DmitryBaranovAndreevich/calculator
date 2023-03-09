import { FC } from 'react'
import IButton from '../../interfaces/IButton'
import styles from './button.module.css'

const Button: FC<IButton> = ({ children, size, disabled }) => {
   const addClass = `button_${size}`
   return (
      <button className={`${styles.button} ${styles[addClass]}`}>
         {children}
      </button>
   )
}

export default Button
