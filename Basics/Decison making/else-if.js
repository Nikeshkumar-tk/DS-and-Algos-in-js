/*                                           else if statement in javascript
                                             --------------------------------
Syntax
                   if(condition1){
                   
                      code block 1;
                   }else if(condition2){
                   
                      code block 2;
                      
                   }else{
                   
                       code block 2;
                       
                   }
It is similar to if statement.The only difference is that if the codition eveluates to false, the else block will be executed instead of passing the control to next line

*/

//example:

const age = 17
if(age >= 18){
  console.log("Eligible for votting")
}else{
  console.log("Not eligible for votting")
}

//The above example will print "Not elogible for votting" since the value of variable age is 17 which is less than 18
