import { FC } from 'react'
import { useDrag } from 'react-dnd'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import IKeyboard from '../../interfaces/IKeyboard'
import { constructorArrSlice } from '../../store/reducers/ConstructorArrSlice'
import { draggetArrSlice } from '../../store/reducers/DraggetArrSlice'
import styles from './keyboard.module.css'

const Keybord: FC<IKeyboard> = ({ children, id, disabled, noActive, type }) => {
   const { valueConstructorButton } = useAppSelector(
      (state) => state.constructorReducer,
   )
   const { removeEl } = draggetArrSlice.actions
   const { setElemEnabled } = constructorArrSlice.actions
   const dispatch = useAppDispatch()
   const [, dragRef] = useDrag({
      type: 'keyboard',
      item: { id },
   })

   const remove = () => {
      if (valueConstructorButton) {
         dispatch(removeEl(id))
         dispatch(setElemEnabled(type))
      }
   }
   return (
      <div
         onDoubleClick={remove}
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
