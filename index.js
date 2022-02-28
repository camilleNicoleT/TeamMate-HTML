const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');
const {writeFile, copyFile} = require('./src/page-template.js');
const Engineer = require('./lib/Engineer');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Intern = require('./Intern');

const employeeQ=[];
const engineerQ=[];
const managerQ=[];
const internQ=[];

const employeeQ = () => {
    console.log(`
    =============================================
    Answer these questions to create your Team!
    =============================================
    `);
  return inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
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
        type: 'checkbox',
        name: 'role',
        message: "What is the employee's role? (<a> for all, <space> to select, <enter> to submit)",
        choices: [
         ' - Engineer ',
         ' - Intern ',
         ' - Manager ',
        ]
    },
  ])
};
const engineerQ = () => {
return inquirer
.prompt([
    {  
      type: 'input',
    name: 'title',
    message: 'What is your github profile? (Required)',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter your name!');
        return false;
      }
    },
    },
      
  ])
},

const confirmAdd = () => {
    return inquirer.prompt ([
{
    type: 'confirm',
    name: 'confirmAdd',
    message: 'Would you like to enter another employee?',
    default: false
  }    
])
.then(employeeData => {
  employeeQ.answers.push(employeeData);
  if (employeeQ.confirmAdd) {
    return employeeQ();
  } else {
    return employeeQ();
  } 
});
}

function employeeInfo (answers) {
    if(answers.role ==='Engineer'){
      var engineer = new Engineer (
        answers.name,
        answers.id,
        answers.email,
        answers.role
      )
      return engineerInfo(engineer);
    } else if (answers.role ==='Manager'){
      var engineer = new Manager (
        answers.name,
        answers.id,
        answers.email,
        answers.role
      )
      return managerInfo(manager);
    } else if (answers.role ==='Intern'){
      var intern = new Intern (
        answers.name,
        answers.id,
        answers.email,
        answers.role
      )
      return internInfo(intern);
    }
}
  

function engineerInfo(engineer) { 
    return new Promise((resolve)=> {
      resolve(
        inquirer.prompt(questions.engineerQ)
        .then ((response) => {
          engineer = {...engineer, ...response};
          employeeInfo.push(engineer)
        })
      )
    })
   }
function internInfo(intern) { 
    return new Promise((resolve)=> {
      resolve(
        inquirer.prompt(internQ)
        .then ((response) => {
          intern = {...intern, ...response};
          employeeInfo.push(intern)
        })
      )
    })
   }
function managerInfo(manager) { 
    return new Promise((resolve)=> {
      resolve(
        inquirer.prompt(managerQ)
        .then ((response) => {
          manager = {...manager, ...response};
          employeeInfo.push(manager)
        })
      )
    })
   }

function start () {
  teamInfo()
}

function createTeam() {
  start()
  .then(answers => employeeInfo(answers)).then(confirm).then(response => {
    if (response.confirmed) {
      createTeam()
      return employeeInfo
    } 
    return employeeInfo
  })
  .then(employeeInfo => generatePage(employeeInfo))
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
  })
};

start();