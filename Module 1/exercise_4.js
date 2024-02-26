// Create a function that can create a triangle pattern according to the height we provide like the following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10
// Parameters : height → triangle height

function createTriangle(height){
    let str = "";
    let current = 0;
    for (let i = 1; i <= height; i++) {
        for(let k=1 ; k<=i ; k++){
            current++;
            str+= (current < 10 ? "0" : "") + current + " ";
        }
        console.log(str)
        str="";
    }
}

createTriangle(6);

//Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
// "FizzBuzz".
function createFizzBuzz(n){
    let i=1;
    let result = "";
    while(i<=n){
        if(i%3 == 0 && i%5==0){
            result+= "FizzBuzz";
        }else if(i%3 == 0){
            result+= "Fizz";
        }else if(i%5 == 0){
            result+= "Buzz";
        }else result += i

        if(i!==n){
            result+=", "
        }
        i++;
    }
    return result;
}
console.log(createFizzBuzz(15));

//Create a function to calculate Body Mass Index (BMI)
//Formula : BMI = weight (kg) / (height (meter))²
//Parameters : weight & height
function BMICalculator(weight, height){
    const calculate = weight / (height**2);

    if(calculate<18.5) return "less weight";
    if(calculate>=18.5 && calculate<=24.9) return "ideal";
    if(calculate>=25 && calculate<=29.9) return "overweight";
    if(calculate>=30 && calculate<=39.9) return "very overweight";
    return "obesity";
}
console.log(BMICalculator(60, 1.73));

// Write a function to remove all odd numbers in an array and return a new array that contains even
// numbers only
function removeOddNum(array){
    let result=[];
    for(let arr of array){
        if(arr%2 !== 1){
            result.push(arr);
        }
    }
    return result;
}
console.log(removeOddNum([1,2,3,4,5,6,7,8,9,10]));

//Write a function to split a string and convert it into an array of words
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
console.log("🚀 ~ splitWord ~ splitWord:", splitWord("Hello World Friends"));
