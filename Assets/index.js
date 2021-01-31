const inquirer = require('inquirer');
const fs = require('fs');
const team = require('../Develop/src/page-template.js')
let employeeCount = 1

let managerCreation = function (boss) {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${boss.manager}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${boss.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${boss.email}}">${boss.email}</a></li>
            <li class="list-group-item">Office number: ${boss.officeNum}}</li>
        </ul>
    </div>
</div>
    `;
}

function managerQuestions(){
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
            name:'id'
        },
        {
            type:'input',
            message:`What is their email address?`,
            name:'manageremail'
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
        .then((boss) =>
        {
            if (boss.moreEmployees){
                employeeCount++
            }
            else {
                console.log(`There is just one person in your team!`);
                writePage(boss);
            }
            console.log(boss);
            managerCreation(boss);
            
        }
        
        )
        
    }
    
function employeeType(){
    inquirer
        .prompt(
    {
        type:'list',
        name:"employeeType",
        choices:["Engineer", "Intern", "Fluffer"],
        message:"What is the employee's title?"
    },
        )
        .then((which) =>
        {
            switch (which.employeeType) {
                case "Engineer":
                    engineer();
                    break;
                case "Intern":
                    intern();
                    break;
                default:
            }
        }
        
        )
        
}

function engineer(){
    inquirer
        .prompt([
            {
                type: 'input',
                message: `What is the engineer's name?`,
                name: 'name',
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
                message:"What is their Github username?",
                name:"github"
            },
            {
                type:'confirm',
                message:"Are there any more employees to add?",
                name:"moreEmployees"
            }
        ])
        .then((engineer) =>{
            if (engineer.moreEmployees){
                employeeType();
                employeeCount++
            }
            else {
                console.log(`You have ${employeeCount} people in your team!`);
                writePage();
            }
            empCreation(engineer);  
        })
}
    

function intern(){
    inquirer
    .prompt([
        {
            type: 'input',
            message: `What is the intern's name?`,
            name: 'name',
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
            message:"What school do they attend?",
            name:"school"
        },
        {
            type:'confirm',
            message:"Are there any more employees to add?",
            name:"moreEmployees"
        }
    ])
    .then((intern) =>{
        if (intern.moreEmployees){
            employeeType();
            employeeCount++
        }
        else {
            console.log(`There are ${employeeCount} people in your team!`);
            writePage();
        }
        empCreation(intern)   
    })
}

function writePage(boss){
    fs.writeFile("index.html", managerCreation(boss), (error) => {
        if (error){
          console.log(error);
        } else {
            console.log("README successfully generated!");
        }
      })
    
}
    
    
    
    
    
    
    
    
    managerQuestions();


        
        // {
        //     type:'confirm',
        //     message:"Are they any other employees to add?",
        //     name:"moreEmployees"
        // },
        
        // {
        //     type:'list',
        //     name:"employeeType",
        //     choices:["Engineer", "Intern", "Fluffer"],
        //     when: (response) => response.moreEmployees === true,
        // },
//         inquirer
//         .prompt(
    
//         )
//         .then((which) =>{
//             console.log(which);
//         })
// }

