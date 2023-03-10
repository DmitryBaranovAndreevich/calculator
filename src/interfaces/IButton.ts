import Size from './ISize'

interface IButton {
   children: string
   size: Size.little | Size.small | Size.middle | Size.big
   disabled: boolean
}

export default IButton
