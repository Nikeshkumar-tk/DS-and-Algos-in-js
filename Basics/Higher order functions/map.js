/*                                       map function in javascript
                                         ---------------------------

Syntax : 

   const modifiedArray = arrayName.map((element of array) => {
     array element is modified here and returned
     })

 - map is a higher order function in javascript that allows us to loop through the array.
 - It returns a new array with modified values for each elements
 - It doesnot modify the original array.Instaed, it returns a new array with modified value.
 - The map() function can be used with a wide range of functions, including arrow functions and named functions, which allows for 
   greater flexibility in our code.
   
*/

//Example : 
//Here we are modifying the array by multiplying each element of the array by 2

const array = [1,2,3,4,5,6,7,8,9]

const modifiedArray = array.map((number) => {
  return number * 2
})

console.log(modifiedArray)

