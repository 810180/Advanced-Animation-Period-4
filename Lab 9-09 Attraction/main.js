// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
var movers = [];
let attractor;

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadMover(50);
    attractor = new Mover((Math.random()*canvas.width), (Math.random()*canvas.height), 15); 
    animate();      // kick off the animation
}

function loadMover(n){//
    for(let i = 0; i < n; i++){
        //  fill an array with n balls
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        movers.push(new Mover(x,y, 7));
    }
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i<movers.length;i++){
        movers[i].run();
    }
    attractor.run();
    requestAnimationFrame(animate); // next cycle
}


