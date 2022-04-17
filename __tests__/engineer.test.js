const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/engineer.js');

test('Shows an object with name and id', () => {
    const engineer = new Engineer(222, 'Ray')
      expect(engineer.name).toEqual('Ray')
      expect(engineer.id).toEqual(222)
      expect(engineer.email).toEqual("ray@gmail.com")
});