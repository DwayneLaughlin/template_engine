Manager = require("./develop/lib/Manager.js");
Intern = require("./Develop/lib/Intern.js");
Engineer = require("./Develop/lib/Engineer.js");
Employee = require("./Develop/lib/Employee.js");
inquirer = require("inquirer");
fs = require("fs");

devTeam = [];



inquirer
    .prompt([
        {
            type: "input",
            message:"What is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "what is your email address?",
            name: "email"
        },
        
        {
            type: "input",
            message: "What is your ID?",
            name: "id"
        },
        {
            type: "list",
            message: "Select your role",
            name: "role",
            choices: ["Manager", "Engineer", "Intern"]
        }, 
    ])

    .then(answers => {
        if (answers.role === "Manager"){
            inquirer
                .prompt([
                    {
                    type: "input",
                    message:"What is your office number?",
                    name: "officenum"
                    }
                ])
                .then(response => {
                    const newManager = new Manager (answers.name, answers.id, answers.email, response.officenum)
                    devTeam.push(newManager)
                    // console.log(devTeam)
                })
        } else if (answers.role === "Engineer"){
            inquirer
                .prompt([
                    {
                    type: "input",
                    message: "What is your GitHub Username?",
                    name: "hubname"
                    }
                ])
                .then(response => {
                    const newEngineer = new Engineer (answers.name, answers.id, answers.email, response.hubname)
                    devTeam.push(newEngineer)

                    engineerString = JSON.stringify(newEngineer)
                    
                    // fs.appendFile("./Develop/templates/main.html", engineerString, function(err) {
                    //     if (err) throw err;
                    // })
                })
        } else {
            inquirer
                .prompt ([
                    {
                        type:"input",
                        message: "What school do you go to?",
                        name: "schoolname"
                    }
                ])
                .then (response => {
                    const newIntern = new Intern (answers.name, answers.id, answers.email, response.schoolname)
                    internString = JSON.stringify(newIntern)
                    devTeam.push(newIntern)
                    
                    // fs.appendFile("./Develop/templates/main.html", internString, function(err) {
                    //     if (err) throw err;
                    // })
                
                })
                
        }
    })

    fs.appendFile("./Develop/templates/main.html",devTeam,function(err) {
        if (err) throw err;
    })

    