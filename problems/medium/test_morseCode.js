import assert from 'assert'
import { morseCode } from './morseCode.js'

describe('morseCode', () => {
  it('converts English text to Morse code and returns a string', () => {
    const response = morseCode('svelte is better than react')
    assert.equal(response, '... ...- . .-.. - .  .. ...  -... . - - . .-.  - .... .- -.  .-. . .- -.-. -')
  })
})