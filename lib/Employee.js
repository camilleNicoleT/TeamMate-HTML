const inquirer = require('inquirer');

class Employee{
    constructor(name = '', id, email, role) {
    
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
}
// getName() {
//     return this.name;
// }
};
module.exports = Employee;