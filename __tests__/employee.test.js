const { test, expect } = require('@jest/globals');
const { getMaxListeners } = require('process');
const Employee = require('../lib/employee.js');

test('Shows an object with name and id', () => {
    const employee = new Employee(111, 'Susan')
      expect(employee.name).toEqual('Susan')
      expect(employee.id).toEqual(111)
      expect(employee.email).toEqual("sus@gmail.com")
});