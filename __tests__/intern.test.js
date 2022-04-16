const { test, expect } = require('@jest/globals');
const Intern = require('../lib/intern.js');

test('Shows an object with name and id', () => {
    const intern = new Intern(333, 'Stan')
      expect(intern.name).toEqual('Stan')
      expect(intern.id).toEqual(333)
});