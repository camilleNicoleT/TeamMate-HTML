const Employee = require('../lib/Employee');

test('Create an Employee', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
});

test('takes in information',() => {
    const name = 'cam';
    const idNumber = 50;
    const emailTest = 'cam@gmail.com';

    const employee = new Employee('cam', 50, 'cam@gmail.com');
   
    expect(employee.name).toBe(name);
    expect(employee.id).toBe(idNumber);
    expect(employee.email).toBe(emailTest);
  });



