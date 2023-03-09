import { ReactNode } from "react";

interface ICalculator {
   arr: Array<{ type: string; value : number|string[], disabled: boolean, noActive?: boolean, id: number}>
}

export default ICalculator;