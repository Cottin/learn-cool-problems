import assert from 'assert'
import { digits } from './digits.js'

describe('digits', () => {
  it('takes a number and returns a list of its digits', () => {
    const response = digits(981092830912)
    assert.deepStrictEqual(response, [9, 8, 1, 0, 9, 2, 8, 3, 0, 9, 1, 2])
  })
})