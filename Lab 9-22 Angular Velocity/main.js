// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

//global variables
let canvas, context, planets, orbiters;
planets = [];
//let orbs;//temp test for orbs

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadPlanets(10);
    //orbs = new Orbiter();//temp test for orbs
    animate();
}

function loadPlanets(n) {
    for (let i = 0; i < n; i++) {
        planets[i] = new Planet(Math.random() * canvas.width, Math.random() * canvas.height, 15, Math.floor(Math.random()*10),"#AA5585");
    }
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    //orbs.run();//temp test for orbs
    for (let i = 0; i < planets.length; i++) {
        planets[i].run();
    }

    requestAnimationFrame(animate);
}