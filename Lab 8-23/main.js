let a = Math.random() * 10;//a is random, starting number
let b = Math.random() * 10 + 11//b is random but larger then a, ending number
let n = Math.random() * 10;//random number of items within the array

// console.log("Array Numbers");
let c = [];
c = randNum(a, b, n)
// console.log(c);
// console.log("Array Mean");
console.log(getMean(c));
//console.log("Array Median");
//console.log(getMedian(c));
//console.log("Array Mode");
// console.log(getMode(c));


function randNum(a, b, n){
    let arr = []; //creates array with any length
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor((Math.random() * (b - a)) + a);//assigns a random value to each item in the array between a and b
    }
    return arr;//writes each value in arr
}

function getMean(input)//gets the average
{
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i];//adds all values of the array to the sum variable
    }
    return sum;
}

function getMedian(input)//gets the most middling average in the list
{
    let temp = input.sort();
    if (temp.length % 2 == 0) {
        return (temp[temp.length / 2 - 1] + temp[temp.length / 2]) / 2
    } else {
        return temp[Math.floor(temp.length / 2)];
    }
}

function getMode(input)//get the most common number
{
    //input.sort();//not necessary
    //let curBest = [];
    let curBest = input;
    let maxRepeatted = 0;
    for (let i = 0; i < input.length; i++) {
        let cur = input[i];//current number being looked at
        let repeatVal = 0;
        for (let j = i + 1; j < input.length - 1; j++)//looks through all values - doesnt need to comapre to previous ones 
        {
            if (cur == input[j]) {
                repeatVal++;//counts the number of times used
            }
        }//end of J loop

        if (repeatVal > maxRepeatted) {
            curBest = [];//wipes all previous values for Cur best cause standard is raised
            maxRepeatted = repeatVal;//standard is raised
            curBest[0] = input[i];
        } else if (repeatVal == maxRepeatted && !curBest.includes(input[i])) {
            curBest.push(input[i]);
        }//end of if/elseif statement
    } // end of i loop


    return curBest;
}