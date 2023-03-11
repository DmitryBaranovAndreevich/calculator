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

function App() {
   const { setInitValue } = calcSlice.actions
   const { setTrue: setRunTimeActiv, setFalse: setRunTimeInActiv } =
      runtimeButtonSlice.actions
   const { setTrue: setConstructorActiv, setFalse: setConstructorInActiv } =
      constructorButtonSlice.actions
   const { setDraggetArr } = draggetArrSlice.actions
   const { setDisabled, setElemDisabled } = constructorArrSlice.actions
   const { setEnabled } = constructorArrSlice.actions
   const dispatch = useAppDispatch()
   const {
      runTimeReducer,
      constructorReducer,
      constructorArrReducer,
      dragArrReducer,
   } = useAppSelector((state) => state)

   function handleDrop(itemId: number) {
      dispatch(setElemDisabled(itemId))
      dispatch(setDraggetArr(constructorArrReducer.arr[itemId]))
   }

   function handleRuntimeClick() {
      dispatch(setRunTimeActiv())
      dispatch(setConstructorInActiv())
      dispatch(setDisabled())
      dispatch(setInitValue())
   }
   function handleConstructorClick() {
      dispatch(setConstructorActiv())
      dispatch(setRunTimeInActiv())
      dispatch(setEnabled(dragArrReducer.arr))
      dispatch(setInitValue())
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
