const math = require('mathjs')

function calculate(expr: string) {
   const priv = expr.replace('x', '*').replace(',', '.')
   return math.evaluate(priv).toString()
}

export default calculate
