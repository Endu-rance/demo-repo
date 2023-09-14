const well = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = well.flattenDeep(items)
console.log(newItems);
 