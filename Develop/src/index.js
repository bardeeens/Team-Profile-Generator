const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const generate = require("./page-template")
let team = []

// const questions = require('Develop\src\questions.js');
const { managerQuestions, internQuestions,
     engineerQuestions, employeeTypeQuestion } = require('./questions');

     const writeThatPage = () => {
        fs.writeFileSync('index.html',generate(team))
    }


function employeeType(){
    inquirer
        .prompt(employeeTypeQuestion)
        .then((which) =>{
            switch (which.employeeType) {
                case "Engineer":
                    engineer();
                    break;
                case "Intern":
                    intern();
                    break;
                case "Manager":
                    manager();
                default:
            }
        })
}

let manager = () => {
    inquirer
        .prompt(managerQuestions)
        .then((response) => {
        let manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        team.push(manager)
        if (response.moreEmployees){
            employeeType();
        }
        else {
        writeThatPage();
        }

    })
};

let intern = () => {
    inquirer
        .prompt(internQuestions)
        .then((response) => {
        let intern = new Intern(response.name, response.id, response.email, response.school);
        team.push(intern)
        if (response.moreEmployees){
            employeeType();
        }
        else {
            writeThatPage();
            }

    })
};

let engineer = () => {
    inquirer
        .prompt(engineerQuestions)
        .then((response) => {
        let engineer = new Engineer(response.name, response.id, response.email, response.github);
        team.push(engineer)
        if (response.moreEmployees){
            employeeType();
        }
        else {
            writeThatPage();
            }

    })
};





employeeType();
    