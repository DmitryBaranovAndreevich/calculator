import { ReactNode } from "react";

interface IKeyboard {
   children: ReactNode
   id: number
   disabled: boolean
   noActive?: boolean
}

export default IKeyboard;