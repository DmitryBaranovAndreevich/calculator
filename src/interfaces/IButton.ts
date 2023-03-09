import { ReactNode } from 'react'
import Size from './ISize'

interface IButton {
   children: ReactNode
   size: Size.little | Size.small | Size.middle | Size.big
   disabled: boolean
}

export default IButton
