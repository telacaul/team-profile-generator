const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager')

test('create new manager object', () => {
    const manager = new Manager('Brian');
});

test('get manager phone number', () => {
    const randomPhone = 1111;
    const manager = new Manager('Brian', 1234, 'manager@yahoo.com', randomPhone);

    expect(manager.phone).toBe(randomPhone);
});

// testing getPhoneNumber() function
test('use getPhoneNumber function', () => {
    const randomPhone = 1111;
    const manager = new Manager('Brian', 1234, 'manager@yahoo.com', randomPhone);

    expect(manager.getPhoneNumber()).toBe(randomPhone);
});

test('get manager role info', () => {
    const testRole = 'Manager';
    const manager = new Manager('Brian', 1234, 'manager@yahoo.com', 1111, testRole);

    // have to use getRole function inorder to overwrite role status
    expect(manager.getRole()).toBe(testRole);
});