// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
var bubbles = [];
let repeller

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadMover(300);
    animate();      // kick off the animation
}

function loadMover(n){//
    for(let i = 0; i < n; i++){
        //  fill an array with n balls
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        bubbles.push(new Bubble(x,y, 10));
    }
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i<bubbles.length;i++){
        bubbles[i].run();
    }
    //repeller.run();
    requestAnimationFrame(animate); // next cycle
}


