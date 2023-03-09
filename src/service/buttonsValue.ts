export let mainKeyboard = new Array(10)
   .fill('')
   .map((el, index) => String(index))
   .reverse()
mainKeyboard = [...mainKeyboard, ',']

export const bottomKeyboard = ['=']

export const topKeyboard = ['/', 'x', '-', '+']
