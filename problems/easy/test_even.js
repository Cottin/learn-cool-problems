import assert from 'assert'
import { even } from './even.js'

describe('even', function () {
  it('should return [2, 4] when [1,2,3,4,5] is passed as arg', function () {
    assert.deepEqual(even([1, 2, 3, 4, 5]), [2, 4])
  })
  it('should return [] when [1,3,5] is passed as arg', function () {
    assert.deepEqual(even([1, 3, 5]), [])
  })
  it('should return [-2] when [1,3,5,-2] is passed as arg', function () {
    assert.deepEqual(even([1, 3, 5, -2]), [-2])
  })
})
