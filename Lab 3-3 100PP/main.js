// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let prisoners = [];
let choices = [];
let won = true;
let loadAmount = 100;
let failed = 0;
function init() {
    loadPrisoners(loadAmount);
}
function loadPrisoners(n) {
    for (let i = 0; i < n; i++) {
        prisoners[i] = i;
    }
    console.log ("prisoners" + prisoners);
    let g = -1;
    let tempArray = [];
    while (++g < prisoners.length) {
        tempArray[g] = prisoners[g];
      }
    //temparray is used to keep track of unassigned numbers
    for (let i = n-1; i >=0; i--) {
        let id = Math.floor(Math.random() * tempArray.length);
        choices[i] = tempArray[id];
        tempArray.splice(id, 1);
    }
    console.log(choices);
    for(let i = 0; i < choices.length; i++){
        if(choices[i] == undefined){
            console.log("not good");
            return;
        }
    }
    for (let i = 0; i < n; i++) {
        console.log("run P " + i);
        runPrisoners(i);
    }

}
function runPrisoners(n) {
    //this works fine now
    let index = 0;
    let checkBox = n;
    checked = false;
    while (!checked) {
        index++;
        if (prisoners[n] == choices[checkBox]) {
            //prisoner checks the box of his id, or last choice depending on loop
            checked = true;
            console.log("Won at " + index);
        } else {
            checked = false;
            checkBox = choices[checkBox];
        }
        if (index >= (loadAmount/2)) {
            //fail state, took to long to find their thing
            won = false;
            checked = true;
            failed++;
        }
    }
    
    if (n == (loadAmount - 1)) {
        returnAnswer();
    }
}
function returnAnswer() {
    console.log(won + " " + ((failed/loadAmount)*100) + "% failed");
}


