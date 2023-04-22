/*                                         Spread Operator in js
                                           ----------------------


   Syntax : 
      
           const newArray = [...previousArray]
           const newObject = {...previousObject}

  -----------------------------------------------------------------------------------------------------------------------------------
  | - Spread operator is used for spreading the previous elements of an array or an object                                            |
  | - Some of its usecases are:-                                                                                                      |
  | - Used for combining arrays.                                                                                                      |
  | - Used for copying arrays.                                                                                                        |
  | - Used for passing arguments into the function.                                                                                   |
  | - For combining objects.                                                                                                          |
  | - Modifying objects by adding new properties                                                                                      |
  -------------------------------------------------------------------------------------------------------------------------------------

  */

//Example usecase 1: Combining arrays using spread operator :

const array1 = [1, 2, 3]

const array2 = [4, 5, 6]

const combinedArray = [...array1, ...array2]

console.log(combinedArray)

// Output : 
// [ 1, 2, 3, 4, 5, 6 ]


//Example usecase 2: Copying arrays using spread operator :

const fruits = ["apple", "mango", "banana"]

const copiedFruits = [...fruits]

console.log(copiedFruits)

// Output :
// [ 'apple', 'mango', 'banana' ]


//Example usecase 3: Passing arguments into the function using spread operator :

const numbers = [1, 2, 3, 4, 5]

function sum(array){
    let sum = 0
    for(let i=0; i<array.length; i++){
        sum += array[i]
    }
    return sum
}

const result = sum(...numbers) 

console.log(result)

// Output :
// 15


//Example usecase 4: Combining objects using spread operator :

const object1 = {
    name: "John",
    age: 30
}

const object2 = {
    address: "New York",
    country: "USA"
}

const combinedObject = {...object1, ...object2}

console.log(combinedObject)

// Output :
// { name: 'John', age: 30, address: 'New York', country: 'USA' }


//Example usecase 5: Modifying objects by adding new properties using spread operator :

const person = {
    name: "John",
    age: 30
}

const modifiedPerson = {...person, address: "New York"}

console.log(modifiedPerson)

// Output :
// { name: 'John', age: 30, address: 'New York' }