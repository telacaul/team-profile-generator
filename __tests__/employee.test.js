const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('create new employee object', () => {
    const employee = new Employee('Tela');
});

test('get employee ID info', () => {
    const randomID = 1234;
    const employee = new Employee('Tela', randomID);

    expect(employee.id).toBe(randomID);
});

test('get employee email info', () => {
    const randomEmail = 'random@yahoo.com';
    const employee = new Employee('Tela', 2265, randomEmail);

    expect(employee.email).toBe(randomEmail);
})

test('get job role info', () => {
    const role = 'Employee';
    const employee = new Employee('Tela', 2265, role);

    expect(employee.role).toBe(role);
});