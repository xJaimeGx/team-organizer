const { test, expect } = require('@jest/globals');
const { describe } = require('yargs');
const Engineer = require('../lib/engineer.js');

describe('Engineers', () => {
  describe('Generated', () => {
    it('Show an object, name and id', () => {
      const engineer = new Engineer('Ray', 222)
        expect(engineer.name).toEqual('Ray')
        expect(engineer.id).toEqual(222)
    })
  })
});