// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee= require('./Employee'); 

class Intern extends Employee {
    constructor(interNombre, interIdentificador, interEmail, interSchool) 
    {
     super(interNombre, interIdentificador, interEmail);  
     this.school= interSchool; 
    }
    getSchool()
    {
        return this.school;
    }
    getRole()
    {
        return "Intern"; 

    }
}
module.exports=Intern; 
