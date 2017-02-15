var vows = require('vows'),
    assert = require('assert')

vows.describe('A Sample Test').addBatch({
  'A Test': {
    topic: 1,
    'is 1': function(number){
      assert.equal(number, 1)
    }
  }
}).export(module);
