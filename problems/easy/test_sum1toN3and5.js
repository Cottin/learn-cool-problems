import assert from 'assert'
import { sum1toN3and5 } from './sum1toN3and5.js'

describe('sum1ToN3and5', function () {
  it('should return 8 when n = 5', function () {
    assert.equal(sum1toN3and5(5), 8)
  })
  it('should return 0 when n = 1', function () {
    assert.equal(sum1toN3and5(1), 0)
  })
  it('should return 3 when n = 3', function () {
    assert.equal(sum1toN3and5(3), 3)
  })
  it('should return invalid if n is zero or below', function () {
    assert.equal(sum1toN3and5(-2), 'invalid')
  })
})
