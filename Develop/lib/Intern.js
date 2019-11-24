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

test4 = new Intern("dwayne",2, "dw@wayne.gov", "LUC")
test4.getSchool()
test4.getRole()

module.exports = Intern