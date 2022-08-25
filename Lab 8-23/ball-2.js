//Part B
//Wait for the page to finish loading with init(?) as the callback
window.addEventListener("load", init);

//global variables use var bc global
let canvas, context;
let balls = [];

function init()
{
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
    canvas = document.getElementById("cnv");//makes it so that this js code links to the canvas in the html
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    context = canvas.getContext("2d");//makes the canvas 2d
    loadBalls(100)
    animate();      //begins the animation
}


function loadBalls(n){

    for(let  i = 0; i < n; i++){
    let x = Math.random()*canvas.width;
    let y = Math.random()*canvas.height;
    let dx = Math.random()*6 - 3;
    let dy = Math.random()*6 - 3;
      balls.push(new Ball(x, y, dx, dy, 30))
    }
}

function animate(){
    //first need to clear last frame of animation
    context.clearRect(0,0, canvas.width, canvas.height);//this clears all of the stuff
    bounce();
    update();
    render();
    requestAnimationFrame(animate);//begins next cycle
}

function bounce(){
    if((x+dx)>canvas.width)//checks if x+dx is going to go over the width and swaps it if necessary
    {
        dx = -(Math.random()*4)+0.01//math.random to make it more spicy
            //dont know if the +0.01 is necessary, but dont want to get it stuck on 0 speed 
    } else if((x+dx)<0)
    {
        dx = (Math.random()*4)+0.01
    }
    if((y+dy)>canvas.height)
    {
        dy = -(Math.random()*4)+0.01
    } else if((y+dy)<0)
    {
        dy = (Math.random()*4)+0.01
    }
}

function update(){
    x += dx;//adds dx/dy to x/y so that the ball moves
    y += dy;
}

function render(){
    
    let radius = 15; //decides the radius of ball
    //create circle path
    context.beginPath();    //clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.arc(x,y,radius, 0, 2*Math.PI);
    context.strokeStyle = 0xff0000; // fill color
    context.fillStyle = 0xff0000; //color to stroke
    context.fill();     //renders fill
    context.stroke();   //reners stroke

}