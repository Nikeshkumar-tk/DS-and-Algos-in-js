/*                                          switch statement in javascript
                                            ------------------------------

  Syntax : 

                 switch(caseContant){

                 case value1:
                      block of code 1
                 case value2:
                      block of code 2
                 else:
                      else block of code
                 }

  - Switch is a multiway decision making statement in javascript
  - it checks the given caseConstant given in the parentheses followed by switch keyword with all the given values
  - When a match is found the corresponding block of code is executed

*/


const food = "apple"

switch(food){
  case "apple":
    console.log("The food is a fruit")
  case "carrot":
    console.log("The food is a vegetable")
}