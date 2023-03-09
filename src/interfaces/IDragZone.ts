interface IDragZone {
   onDropHandler: (itemId: number) => void
   dragEl:
      | Array<{
           type: string
           value: number | string[]
           disabled: boolean
           noActive: boolean
           id: number
        }>
      | []
}

export default IDragZone
