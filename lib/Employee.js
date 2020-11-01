// TODO: Write code to define and export the Employee class
class Employee{
    constructor(nombre, identificador, correoE){
        this.name = nombre;
        this.id= identificador;
        this.email= correoE;
    }
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
module.exports=Employee; 