const inquirer = require('inquirer');
const fs = rquire('fs');
const Manager = require('./lib/manager');

const managerQuestions = () => {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the name of the manager?',
        },

        {
            name: 'id',
            type: 'input',
            message: 'What is id of the manager?',
        },

        {
            name: 'email',
            type: 'input',
            message: 'What is the email address of the manager?',
        },

        {
            name: 'officeNum',
            type: 'input',
            message: 'What is the office number of the manager?',
        },

        {
            name: 'newMember',
            type: 'list',
            message: 'What is the title of the new member?',
            choices: ['Engineer', 'Intern', 'I will not be adding any members'],
        }
    ])
    
};

managerQuestions();