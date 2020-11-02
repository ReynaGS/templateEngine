// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// Import parent class
const Employee = require("./Employee");

// create class extending from employee
class Engineer extends Employee {

    constructor(ingNombre, ingIdentificador, ingEmail,ingGitHub) 
    {
        //Call parent constructor WITH its PARAMS. 
        super(ingNombre, ingIdentificador, ingEmail);

        //Add extra properties that are unique to this new class. 
       this.github= ingGitHub;
    }

    getGithub()
    {
    
        return this.github; 

    };
    // note that there are 2 methods with same name, this would override the method on parent class. 
    getRole()
    {
        return "Engineer";
    }
     
}

module.exports=Engineer; 

//  * github  // GitHub username

//   * getGithub()
