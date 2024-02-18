// [1] Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// requirement : more than n/2 times
function findMajority(arrays){
    const numMap = new Map();

    if(arrays.length > 0){
        for(let arr of arrays){
            if(!numMap.has(arr)){
                numMap.set(arr, 1);
            }else numMap.set(arr, numMap.get(arr) + 1);
        }
        let max = 0;
        let majority;
        for(const [key, value] of numMap){
            if(value > max) {
                max = value;
                majority = key;
            }
        }
        
        return majority;
    } else return 'Please input valid array';
}
console.log(findMajority([1,1,3,3]));

// [2] Create a function to convert roman numeral to integer.
// algorithm:
// Take symbol one by one from starting from index 0: 
// If current value of symbol is greater than or equal to the value of next symbol, then add this value to the running total.
// else subtract this value by adding the value of next symbol to the running total.
function romanToNum(roman){
    if(roman === 'I') return 1;
    if(roman === 'V') return 5;
    if(roman === 'X') return 10;
    if(roman === 'L') return 50;
    if(roman === 'C') return 100;
    if(roman === 'D') return 500;
    if(roman === 'M') return 1000;
}

function convertRomanToInteger(wordRoman){
    let result = 0;

    for(let i=0 ; i<wordRoman.length ; i++){
        // if(i < wordRoman.length-1){
            console.log(romanToNum(wordRoman[i]) >= romanToNum(wordRoman[i+1]))
            if(i === wordRoman.length-1 || romanToNum(wordRoman[i]) >= romanToNum(wordRoman[i+1])){
                result += romanToNum(wordRoman[i]);
            }else{
                result += romanToNum(wordRoman[i+1]) - romanToNum(wordRoman[i]);
                i++;
            }
        // }
    }

    return result;
}

console.log(convertRomanToInteger('LVIII'));

// [3] Given an integer numRows, return the first numRows of Pascal's triangle.
//      1
//     1 1
//    1 2 1
//   1 3 3 1
//  1 4 6 4 1
// 1. last and first element of row ALWAYS One (1)
// 2, every row has the same element as much as the [N]-rows
// 3. every element is based on sum of two value above it (ex: N[4][2] = N[3][2] + N[3][2-1] => 3 + 3 = 6)
function pascalTriangle(n){
    let arrays = [];
    for(let i = 0 ; i<n ; i++){
        arrays[i] = []; 
        for(let k=0 ; k<=i ; k++){
            if(k === 0 || k === i){ //first or last element clause
                arrays[i][k] = 1;
            }else {
                arrays[i][k] = arrays[i-1][k] + arrays[i-1][k-1];
            }
        }
    }

    return arrays;
}
console.log(pascalTriangle(5));


// [4] Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
// cannot sell on first and buy on the last day
// cannot reverse buy, example buy on day 2 then sell on day 1

function maxProfit(arrays){
    //cara 1 - bruteforce
    // let temp = [];
    // for(let i = 0 ; i<arrays.length ; i++){
    //     let maxVal = 0;
    //     for(let k = i+1 ; k<arrays.length ; k++){
    //         if(arrays[k] - arrays[i] > 0 && arrays[k] - arrays[i] > maxVal){
    //             maxVal = arrays[k] - arrays[i];
    //         }
    //     }
    //     temp[i] = maxVal;
    // }
    // return Math.max(...temp);

    //cara 2 - greedy algorithm
    // let i = 1;
    // let size = arrays.length;
    // let maxValue = 0;
    // while (i < size) {
    //     let maxTemp= Math.max(...arrays.slice(i+1)) - arrays[i];
    //     maxValue = Math.max(maxTemp, maxValue);
    //     i++;
    // }
    // return maxValue

    //cara 3 - sliding window
    let left = 0;
    let right = 1;
    let maxVal = 0;

    while(right < arrays.length){
        if(arrays[left] < arrays[right]){
            let profit =  arrays[right] - arrays[left];
            maxVal = Math.max(profit, maxVal);
        } else {
            //swap pointer
            left = right;
        }
        right++;
    }
    return maxVal;
}

console.log(maxProfit([7,1,5,3,6,4]));  
//another test case 
//[2,8,1,3,5]
