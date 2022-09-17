// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let rocket;
let planet;
let trail;
var asteroid = [];

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    rocket = new Rocket(Math.random()*canvas.width, Math.random()*canvas.height, 40);
    planet = new Rocket(canvas.width-rocket.loc.x,canvas.height-rocket.loc.y, 40);
    trail = new Rocket(rocket.loc.x,rocket.loc.y, 40);
    planet.vel.x=0;
    planet.vel.y=0;
    loadAsteroid(10);
    animate();      // kick off the animation
}

function loadAsteroid(n) {
    for(let i =0;i<n;i++){
        asteroid.push(new Rocket(Math.random()*canvas.width, Math.random()*canvas.height, 10));
    }
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    trail.run();//needs to be ahead of rocket in code
    rocket.run();//rocket 
    for(let i = 0; i<asteroid.length;i++){
        asteroid[i].run();
    }
    
    planet.run();
    requestAnimationFrame(animate); // next cycle
}


