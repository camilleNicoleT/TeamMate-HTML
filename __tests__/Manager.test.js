const Manager = require('../lib/Manager');

test('Create a manager', () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe('object');
});

test('Save information',() => {
    const role = 'Manager';
    const officeNumber = '2123546670';
    const manager = new Manager('cam', 50, 'cam@gmail.com', 'Manager', '2123546670');
 
    expect(manager.role).toBe(role);
    expect(manager.officeNumber).toBe(officeNumber);
  });

  test ('getRole() should return Manager', () => {
    const role = 'Manager';
    const manager = new Manager('cam', 50, 'cam@gmail.com', role);
    expect(manager.getRole()).toBe(role);
});

