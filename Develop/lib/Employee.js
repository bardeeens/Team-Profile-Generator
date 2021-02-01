class Employee{

    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getName (){
        return this.name;
    }
    
    getId = () =>  this.id;
    
    getEmail = () => this.email;
    
    getRole = () => "Employee"
    
    }
    
    // var testOB = new Employee(response.name, response.id, response.email)
    // console.log(testOB);
    // console.log(testOB.getEmail());
    
    module.exports = Employee;