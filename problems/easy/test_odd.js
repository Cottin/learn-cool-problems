import assert from 'assert'
import {odd} from './odd.js'


describe('odd', function () {
  it('should return [1, 3, 5] when [1,2,3,4,5] is passed as arg', function () {
    assert.deepEqual(odd([1, 2, 3, 4, 5]), [1, 3, 5])
  })
  it('should return [] when [2, 4] is passed as arg', function () {
    assert.deepEqual(odd([2, 4]), [])
  })
  it('should return [-11, 3, 5] when [-11,3,5,-2] is passed as arg', function () {
    assert.deepEqual(odd([-11, 3, 5, -2]), [-11, 3, 5])
  })
})

