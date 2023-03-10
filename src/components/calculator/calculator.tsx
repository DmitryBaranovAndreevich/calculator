import styles from './calculator.module.css'
import ICalculator from '../../interfaces/ICalclator'
import { FC } from 'react'
import Keyboard from '../keyboard/keyboard'
import Display from '../display/display'
import Button from '../button/button'
import Size from '../../interfaces/ISize'

const Calculator: FC<ICalculator> = ({ arr }) => {
   return (
      <div className={styles.wrapper}>
         {arr.map(({ type, value, disabled, id, noActive }, index) => {
            if (type === 'screen') {
               return (
                  <Display
                     key={id}
                     value={value as number}
                     id={index}
                     disabled={disabled}
                     noActive={noActive as boolean}
                     type={type}
                  />
               )
            } else {
               return (
                  <Keyboard
                     key={id}
                     id={index}
                     disabled={disabled}
                     noActive={noActive as boolean}
                     type={type}
                  >
                     {(value as Array<string>).map((el) => (
                        <Button
                           key={el}
                           children={el}
                           size={
                              type === 'top'
                                 ? Size.little
                                 : type === 'middle' && el === '0'
                                 ? Size.middle
                                 : type === 'middle'
                                 ? Size.small
                                 : Size.big
                           }
                           disabled={false}
                        />
                     ))}
                  </Keyboard>
               )
            }
         })}
      </div>
   )
}

export default Calculator
