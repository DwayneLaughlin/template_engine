manager = require("./develop/lib/manager");
intern = require("./Develop/lib/Intern");
engineer = require("./Develop/lib/Engineer");
employee = require("./Develop/lib/Employee");
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
                    console.log("you are an intern and you currently attend " + response.schoolname)
                })
        }
    })