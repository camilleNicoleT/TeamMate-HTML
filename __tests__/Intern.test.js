const Intern = require('../lib/Intern');

test('Create an intern', () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe('object');
});

test('Save information',() => {
    const role= 'Intern';
    const school = 'Columbia';

    const intern = new Intern('cam', 50, 'cam@gmail.com', 'Intern', 'Columbia');
 
    expect(intern.role).toBe(role);
    expect(intern.school).toBe(school);
  });

test ('getRole() should return "Intern"', () => {
    const role = 'Intern';
    const intern = new Intern('cam', 50, 'cam@gmail.com', role);
    expect(intern.getRole()).toBe(role);
});

test('Retrieve school with getSchool()', () => {
    const school = 'Columbia';
    const intern = new Intern('cam', 50, 'cam@gmail.com', 'Intern', school);
    expect(intern.getSchool()).toBe(school);
})