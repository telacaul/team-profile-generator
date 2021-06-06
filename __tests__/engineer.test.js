const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('create an engineer object', () => {
    const engineer = new Engineer('Jack');
});

test('input a github account for engineer', () => {
    const githubTest = 'santosGit';
    const engineer = new Engineer('Jack', 1234, 'engineer@yahoo.com', githubTest);

    expect(engineer.github).toBe(githubTest);
});

// testing getGitHub() function
test('get the github info with function', () => {
    const githubTest = 'santosGit';
    const engineer = new Engineer('Jack', 1234, 'engineer@yahoo.com', githubTest);

    expect(engineer.getGitHub()).toBe(githubTest);
})

// getRole section
test('get Engineer role info', () => {
    const testRole = 'Engineer';
    const engineer = new Engineer('Jack', 1234, 'engineer@yahoo.com', 'santosGit', testRole);

    expect(engineer.getRole()).toBe(testRole);
});