import assert from 'assert'
import { prod1toN } from './prod1toN.js'

describe('prod1toN', () => {
  it('returns the product of 1,...,n', () => {
    const response = prod1toN(9)
    assert.equal(response, 362880)
  })

  it('returns -1 for 0', () => {
    const response = prod1toN(0)
    assert.equal(response, -1)
  })

  it('returns -1 for negative numbers', () => {
    const response = prod1toN(-34)
    assert.equal(response, -1)
  })
})