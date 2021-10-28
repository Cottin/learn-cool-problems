import assert from 'assert'
import { sum1toN } from './sum1toN.js'

describe('sum1toN', () => {
  it('returns the sum of 1,...,n', () => {
    const response = sum1toN(80)
    assert.equal(response, 3240)
  })

  it('returns -1 for 0', () => {
    const response = sum1toN(0)
    assert.equal(response, -1)
  })

  it('returns -1 for negative numbers', () => {
    const response = sum1toN(-34)
    assert.equal(response, -1)
  })
})