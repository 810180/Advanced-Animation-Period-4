// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let rocket;
let planet;

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    rocket = new Rocket(Math.random()*canvas.width, Math.random()*canvas.height, 40);
    planet = new Rocket(canvas.width-rocket.loc.x,canvas.height-rocket.loc.y, 40);
    planet.vel.x=0;
    planet.vel.y=0;
    animate();      // kick off the animation
}



function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    rocket.run();
    planet.run();
    requestAnimationFrame(animate); // next cycle
}


