const Engineer = require('../lib/Engineer');

test('Create an Engineer', () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe('object');
});

test('Saves role information',() => {
    const role = 'Engineer'
    const github = 'camGitHub'

    const engineer = new Engineer('cam', 50, 'cam@gmail.com', 'Engineer', 'camGitHub');
    expect(engineer.role).toBe(role);
    expect(engineer.github).toBe(github);
  });

  test ('getRole() should return "Engineer"', () => {
    const role = 'Engineer';
    const engineer = new Engineer('cam', 50, 'cam@gmail.com', role);
    expect(engineer.getRole()).toBe(role);
});

// test('Retrieve github with github()', () => {
//     const github = 'camGithub';
//     const engineer = new Engineer('cam', 50, 'cam@gmail.com', 'Engineer', github);
//     expect(engineer.github()).toBe(github);
// });
