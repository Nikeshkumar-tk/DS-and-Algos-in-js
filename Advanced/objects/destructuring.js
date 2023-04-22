/*                                         Object Destructuring
                                           --------------------


   Syntax : 
      
            const {key1, key2} = objectName  

  -----------------------------------------------------------------------------------------------------------------------------------
  | - Object destructuring is a way to extract properties from an object and assign them to variables.                                |
  | - The object destructuring is done using the curly braces({}).                                                                    |
  | - The object destructuring is done by assigning the object to a variable.                                                         |
  | - By object destructuring, we can access keys without using the dot notation.                                                     |
  | - It will copy the variables from the object to the variable.So that we can use them even if they are removed from object later.  |
  |                                                                                                                                   |
  -------------------------------------------------------------------------------------------------------------------------------------

  */

//Example :

const person = {
    username: "John",
    age: 30,
}

const {username,age} = person

console.log("Printing destructured values :  ", username, age)

// Output : 
// Printing destructured values : John 30