//[1] Create a function to convert Excel sheet column title to its corresponding column number.
const convertAlphaNumber = (input) => {
    const plus = 26;
    const minus = 64;
    let result = 0;
    for(let i=0 ; i<input.length ; i++){
        let char = input.charCodeAt(i) - 64;
        result += char* (26**(input.length-i-1)); 
    }
    return result;
}
console.log(convertAlphaNumber('AB'));
//[2] Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//almost every element shown twice
const notTwiceNum = (arrays) => {
    let stack = [];
    for(let arr of arrays){
        isExist = stack.find((e) => e === arr);
        if(isExist) stack = stack.filter((el) => el !== arr);
        else stack.push(arr);
    }
    return parseInt(stack);
}
console.log(notTwiceNum([4,1,2,1,2]));

//[3] Anagram; Given two strings s and t, return true if t is an anagram of s, and false otherwise.
const checkAnagram = (s,t) => {
    if(s.length !== t.length) return false;
    let tempS = {};
    for(let char of s){
        if(tempS.hasOwnProperty(char)){
            tempS[char] += 1;
        } else {
            tempS[char] = 1;
        }
    }
    let tempT = {};
    for(let char of t){
        if(tempT.hasOwnProperty(char)){
            tempT[char] += 1;
        } else {
            tempT[char] = 1;
        }
    }
    for(let [key, value] in tempS){
        console.log(tempS[key]);
        if(tempS[key] !== tempT[key]) return false;
    }
    return true;
}
console.log(checkAnagram('rat",','car'));

//[4] You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// question: how many DISTINCT WAY ? e.g 2-1 and 1-2 diff
// can only took 1 or 2 step
// similar to fibonacci sequence

//bottom-up
const climbStairs = (n) => {
    let steps = [1, 1, 2];

    let start = 3;
    while (start <= n){
        steps[start] = steps[start-1] + steps[start-2];
        start++;
    }
    return steps[n];
}
//top-down
const climbStairs2 = (n) =>{
    if(n==1) return 1;
    if(n==2) return 2;
    return climbStairs2(n-1) + climbStairs2(n-2);
}
console.log(climbStairs(5));
console.log(climbStairs2(5));

// 1 = 1 => 1
// 2 = 1+1, 2 => 2
// 3 = 1+1+1, 2+1, 1+2 => 3
// 4 = 1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2 => 5
// 5 = 1+1+1+1+1, 1+1+1+2, 1+1+2+1, 1+2+1+1, 2+1+1+1, 1+2+2, 2+1+2, 2+2+1 => 8

// pattern if can climbs up to 3 stairs
// 1 = 1 => 1
// 2 = 1+1, 2 => 2
// 3 = 1+1+1, 2+1, 1+2, 3 => 4
// 4 = 1+1+1+1, 2+1+1, 1+2+1, 1+1+2, 2+2, 3+1, 1+3 => 7
// 5 = 1+1+1+1+1, 2+1+1+1, 1+2+1+1, 1+1+2+1, 1+1+1+2, 2+2+1, 2+1+2, 1+2+2, 3+1+1, 1+3+1, 1+1+3, 3+2, 2+3 => 13