const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

function createCards(team) {
    let cards = []
    for(let i = 0; i < team.length; i++) {
        const teamInfo = team[i];
        switch(teamInfo.getTitle()) {
            case 'Manager':
                const manager = new Manager(teamInfo.name, teamInfo.id, teamInfo.email, teamInfo.officeNum);
                cards.push(createManagerCard(manager));
                break;
            case 'Engineer':
                const engineer = new Engineer(teamInfo.name, teamInfo.id, teamInfo.email, teamInfo.github);
                cards.push(createEngineerCard(engineer));
                break;
            case 'Intern':
                const intern = new Intern(teamInfo.name, teamInfo.id, teamInfo.email, teamInfo.school);
                cards.push(createInternCard(intern));
                break;
        }
    }
    return cards.join(``)
};

let createManagerCard = (Manager) => {
    return `
    <div class="card m-2" style="width: 20rem">
        <div class="card-header bg-info">
            <h6 class="card-text">${Manager.getTitle()}</h6>
            <h3 class="card-title">${Manager.getName()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID:${Manager.getId()}</li>
                <li class="list-group-item">Email:${Manager.getEmail()}</li>
                <li class="list-group-item">Office Number:${Manager.getOfficeNum()}</li>
            </ul>
        </div>
    </div>
    `
};

let createEngineerCard = (Engineer) => {
    return `
    <div class="card m-2" style="width: 20rem">
        <div class="card-header bg-info">
            <h6 class="card-text">${Engineer.getTitle()}</h6>
            <h3 class="card-title">${Engineer.getName()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID:${Engineer.getId()}</li>
                <li class="list-group-item">Email:${Engineer.getEmail()}</li>
                <li class="list-group-item">Github:${Engineer.getGithub()}</li>
            </ul>
        </div>
    </div>
    `
};

let createInternCard = (Intern) => {
    return `
    <div class="card m-2" style="width: 20rem">
        <div class="card-header bg-info">
            <h6 class="card-text">${Intern.getTitle()}</h6>
            <h3 class="card-title">${Intern.getName()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID:${Intern.getId()}</li>
                <li class="list-group-item">Email:${Intern.getEmail()}</li>
                <li class="list-group-item">School:${Intern.getSchool()}</li>
            </ul>
        </div>
    </div>
    `
};

function teamTemplate(team) {
    console.log(team)
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <title>Team Organizer</title>
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid bg-primary">
        <div class="container">
            <h1 class="display-4 text-center">Team Organizer</h1>
        </div>
    </div>
    <div class="d-flex flex-row flex-wrap justify-content-center">
    ${createCards(team)}
    </div>
    </body>
    </html>
    `
};

module.exports = teamTemplate;

