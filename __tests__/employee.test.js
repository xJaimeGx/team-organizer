const { test, expect } = require('@jest/globals');
const { describe } = require('yargs');
const Employee = require('../lib/employee.js');

describe('Employees', () => {
  describe('Generated', () => {
    it('Show an object, name and id', () => {
      const employee = new Employee('Susan', 111)
        expect(employee.name).toEqual('Susan')
        expect(employee.id).toEqual(111)
    })
  })
});