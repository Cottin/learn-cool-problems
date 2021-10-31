import assert from 'assert'
import tests from './even.js'


describe('even', () => {
    tests.forEach(test => {
        it("should return fail when no even numbers", () => {
            assert.deepEqual(test[0](test[1][0]), test[2])
})})}) 

/*
describe('even', () => {
    it("should return fail when no even numbers", () => {
        assert.deepEqual(tests[0][0](tests[0][1][0]), tests[0][2])
})}) 

*/