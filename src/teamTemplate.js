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



