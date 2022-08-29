//Part B
//Wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

//global variables
let canvas, context;
let balls = [];
let vals = [1,2,3,4,5,6,7,8,9,"A","B","C","E","F"];
console.log(vals[Math.floor(Math.random()*15)]);
function init() {
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
    canvas = document.getElementById("cnv");//links to first canvas
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    context = canvas.getContext("2d");
    loadBalls(500)
    animate();      //begins the animation
}
function randColor() {
    let vals = [1,2,3,4,5,6,7,8,9,"A","B","C","E","F"];//Hexcode values
    let output = "";
    for(let i = 0; i<6;i++){
        output += (vals[Math.floor(Math.random()*15)])//gets a random color for the output
    }
    return "#" + output;
}
function loadBalls(n) {
    for (let i = 0; i < n; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let dx = Math.random() * 6 - 3;
        let dy = Math.random() * 6 - 3;
        let r = Math.random() * 10 + 5;
        balls.push(new Ball(x, y, dx, dy, r, randColor()))//adds X new ball-protype objects to array
    }
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);//this clears all of the stuff
    for (let i = 0; i < balls.length; i++) {
        balls[i].run();
    }
    requestAnimationFrame(animate);//begins next cycle
}

// function bounce() {
//     if ((x + dx) > canvas.width)//checks if x+dx is going to go over the width and swaps it if necessary
//     {
//         dx = -(Math.random() * 4) + 0.01//math.random to make it more spicy
//         //dont know if the +0.01 is necessary, but dont want to get it stuck on 0 speed 
//     } else if ((x + dx) < 0) {
//         dx = (Math.random() * 4) + 0.01
//     }
//     if ((y + dy) > canvas.height) {
//         dy = -(Math.random() * 4) + 0.01
//     } else if ((y + dy) < 0) {
//         dy = (Math.random() * 4) + 0.01
//     }
// }

// function update() {
//     x += dx;//adds dx/dy to x/y so that the ball moves
//     y += dy;
// }

// function render() {

//     let radius = 15; //decides the radius of ball
//     //create circle path
//     context.beginPath();    //clear old path
//     // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
//     context.arc(x, y, radius, 0, 2 * Math.PI);
//     context.strokeStyle = 0xff0000; // fill color
//     context.fillStyle = 0xff0000; //color to stroke
//     context.fill();     //renders fill
//     context.stroke();   //reners stroke

// }