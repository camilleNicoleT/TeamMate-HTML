const Manager = require('../lib/Manager');

test('Create an manager', () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe('object');
});

test('Save information',() => {
    const role = 'Manager';
    const officeNumber = '2123546670';
    const manager = new Manager('Manager', '2123546670');
 
    expect(manager.role).toBe(role);
    expect(manager.officeNumber).toBe(officeNumber);
  });

