import assert from 'assert'
import { prod1toN } from './prod1toN.js'

describe('prod1ToN', function () {
  it('should return 6 when n = 3', function () {
    assert.equal(prod1toN(3), 6)
  })
  it('should return 24 when n = 4', function () {
    assert.equal(prod1toN(4), 24)
  })
  it('should return invalid if n is 0 or below', function () {
    assert.equal(prod1toN(-2), 'invalid')
  })
})
