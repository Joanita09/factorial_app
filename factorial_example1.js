//Group Members - Daniel, Cathy, Joanita


//Mocha is a testing framework that runs on node js 
//Chai is an assert library, which facilitate invidual tests

//Carry out a test last approach for factorials for a number passed as a parameter
//Fn = n x (n-1)!

//Create the function factorialize


function factorialize(num){
    var result = 1;
 for (var i = 1; i <= num; i++){
     result = result * i;
 }
    return result;
}

//factorialize(3);
console.log(factorialize(3));

module.exports = factorialize;
