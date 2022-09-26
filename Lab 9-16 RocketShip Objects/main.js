// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context, rocket, planet, asteroid;
//asteroid is a global to let each asteroid run invidually
asteroid = [];
canvas = document.getElementById("cnv");
context = canvas.getContext("2d");
context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;

function init() {
    //width and height are set here instead of in indext to make it full page window
    loadAsteroids(20);
    animate();      // kick off the animation
}

function loadAsteroids(n) {
    for (let i = 0; i < n; i++) {
        asteroid[i] = {
            loc: new JSVector(Math.random() * canvas.width, Math.random() * canvas.height),
            vel: new JSVector(Math.random() * 4 - 2, Math.random() * 4 - 2),
            acc: new JSVector(0, 0),
            diam: Math.random() * 15 + 5,
            clr: "#808080"
        }
    }
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    //asteroid.run below
    for (let i = 0; i < asteroid.length; i++) {
        asteroid[i].render();
        asteroid[i].update();
    }
    //rocket.run below
    rocket.render();
    rocket.update();
    rocket.checkEdge();
    //planet.run below
    rocket.trail();
    planet.render();
    planet.update();
    planet.checkEdge();
    requestAnimationFrame(animate); // next cycle
}
//+++++++++++++++++++++++ planet
planet = {
    loc: new JSVector(Math.random() * canvas.width, Math.random() * canvas.height),
    vel: new JSVector(0, 0),
    acc: new JSVector(0, 0),
    diam: 50,
    clr: "red"
}

//planet functions
planet.update = function () {
    let d = this.loc.distance(rocket.loc);
    if (d < 150) {
        this.acc = JSVector.subGetNew(this.loc, rocket.loc);
        this.acc.normalize();
        this.acc.multiply(0.05);
        this.vel.add(this.acc);
        this.vel.limit(3);
    }
    if (d < this.diam * 2) {
        planet.loc.x = Math.random() * canvas.width;
        planet.loc.y = Math.random() * canvas.height;
    }
    if (d > 200 && this.vel.getMagnitude() > 0) {
        //if the planet is far from the rocket then it stops acceleration
        this.vel.setMagnitude(this.vel.getMagnitude() - 0.05);
    }
    this.loc.add(this.vel);
}
planet.render = function () {
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.diam, 0, 2 * Math.PI);//standard circle generation
    context.strokeStyle = "black";
    context.fillStyle = this.clr;
    context.fill();
    context.stroke();
}
planet.checkEdge = function () {
    if (this.loc.y > canvas.height) {
        this.loc.y = 0;
    }
    if (this.loc.y < 0) {
        this.loc.y = canvas.height;
    }
    if (this.loc.x > canvas.width) {
        this.loc.x = 0;
    }
    if (this.loc.x < 0) {
        this.loc.x = canvas.width;
    }
}
//+++++++++++++++++++++++ rocket
rocket = {
    loc: new JSVector(Math.random() * canvas.width, Math.random() * canvas.height),
    vel: new JSVector(0, 0),
    acc: new JSVector(0, 0),
    diam: 40,
    clr: "blue"
}

//rocket functions
rocket.update = function () {
    let dist = this.loc.distance(planet.loc);
    this.acc = JSVector.subGetNew(planet.loc, this.loc);
    this.acc.normalize();
    this.acc.multiply(0.05);
    this.vel.add(this.acc);
    this.vel.limit(4.05);
    this.vel.add(this.acc);
    this.loc.add(this.vel);
}
rocket.checkEdge = function () {
    if (this.loc.y > canvas.height) {
        this.loc.y = 0;
    }
    if (this.loc.y < 0) {
        this.loc.y = canvas.height;
    }
    if (this.loc.x > canvas.width) {
        this.loc.x = 0;
    }
    if (this.loc.x < 0) {
        this.loc.x = canvas.width;
    }
}
rocket.render = function () {
    context.beginPath();    // clear old path
    context.save();
    context.translate(this.loc.x, this.loc.y);
    context.rotate(this.vel.getDirection());
    //rocket drawing here
    context.strokeStyle = this.clr;
    context.moveTo(this.diam, 0);
    context.lineTo(0, this.diam / 4);
    context.lineTo(this.diam / 8, 0);//divot of the rocket
    context.lineTo(0, -this.diam / 4);
    context.closePath();
    context.fillStyle = this.clr;
    context.fill();
    context.restore();
    context.stroke();   // render the stroke
}
rocket.trail = function () {
    context.beginPath();    // clear old path
    context.save();
    context.translate(this.loc.x, this.loc.y);
    context.rotate(this.vel.getDirection());
    //rocket drawing here
    context.strokeStyle = this.clr;
    context.moveTo(this.diam / 8, 0);
    context.lineTo(0, -this.diam / 8);
    context.lineTo(-this.vel.getMagnitude() * 4, 0);//divot of the rocket
    context.lineTo(0, this.diam / 8);
    context.closePath();
    context.fillStyle = "pink";
    context.fill();
    context.restore();
    context.stroke();   // render the stroke
}
//+++++++++++++++++++++++ asteroid
asteroid.update = function () {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
}

asteroid.render = function () {
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.diam, 0, 2 * Math.PI);//standard circle generation
    context.strokeStyle = this.clr;
    context.fillStyle = this.clr;
    context.fill();
    context.stroke();
}
