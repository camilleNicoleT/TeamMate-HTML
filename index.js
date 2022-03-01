const inquirer = require('inquirer');
const fs = require('fs');

const generatePage = require('./src/page-template.js');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
// const { profile } = require('console');

const team=[];


const employeeQ = () => {
    console.log(`
    ======================
    Add a Team Member!
    =====================
    `);
  return inquirer
  .prompt([
    {
      type: 'list',
      name: 'role',
      message: "What is the employee's role? (arrows to find role, <enter> to submit)",
      choices: ['Engineer', 'Intern', 'Manager']
  },
    {
        type: 'input',
        name: 'name',
        message: 'What is the employees name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter employee name!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the employees id? (Required)',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter employee id!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the employees email? (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter employee email!');
            return false;
          }
        },
      },
    
    {  
      type: 'input',
    name: 'github',
    message: "What is the Engineer's github profile?",
    when: (input) => input.role === 'Engineer',
    validate: input => {
      if (input) {
        return true;
      } else {
        console.log('Please enter the github profile name!');
        return false;
      }
    },
  }, 
  {  
    type: 'input',
    name: 'school',
    message: "What school is the intern enrolled in? (Required)",
    when: (input) => input.role === 'Intern',
    validate: input => {
      if (input) {
        return true;
      } else {
        console.log("Please enter the intern's school");
        return false;
      }
    },
    },
    {  
    type: 'input',
    name: 'officeNumber',
    message: "What is the Manager's office number?",
    when: (input) => input.role === 'Manager',
    validate: input => {
      if (input) {
        return true;
      } else {
        console.log('Please enter the office number for Manager');
        return false;
      }
    },
  },
{
    type: 'confirm',
    name: 'confirmAdd',
    message: 'Would you like to enter another employee?',
    default: false
  },
])

.then(employeeData => {
 var { role, name, id, email, github, school, officeNumber, confirmAdd} = employeeData;
 var employee;
  if (role ==='Engineer') {
    employee = new Engineer (name, id, email, role, github);
    
  } else if (role === 'Intern') {
    employee = new Intern (name, id, email, role, school);
  } 
  else if (role === 'Manager') {
    employee = new Manager (name, id, email, role, officeNumber);
  }


team.push(employee)
console.log(employee);


if (confirmAdd) {
  return employeeQ();
} else{
  return team;
}

});
}
const writeFile = fileInfo => {
  return new Promise((resolve,reject) => {
    fs.writeFile('./dist/createdindex.html', fileInfo, err => {
      if (err) {
        reject(err)
        return;
      }
      resolve({
        ok:true,
        message: "Your page has been created!"
      })
    })
  })
};
const copyFile = ()=> {
  return new Promise((resolve,reject) => {
    fs.copyFile('./src/style.css', './dist/style.css', err=> {
      if (err) {
        reject(err)
        return;
      }
      resolve({
        ok:true,
        message: "CSS file copied!"
      })
    })
  })
}
employeeQ()  
    .then(team => {
      return generatePage(team);
    })
  .then(pageHTML => {
    return writeFile(pageHTML)
  }) 
  .then (writeFile => {
    console.log(writeFile)
    return copyFile();
  })
  .then (copyFile => {
    console.log(copyFile);
  })
  .catch (err => {
    console.log(err);
  });

