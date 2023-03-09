import styles from './App.module.css'
import Calculator from './components/calculator/calculator'
import DragZone from './components/dragZone/dragZone'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import {
   bottomKeyboard,
   mainKeyboard,
   topKeyboard,
} from './service/buttonsValue'
import { useState } from 'react'

const initArr = [
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
]

function App() {
   const [arr, setArr] = useState(initArr)
   const [draggedEl, setDraggedEl] = useState<
      | Array<{
           type: string
           value: number | string[]
           disabled: boolean
           noActive: boolean
           id: number
        }>
      | []
   >([])
   function handleDrop(itemId: number) {
      const arrCopy = JSON.parse(JSON.stringify(arr))
      const changeEl = arrCopy[itemId]
      changeEl.disabled = true
      setArr(arrCopy)
      const priv = { ...arr[itemId], noActive: true }
      setDraggedEl([
         ...draggedEl,
         priv as {
            type: string
            value: number | string[]
            disabled: boolean
            noActive: boolean
            id: number
         },
      ])
   }
   return (
      <div className={styles.wrapper}>
         <DndProvider backend={HTML5Backend}>
            <Calculator arr={arr} />
            <DragZone onDropHandler={handleDrop} dragEl={draggedEl} />
         </DndProvider>
      </div>
   )
}

export default App
