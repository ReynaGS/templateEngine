const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { create } = require("domain");


var employeeList = []; 

// function to create instances of a class depending of employee
function createEmployee (answers)
 {
    if(answers.select_role==="Manager")
    {
        var newManager = new Manager(answers.name,answers.id, answers.email, answers.officeNumber)
        employeeList.push(newManager);
    }
    else if(answers.select_role==="Engineer")
    {
        var newEngineer = new Engineer(answers.name,answers.id, answers.email,answers.github)
        employeeList.push(newEngineer);
    }
    else if(answers.select_role==="Intern")
    {
        var newIntern = new Intern(answers.name,answers.id, answers.email, answers.school)
        employeeList.push(newIntern);

    }
    
 }
//Functions to know what question to ask if it is a manager, engineer or intern. 
function isManager(answers)
{ if(answers.select_role==="Manager")
    {
        return true
    }
  else
    {   return false
    
    }

};
function isEngineer(answers)
{ if(answers.select_role==="Engineer")
    {
        return true
    }
  else
    {   return false
    
    }

};

function isIntern(answers)
{ if(answers.select_role==="Intern")
    {
        return true
    }
  else
    {   return false
    
    }

};
//---------------------------------------------

// Array of objects with questions for inquierer. 

var initialQuestions =[ 
    { 
        name: "select_role" , 
        type: "list" , 
        message: "What kind of employee would you like to add? ",
        choices: ["Manager", "Engineer" , "Intern"],
    }, 
    {
        name: "name", 
        type:  "input" ,
        message: "What is the employee's name?",      
    },
    {
        name: "id", 
        type:  "input" ,
        message: "What is the employee's ID?",      
    },
     {
        name: "email", 
        type:  "input" ,
        message: "What is the employee's email?",      
    },
    {
        name: "officeNumber", 
        type:  "input" ,
        message: "What is the Manager's office number?", 
        when: isManager,    
    },
    {
        name: "github", 
        type:  "input" ,
        message: "What is the Engineer's gitHub username?", 
        when: isEngineer,    
    },
    {
        name: "school", 
        type:  "input" ,
        message: "What school does the intern goes to ?", 
        when: isIntern,    
    },

    {
        name: "ask_again",
        type: "confirm", 
        message: "Would you like to add another employee?"
    }

]; 
// Write code to use inquirer to gather information about the development team members,
function questionMenu ()
 {
    inquirer.prompt(initialQuestions).then
    (function(answers)
        {
            console.log(answers); 
             createEmployee(answers);

        if(answers.ask_again===true)
        {
          // create instance depending of type and save to array
            questionMenu();
        }
        else
        {
            // create html from imput
            console.log(employeeList);
            var rendering = render(employeeList); 
            fs.writeFileSync(outputPath,rendering); 

        }
        }
    
    );
 }
 questionMenu(); 
 






// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
