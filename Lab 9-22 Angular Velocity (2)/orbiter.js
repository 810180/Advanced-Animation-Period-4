function Orbiter(parent, rad, orbRad, angVel, startAng, clr, oR) {
    this.orbiterRadius = rad;//size of the oribter
    this.rotator = new JSVector(10, 10);//rotator vector
    this.rotator.setDirection(startAng);
    this.rotator.setMagnitude(orbRad);
    this.clr = clr;//color of the orbiter, equal to the plante
    this.planet = parent;//inherits all properties of the planet
    this.angularVelocity = angVel;//spped of rotation
}
Orbiter.prototype.run = function () {
    this.render();
    this.update();
}
Orbiter.prototype.render = function () {
    let loc = JSVector.addGetNew(this.planet.loc, this.rotator);
    context.beginPath();
    context.arc(loc.x, loc.y, this.orbiterRadius, 0, Math.PI * 2);
    context.closePath();
    context.strokeStyle = this.clr;
    context.fillStyle = this.clr;
    context.fill();
    context.stroke();
}
Orbiter.prototype.update = function () {
    this.rotator.rotate(this.angularVelocity);
}
    