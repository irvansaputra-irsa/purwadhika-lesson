// Write a code to display the multiplication table of a given integer.
function showMultiplication(number){
    let message="";
    for(let i=1 ;i<=10 ;i++){
        message+= `${number} x ${i} \n`;
    }
    return message;
}
console.log(showMultiplication("9"));
// Write a code to check whether a string is a palindrome or not.
function checkPalindrome(word){
    let left = 0;
    let right = word.length-1;

    while(left < right) {
        if(word[left] === word[right]){
            left++;
            right--;
        }else {
            return `${word} is not a palindrome`
        }
    }
    return `${word} is a palindrome`
}
console.log(checkPalindrome("madam"));

//Write a code to convert centimeter to kilometer.
function convertCmToKm(num){
    if(typeof num === "number"){
        return num/100000 + " km"
    }
}
console.log(convertCmToKm(100000));

//Write a code to format number as currency (IDR)
function formatCurrency(num) {
    if (typeof num === "number") {
        let strings = num.toString();
        let arrays = strings.split("");
        if (arrays.length > 3) {
            console.log(arrays)
            for (let i = arrays.length - 3; i > 0; i-=3) {
                arrays.splice(i, 0, ".");
            }
        }
        return `Rp. ${arrays.join('')},00`
    }
}
console.log(formatCurrency(1000));

//Write a code to remove the first occurrence of a given “search string” from a string
//Example : string = “Hello world”, search string = “ell” → “Ho world”
function removeString(strings, deleteString){
    //bruteforce

    let count=0;
    for(let i=0 ;i<strings.length; i++){
        if(deleteString[0] === strings[i]){
            for(let k=0 ; k<deleteString.length ; k++){
                if(deleteString[k] === strings[i+k]){
                    count++;
                }
            }
        }
        if(count === deleteString.length){
            let arrayString = strings.split('');
            arrayString.splice(i, count);
            return arrayString.join('');
        }
    }
}

console.log(removeString("Hello world", "ell"));

//Write a code to capitalize the first letter of each word in a string
function capitalizeWords(word){
    let trimWord = word.trim().toLowerCase();
    let result = "";
    if(trimWord.includes(" ")){
        let arrayString = word.split(" ");
        for(let i=0 ; i<arrayString.length ; i++){
           result += arrayString[i][0].toUpperCase() + arrayString[i].slice(1) + " ";
        }
    }else {
       result = trimWord[0].toUpperCase() + trimWord.slice(1);
    }
    
    return result;
}
console.log(capitalizeWords("hello world"));

// Write a code to reverse a string
function reverseString(word){
    //1. ez mode
    // return word.split("").reverse().join("");


    //2. efficient mode (decrement loops)
    let result = "";
    for(let i=word.length-1 ; i>=0 ; i--){
        result += word[i];
    }
    return result;
}
console.log(reverseString("hello"));

// Write a code to swap the case of each character from string
// Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’

function swapWordCase(word){
    let result = "";
    for(let i=0 ; i<word.length ; i++){
        if(word[i].match(/[a-z]/g)){
            result += word[i].toUpperCase();
        } else if(word[i].match(/[A-Z]/g)){
            result += word[i].toLowerCase();
        } else {
            result += word[i];
        }
    }

    return result;
}


// Write a code to find the largest of two given integers
function whichLargestInteger(num1, num2){    
    return num1>num2 ? num1 + "num1: " + num1 : "num2: " + num2 ;
}
console.log(whichLargestInteger(3, 50));

// Write a conditional statement to sort three numbers
function sortThreeNum(num1,num2,num3){
    if(num1>num2 && num1>num3){
        if(num2>num3) return `${num3}, ${num2}, ${num1}`;
        else return `${num2}, ${num3}, ${num1}`;
    }

    if(num2>num3 && num2>num1){
        if(num3>num1) return  `${num1}, ${num3}, ${num2}`;
        else return `${num3}, ${num1}, ${num2}`;
    }

    if(num3>num1 && num3>num2){
        if(num1>num2) return `${num2}, ${num1}, ${num3}`;
        else return `${num1}, ${num2}, ${num3}`;
    }
}
console.log(sortThreeNum(90, 73, 60));
// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type
function whatsTheInput(input){
    return typeof input === 'string' ? 1 : (
        typeof input === 'number' ? 2 : 3
    )
}
console.log(whatsTheInput("hello world"));

//Write a code to change every letter a into * from a string of input
function convertALetters(word){
    let result = "";
    for(let w of word){
        if(w.match(/[a]/gi)){
            result += "*";
        } else result += w
    }
    
    return result;
}
console.log(convertALetters("An apple a day keeps the doctor away"))
