// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let balls = [];

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadBalls(500);
    animate();      // kick off the animation
}

function loadBalls(n){
    for(let i = 0; i < n; i++){
        //  fill an array with n balls
        let x = Math.random() * canvas.width;
        let y = Math.random() * (canvas.height-15);
        balls.push(new Ball(x,y, 7));
    }
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i<balls.length;i++){
        balls[i].run();
    }
    requestAnimationFrame(animate); // next cycle
}


