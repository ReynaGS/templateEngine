// TODO: Write code to define and export the Employee class
class Employee{
    constructor(nombre, identificador, correoE){
        this.name = nombre;
        this.id= identificador;
        this.email= correoE;
        this.getName = function(){
            return this.name;
        } 
        this.getId = function(){
            return this.id;
        }
        this.getEmail = function(){
            return this.email;
        }
        this.getRole = function(){
            return "Employee"
        }

    }
}
module.exports=Employee; 