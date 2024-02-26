// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
function findLowHighAvgNum(array) {
    if (array.length > 0) {
        // # with sort function (ascending) #
        // array.sort((a,b) => (a-b)); 
        // let highest = array[array.length - 1];
        // let lowest = array[0];
        // let sum =0;
        // array.forEach(e => {
        //     sum+=e;
        // });
        // let average = sum/ (array.length);
        // return `lowest: ${lowest}, highest: ${highest}, average: ${average}`;


        // # without sort function #
        let highest = array[0];
        let lowest = array[0];
        let average = array[0];;

        let sum = 0;
        if (array.length > 1) {
            highest = array[0];
            lowest = array[0];
            for (let arr of array) {
                if (arr > highest) highest = arr;
                if (arr < lowest) lowest = arr;
                sum += arr;
            }

            average = sum / (array.length);
        }
        return `lowest: ${lowest}, highest: ${highest}, average: ${average}`;
    } else return `Invalid array`;
}

console.log(findLowHighAvgNum([12, 5, 23, 18, 4, 45, 32]));

// Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
// Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
function concateArrayToString(arrays){
    let strings = "";
    for(let i=0 ; i<arrays.length ; i++){
        if(i !== arrays.length - 1){
            strings += arrays[i] + ", ";
        }else {
            strings += "and " + arrays[i] 
        }
    }
    return strings;
}

console.log(concateArrayToString( ["apple", "banana", "cherry", "date"]));

// Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]
function splitWord(word){
    let words = word.trim();
    let array = [];
    if(words.includes(" ")){
        // cara 1 
        let temp = "";
        words+= " ";
        for(let i=0 ; i<words.length ; i++){
            if(words[i] !== " "){
                temp+=words[i];
            }else {
                array.push(temp);
                temp = "";
            }
        }

        //cara 2
        // array = words.split(" ");
    } else array.push(words);
    
    
    return array;
}
console.log(splitWord("Hello World"));

// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
// Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

function calculateTwoArrays(arr1, arr2){
    // Assume both arrays are of the same length
    let finalArray = [];
    for(let i=0 ; i<arr1.length ; i++){
        finalArray[i] = arr1[i] + arr2[i];
    }
    return finalArray;
}
console.log(calculateTwoArrays([1, 2, 3], [3, 2, 1]));

// Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
function addLastElementOfArray(array, number){
    let newArray = array;
    if(newArray[newArray.length - 1] === number){
        return newArray;
    }
    newArray.push(number);
    return newArray;
}
console.log(addLastElementOfArray([1, 2, 3, 4], 9));

//page2
// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// a. Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]
function removeOddNum(array){
    let result=[];
    for(let arr of array){
        if(arr%2 !== 1){
            result.push(arr);
        }
    }
    return result;
}
console.log(removeOddNum([1,2,3,4,5,6,7]));

//Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements).
// example: maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// result = return [5, 10, 24, 3, 6]
function insertGivenNumberToArray(maxSize, arrays){
    let newArray = [];
    let count = 0;
    for(let arr of arrays){
        if(count < maxSize){
            newArray.push(arr);
        }
        count++;
    }
    return newArray;
}
console.log(insertGivenNumberToArray(3, [1,2,3,4,5]))

// Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
function combineArray(arr1, arr2){
    //cara 1 - concat
    // return arr1.concat(arr2);

    //cara 2 - spread operator
    return [...arr1, ...arr2];
}
console.log(combineArray([1, 2, 3], [1, 4, 5]))

// Write a function to find duplicate values in an array
// Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
function findDuplicateNum(arr){
    let result = [];
    let temp = [];
    for(let i=0 ; i<arr.length ;i++){
        if(temp?.includes(arr[i]) && !result.includes(arr[i])){
            result.push(arr[i]);
        } else {
            temp.push(arr[i]);
        }
    }

    return result;
}
console.log(findDuplicateNum([1, 2, 2, 2, 3, 3, 4, 5, 5]));

// Write a function to find the difference in 2 given array
// Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
function findDifferenceNum(arr1,arr2){
    let result = [];
    for(let num of arr1){
        if(!arr2.includes(num)){
            result.push(num);
        }
    }
    for(let num of arr2){
        if(!arr1.includes(num)){
            result.push(num);
        }
    }
    
    return result;
}
console.log(findDifferenceNum([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

//Based on the array below write a function that will return primitive data types only.
//arr = [1, [], undefined, {}, "string", {}, []];
//The function will return [1, undefined, “string”]

function primitiveOnly(arr){
    let result = [];
    for(let a of arr){
        if(typeof a === 'string' || typeof a === 'bigint' || typeof a === 'number' || typeof a === 'string' || typeof a === 'undefined' || typeof a === 'boolean'){
            result.push(a);
        }
    }
    return result;
}
console.log(primitiveOnly([1, [], undefined, {}, "string", {}, []]));
//Write a function from a given array of numbers and return the second smallest number
//Example : numbers = [5, 3, 1, 7, 2, 6] → 2
function smallestSecondNum(arr) {
    //without sorting
    let smallest = arr[0];
    let smallest2nd = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest2nd = smallest;
            smallest = arr[i];
        } else if (arr[i] < smallest2nd) {
            smallest2nd = arr[i];
        }
    }

    return smallest2nd;
}

console.log(smallestSecondNum([5, 3, 1, 7, 2, 6]));

//Write a function from a given array of mixed data types and return the sum of all the number
//Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
function sumAllNumber(arr){
    let result=0;
    for (const el of arr) {
        if(typeof el === "number"){
            result+=el;
        }
    }

    return result;
}
console.log(sumAllNumber(["3", 1, "string", null, false, undefined, 2]));

//Write a function from the below array of number that will return sum of duplicate values
// arr = [10, 20, 40, 10, 50, 30, 10, 60, 10]--> return 40
function sumDuplicateValue(arr){
    const numArray = new Map();
    let result = 0;
    for(let num of arr){
        if(numArray.has(num)){
            numArray.set(num, numArray.get(num) + 1);
        }else {
            numArray.set(num, 1);
        }
    }

    numArray.forEach((value, key) => {
        console.log(value)
        if(value > 1){
            result += key * value;
        }
    });

    return result;
}
console.log(sumDuplicateValue([10, 20, 40, 10, 50, 30, 10, 60, 10]));

// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor.
// Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
function playRockPaperScissor(chosen){
    let option = ["paper", "rock", "scissor"];
    
    const randomed = option[Math.floor(Math.random() * option.length)];
    chosen = chosen.toLowerCase();

    let message = `Computer rolls a ${randomed}, you `;

    if(chosen === 'paper' || chosen === 'rock' || chosen === 'scissor' ){
        if(chosen === 'paper'){
            if(randomed === 'scissor') message+= "Lose";
            else if(randomed === 'rock') message+= "Win";
            else message+= "Tie"
        }
        if(chosen === 'rock'){
            if(randomed === 'paper') message+= "Lose";
            else if(randomed === 'scissor') message+= "Win";
            else message+= "Tie"
        }
        if(chosen === 'scissor'){
            if(randomed === 'paper') message+= "Win";
            else if(randomed === 'rock') message+= "Lose";
            else message+= "Tie"
        }
        return message;
    } else return "Please input between 'Rock', 'Paper' or 'Scissor'!";
}
console.log(playRockPaperScissor("Rock"));