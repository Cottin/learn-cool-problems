import assert from 'assert'
import {sum1toN} from './sum1toN.js'

describe('sum1toN', function() {
    it('should return 45', function() {
      assert.equal(sum1toN([9]), 45);
    });
  });