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
        console.log(answers)
    })