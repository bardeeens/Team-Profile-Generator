const inquirer = require('inquirer');
const fs = require('fs');
// const questions = require('./questions')
// console.log(questions);

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your team manager?',
            name: 'manager',
        },
        {
            type:'input',
            message:`What is their employee ID number?`,
            name:'idNum'
        },
        {
            type:'input',
            message:`What is their email address?`,
            name:'email'
        },
        {
            type:'input',
            message:"What is their office number?",
            name:"officeNum"
        },
        {
            type:'confirm',
            message:"Are they any other employees to add?",
            name:"moreEmployees"
        },
        ])
        .then((response) =>
        {
            console.log(response.manager);
        }
        
        )

        // {
        //     type:'list',
        //     name:"employeeType",
        //     choices:["Engineer", "Intern", "Fluffer"],
        //     message:"What is their role?",
        //     when: (response) => response.moreEmployees === true,
        // },
