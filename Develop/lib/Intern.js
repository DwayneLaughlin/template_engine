const Employee = require("./Employee")

class Intern extends Employee{
    constructor(name, id, email, school, role,){
        super(name, id, email)

        this.role = "Intern"
        this.school = school
    }

    getSchool(){
        console.log(this.school)
        return this.school
    }

    getRole(){
        console.log(this.role)
        return this.role
    }
}



module.exports = Intern