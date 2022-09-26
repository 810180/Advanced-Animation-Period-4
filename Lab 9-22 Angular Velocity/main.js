// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

//global variables
let canvas, context, planets, orbiters;
planets = [];
var clrList = ["#4C0057", "#5FA41C", "#FFAA9E", "#FF1A00"];

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadPlanets(10);
    //orbs = new Orbiter();//temp test for orbs
    animate();
}

function loadPlanets(n) {

    for (let i = 0; i < n; i++) {
        planets[i] = new Planet(Math.random() * canvas.width, Math.random() * canvas.height, 15, Math.floor(Math.random() * 10), clrList[Math.floor(Math.random() * clrList.length)]);
    }
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < planets.length; i++) {
        planets[i].run();
    }
    requestAnimationFrame(animate);
}