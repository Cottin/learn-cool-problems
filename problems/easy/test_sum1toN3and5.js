import assert from 'assert'
import { sum1toN3and5 } from './sum1toN3and5.js'

describe('sum1toN3and5', () => {
  it('returns the product of 1,...,n', () => {
    const response = sum1toN3and5(17)
    assert.equal(response, 60)
  })
})