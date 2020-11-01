// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(ingNombre, ingIdentificador, ingEmail,ingGitHub) 
    {
        super(ingNombre, ingIdentificador, ingEmail);

       this.github= ingGitHub;
    }

    getGithub()
    {
    
        return this.github; 

    };
    getRole()
    {
        return "Engineer";
    }
     
}

module.exports=Engineer; 

//  * github  // GitHub username

//   * getGithub()
