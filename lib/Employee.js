// TODO: Write code to define and export the Employee class

// create parent class with its properties. 
class Employee{
    constructor(nombre, identificador, correoE){
        this.name = nombre;
        this.id= identificador;
        this.email= correoE;
    }
    // Create methods. 
        getName(){
            return this.name;
        } 
        getId(){
            return this.id;
        }
        getEmail(){
            return this.email;
        }
        getRole(){
            return "Employee";
        }
}
// Export class. 
module.exports=Employee; 