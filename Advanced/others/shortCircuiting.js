/*                                         Short circuiting in js
                                           ----------------------


   Syntax : 
      
            condition1 && condition2
            condition1 || condition2  

  -----------------------------------------------------------------------------------------------------------------------------------
  | - Shortcircuiting is used to simplify complex condition checkings                                                                 |
  | - It can be implemented using AND(&&) or OR(||) operators                                                                         |
  | - It makes our code looks more cleaner                                                                                            |
  | - When implemented using && condition2 is executed only if condition1 is true                                                     |
  | - When implemented using || condition2 is executed even if condition1 is false                                                    |
  |                                                                                                                                   |
  -------------------------------------------------------------------------------------------------------------------------------------

  */

//Example using && operator :

const language = "javascript"

const result = language === "javascript" && "I love javascript"

console.log(result)

// Output : 
// I love javascript


//Example using || operator :

const age = 18

if(age === 18 || age > 18){
    console.log("You are eligible to vote")
}

// Output :
// You are eligible to vote