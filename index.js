const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const fs = require('fs');
const teamTemplate = require('./src/teamTemplate');

team = [];
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
    .then((managerResponses) => {
        const manager = new Manager(managerResponses.name, managerResponses.id, managerResponses.email, managerResponses.officeNum)
        team.push(manager)
        switch(managerResponses.newMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
                writeToFile('dist/index.html', teamTemplate(team))
        }
    });
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
    .then((engineerResponses) => {
        const engineer = new Engineer(engineerResponses.name, engineerResponses.id, engineerResponses.email, engineerResponses.github)
        team.push(engineer)
        switch(engineerResponses.newMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
                writeToFile('dist/index.html', teamTemplate(team))
        }
    });
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
    .then((internResponses) => {
        const intern = new Intern(internResponses.name, internResponses.id, internResponses.email, internResponses.school)
        team.push(intern)
        switch(internResponses.newMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
                writeToFile('dist/index.html', teamTemplate(team))
        }
    });
};

managerQuestions();

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('File was saved successfully!')
    });
};