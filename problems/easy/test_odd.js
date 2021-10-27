import assert from 'assert'
import {odd} from './odd.js'


describe("odd", () => {
  it("[1, 2, 3, 4, 5]", () => assert.deepEqual(odd([1, 2, 3, 4, 5]), [1, 3, 5]))
})

