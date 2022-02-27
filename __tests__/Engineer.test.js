const Engineer = require('../lib/Engineer');

test('Create an Engineer', () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe('object');
});

test('Saves role information',() => {
    const role = 'Engineer';
    const github = 'camGitHub';
    const engineer = new Engineer('Engineer', 'camGitHub');
    expect(engineer.role).toBe(role);
    expect(engineer.github).toBe(github);
  });

