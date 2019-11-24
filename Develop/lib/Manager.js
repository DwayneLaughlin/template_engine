const Employee = require("./Employee")

class Manager extends Employee{
    constructor(name, id, email, officeNumber, role,){
        super(name, id, email)

        this.officeNumber = officeNumber;
        this.role = "Manager";
        
    }

    getOfficeNumber(){
        return this.officeNumber
    }

    getRole(){
        console.log(this.role)
        return this.role
    }
}

test4 = new Manager("",1, "", 29)
test4.getOfficeNumber()
test4.getRole()

module.exports = Manager