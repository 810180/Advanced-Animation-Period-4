// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let prisoners = [];
let choices = [];
function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadPrisoners(100);
}
function loadPrisoners(n){
    for(let i = 0; i<n;i++){
        prisoners[i] = i;
    }
    let tempArray = prisoners;
    for(let i=0; i<n;i++){
        let id = Math.floor(Math.random()*100);
        choices[i]=tempArray[id];
    }
    console.log(choices);
}
function returnAnswer(){

}


