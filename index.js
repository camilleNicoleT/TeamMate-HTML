const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown.js');
// const copyFile = require('./utils/generateMarkdown.js');


//Manager function
//Separate prompts by employee role 
//at end creation of manager do you want to create another employee

const questions = () => {
    console.log(`
    =============================================
    Answer these questions to create your Team!
    =============================================
    `);
  return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your name? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter your name!');
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
              
        ]
    },
  ]);