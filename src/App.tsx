import styles from './App.module.css'
import Calculator from './components/calculator/calculator'
import DragZone from './components/dragZone/dragZone'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { runtimeButtonSlice } from './store/reducers/RunTimeButtonSlice'
import { constructorButtonSlice } from './store/reducers/ConstructorButtonSlice'
import { draggetArrSlice } from './store/reducers/DraggetArrSlice'
import { constructorArrSlice } from './store/reducers/ConstructorArrSlice'
import { calcSlice } from './store/reducers/CalculaterSlice'
import { useEffect } from 'react'

function App() {
   const { setInitValue } = calcSlice.actions
   const { toggleRunTime } = runtimeButtonSlice.actions
   const { toggleConstructor } = constructorButtonSlice.actions
   const { setDraggetArr } = draggetArrSlice.actions
   const { setDisabled, setElemDisabled, setEnabled } =
      constructorArrSlice.actions
   const dispatch = useAppDispatch()
   const {
      runTimeReducer,
      constructorReducer,
      dragArrReducer,
      constructorArrReducer,
   } = useAppSelector((state) => state)

   function buttonSwitch() {
      dispatch(toggleConstructor())
      dispatch(toggleRunTime())
      dispatch(setInitValue())
   }

   function handleDrop(itemId: number) {
      dispatch(setElemDisabled(itemId))
      dispatch(setDraggetArr(constructorArrReducer.arr[itemId]))
   }

   function handleRuntimeClick() {
      buttonSwitch()
      dispatch(setDisabled())
   }
   function handleConstructorClick() {
      buttonSwitch()
      // dispatch(setEnabled(dragArrReducer.arr))
   }

   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            <div className={styles.buttonWrapper}>
               <button
                  onClick={handleRuntimeClick}
                  className={`${styles.switchButton} ${
                     styles.switchButton_position_left
                  } ${
                     runTimeReducer.valueRunTimeButton &&
                     styles.switchButton_active
                  }`}
               >
                  Runtime
               </button>
               <button
                  onClick={handleConstructorClick}
                  className={`${styles.switchButton} ${
                     styles.switchButton_position_right
                  }  ${
                     constructorReducer.valueConstructorButton &&
                     styles.switchButton_active
                  }`}
               >
                  Constructor
               </button>
            </div>
         </div>
         <div className={styles.wrapper}>
            <DndProvider backend={HTML5Backend}>
               <Calculator arr={constructorArrReducer.arr} />
               <DragZone onDropHandler={handleDrop} />
            </DndProvider>
         </div>
      </div>
   )
}

export default App
