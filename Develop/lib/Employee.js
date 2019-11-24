class Employee {
    constructor(name, id, email, role){
    this.name = name;
    this.id =id;
    this.email = email;
    this.role = "Employee"; 
    }

    getName(){
        console.log (`${this.name}`);
        return this.name;
    }
    getId() {
        console.log (this.id);
        return this.id;
        
    }
    getEmail() {
        console.log (this.email);
        return this.email;
    }

    getRole(){
        console.log(this.role);
        return this.role;
    }
}



var tester = new Employee("steve", 7, "steve@steve.com");
var tester2 = new Employee("jeff", 1, "jeff@jeff.com")

tester.getEmail()
tester2.getName()
tester.getId()
tester.getRole()


module.exports = Employee