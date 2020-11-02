// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee
{
    constructor(managerName, managerIdentificador, managerEmail, officeNumber)
    {
        super(managerName, managerIdentificador, managerEmail,)
        this.officeNumber = officeNumber;
    }

    getRole()
    {
        return "Manager"; 
    }
    getOfficeNumber()
    {
        return this.officeNumber; 
    }

}
module.exports=Manager; 
