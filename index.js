const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

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

const engineerQuestions = () => {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the name of the engineer?',
        },

        {
            name: 'id',
            type: 'input',
            message: 'What is id of the engineer?',
        },

        {
            name: 'email',
            type: 'input',
            message: 'What is the email address of the engineer?',
        },

        {
            name: 'github',
            type: 'input',
            message: 'What is the github username of the engineer?',
        },

        {
            name: 'newMember',
            type: 'list',
            message: 'What is the title of the new member?',
            choices: ['Engineer', 'Intern', 'I will not be adding any members'],
        }
    ])
    
};

const internQuestions = () => {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the name of the intern?',
        },

        {
            name: 'id',
            type: 'input',
            message: 'What is id of the intern?',
        },

        {
            name: 'email',
            type: 'input',
            message: 'What is the email address of the intern?',
        },

        {
            name: 'school',
            type: 'input',
            message: 'What school did the intern attend?',
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

