//Write a code to convert Celsius to Fahrenheit
//°F = (9/5 x °C) + 32
// 1. define variable of result and celsius value that want to convert
// 2. check if the input data type is numeric/integer
// 3. if it's a number, then convert with this formula; 9/5 celsius + 32

let celsius = 60;
let result;
if(typeof celsius === "number"){
    result = (9/5 * celsius) + 32
}
 console.log(result);


// Write a code to check whether the number is odd or even
// 1. define a variable to assign inputted value
// 2. check remaining value if the number divided by 2
// 3. if a number is totally divisible by 2, then it's even number
// 4. otherwise, it's odd number

let numbers = 7;
if(numbers % 2 === 1){
    console.log("Number is Odd");
} else {
    console.log("Number is Even");
}

// Write a code to check whether the number is prime number or not
// PRIME NUMBER : a whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1 
// 1. define a variable to assign inputted value and the iterator
// 2. if the current iterator less than inputted value, the looping start
// 3. if the inputted value totally divided by current iterator, then it's not a prime number, and the iteration keeps increase
// 4. instead, if the iterator equal to the inputted value, then it's a prime number
let isPrime = 13;
let iteration1 = 2;
while(iteration1 < isPrime){
    if(isPrime % iteration1 === 0 ){
        console.log(isPrime + " is not prime number!");
        break;
    }
    iteration1++;
    if(isPrime === iteration1){
        console.log(isPrime + " is prime number!");
    }
}

// Write a code to find the sum of the numbers 1 to N
// 1. define a variable to assign N value, total of number and iterator
// 2. put the iterator with maximum step alongside the N value
// 3. while the looping process continue, sum the current variable total with current iterator
// 4. stop the looping process if the iteration more than the N values

let N = 4;
let iteration = 1;
let total = 0;
while(iteration <= N){
    total = total + iteration;
    iteration++;
}
console.log(total);

// Write a code to find factorial of a number
// 1. define a variable to assign the inputted value
// 2. put the iterator into decrement process with input value as the iterator
// 3. if the iterator more than zero, multiply the result variable with current iterator value
// 4. otherwise stop the looping process
let NN = 4;
let resultFactorial = 1;
while(NN > 0){
    resultFactorial *= NN;
    NN--;
}
console.log(resultFactorial);

// Write a code to print the first N Fibonacci numbers
// 1. define a variable of inputted value as K
// 2. define an array to store a value of each number in fibonacci sequence
// 3. loops the process until reach the K value with this formula, N = (N-1) + (N-2)
let k = 15;
let stack = [0, 1];
for(let i=2 ; i <= k; i++){
    stack[i] = stack[i-1] + stack[i-2];
}
console.log(stack[k]);