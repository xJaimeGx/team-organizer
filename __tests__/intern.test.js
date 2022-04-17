const { test, expect } = require('@jest/globals');
const { describe } = require('yargs');
const Intern = require('../lib/intern.js');

describe('Interns', () => {
  describe('Generated', () => {
    it('Show an object, name and id', () => {
      const intern = new Intern('Stan', 333)
        expect(intern.name).toEqual('Stan')
        expect(intern.id).toEqual(333)
    })
  })
});