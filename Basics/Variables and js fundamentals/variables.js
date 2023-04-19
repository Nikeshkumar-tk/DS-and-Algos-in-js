// ***********************************************  Variables in javascript ****************************************************************

//In programming variables are used for identifying memory locations
//The way variables are declared and used depends up on the programming language that we are dealing with.
// In javascript variables are declared using the keywords var, let and const

//Variable declaration using let
//Variables declared using let have block scope
//we can reassign values to that variables within its scope
//The below example will print "Typescript" in the console, since we are reassigning the string "Typescript to the variable name"

let name = "Javascript"
name = "Typescript"
console.log(name)


//Variable declaration using var
//We can reassign values to the variables declared in var

var language = "javascript"
language = "Typescript"
console.log(language)

//Variable declaration using const
//We cannot reassign values to the variables declared in const

const framework = "react"
// framework = "vue"
//Uncommenting above line will create an error "Cannot redeclare block scopr variables"
console.log(framework)


