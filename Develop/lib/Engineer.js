const Employee = require("./Employee")
class Engineer extends Employee {
    
    constructor(name, id, email, github, role){
    super(name, id, email, role)
    
    this.github = github;
    this.role = "Engineer"
    }

    getGithub() {
        return this.github
        console.log(this.getGithub)
    }

    getRole(){
        return this.role
        console.log(this.role)
    }
}




module.exports = Engineer
    