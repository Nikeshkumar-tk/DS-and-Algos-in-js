/*                           Objects in javascript
                            -----------------------

Syntax :
       
         const objectName = {
              key1 : value1,
              key2 : value2,
         }


*/

//Example :

const person = {
  name: "John",
  age: 30,
};

console.log(person);

//Output : {name: "John", age: 30}

/*                  Accessing the values of the object     
                    -----------------------------------
  
    - We can access the values of the object by using the dot notation or square bracket notation.
    - The dot notation is used when we know the key of the object.
    - The square bracket notation is used when we don't know the key of the object.
    - The square bracket notation is also used when the key of the object is a variable, string or a number.
    
*/

//Example :
const student = {
  name: "John",
  age: 30,
};

//Accessing the value of the object using dot notation
console.log("Acessing value using dot operator : ",student.name);
//Output : John

//Accessing the value of the object using square bracket notation
const key = "name";
console.log("Acessing value using square bracket operator : ",student[key]);
//Output : John

