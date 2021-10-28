import assert from 'assert'
import tests from './odd.js'

describe('odd', () => {
    tests.forEach(test => {
      it("should return fail when no even numbers", () => {
          assert.deepEqual(test[0](test[1][0]), test[2])
})})}) 

/*
describe("odd", () => {
  it("[1, 2, 3, 4, 5]", () => {
    tests[0][0](tests[0][1][0]), tests[0][2]
})})
*/