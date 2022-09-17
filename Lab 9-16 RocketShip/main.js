// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let rocket;
let planet;
let trail;
var asteroid = [];
//asteroid is a global to let each asteroid run invidually

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    //width and height are set here instead of in indext to make it full page window
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    //rocket,planet, and trail are initialized here
    rocket = new Rocket(Math.random() * canvas.width, Math.random() * canvas.height, 40);
    planet = new Rocket(canvas.width - rocket.loc.x, canvas.height - rocket.loc.y, 40);
    trail = new Rocket(rocket.loc.x, rocket.loc.y, 40);//trail location is matched with rocket's
    //planet velocity is set to 0 manually to prevent the planet from moving around before the rocket gets close
    planet.vel.x = 0;
    planet.vel.y = 0;
    loadAsteroid(10);
    animate();      // kick off the animation
}

function loadAsteroid(n) {
    //load asteroid is its own function so it can scale
    for (let i = 0; i < n; i++) {
        asteroid.push(new Rocket(Math.random() * canvas.width, Math.random() * canvas.height, 10));
    }
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    trail.run();//needs to be ahead of rocket in code
    //running the trail AFTER the asteroid changes the asteroid with the last indext to be the color of the trail
    rocket.run();//rocket is currently below asteroids when rendering
    for (let i = 0; i < asteroid.length; i++) {
        asteroid[i].run();
    }
    planet.run();
    requestAnimationFrame(animate); // next cycle
}


