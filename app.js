Manager = require("./develop/lib/Manager.js");
Intern = require("./Develop/lib/Intern.js");
Engineer = require("./Develop/lib/Engineer.js");
Employee = require("./Develop/lib/Employee.js");
inquirer = require("inquirer");

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
                    name: "office"
                    }
                ])
                .then(response => {
                    console.log("you are a manager and your room number is  " + response.office)
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
                    console.log (answers.name +answers.id + response.hubname)
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

                    console.log(newIntern)
                })
        }
    })