import assert from 'assert'
import { even } from './even.js'

describe('even', () => {
  it('returns the even numbers in a given list', () => {
    const response = even([1, 2, 3, 4, 5])
    assert.deepEqual(response, [2, 4])
  })
})
