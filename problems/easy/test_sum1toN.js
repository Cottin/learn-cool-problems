import assert from 'assert'
import { sum1toN } from './sum1toN.js'

describe('sum1ToN', function () {
  it('should return 6 when n = 3', function () {
    assert.equal(sum1toN(3), 6)
  })
  it('should return 10 when n = 4', function () {
    assert.equal(sum1toN(4), 10)
  })
  it('should return invalid if n is zero or below', function () {
    assert.equal(sum1toN(-2), 'invalid')
  })
})
