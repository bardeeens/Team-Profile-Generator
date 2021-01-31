
const managerQuestions = [
    {
        type: 'input',
        message: 'What is the name of your team manager?',
        name: 'name',
    },
    {
        type:'input',
        message:`What is their employee ID number?`,
        name:'id'
    },
    {
        type:'input',
        message:`What is their email address?`,
        name:'email'
    },
    {
        type:'input',
        message:"What is their office number?",
        name:"officeNumber"
    },
    {
        type:'confirm',
        message:"Are they any other employees to add?",
        name:"moreEmployees"
    }
];

const internQuestions = [
    {
        type: 'input',
        message: `What is the intern's name?`,
        name: 'name',
    },
    {
        type:'input',
        message:`What is their employee ID number?`,
        name:'id'
    },
    {
        type:'input',
        message:`What is their email address?`,
        name:'email'
    },
    {
        type:'input',
        message:"What school do they attend?",
        name:"school"
    },
    {
        type:'confirm',
        message:"Are they any other employees to add?",
        name:"moreEmployees"
    }
];

const engineerQuestions = [
    {
        type: 'input',
        message: `What is the engineer's name?`,
        name: 'name',
    },
    {
        type:'input',
        message:`What is their employee ID number?`,
        name:'id'
    },
    {
        type:'input',
        message:`What is their email address?`,
        name:'email'
    },
    {
        type:'input',
        message:"What is their Github username?",
        name:"github"
    },
    {
        type:'confirm',
        message:"Are they any other employees to add?",
        name:"moreEmployees"
    }
];

const employeeTypeQuestion = [
    {
        type:'list',
        name:"employeeType",
        choices:["Engineer", "Intern", "Manager"],
        message:"What type of employee would you like to add?"
    }
];

module.exports = {
    managerQuestions,
    internQuestions,
    engineerQuestions,
    employeeTypeQuestion
}