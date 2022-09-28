function Orbiter(parentLoc, rad, orbRad, angVel, startAng, clr,) {
    this.orbiterRadius = rad;
    this.orbDist = new JSVector(10, 10);
    this.startAng = startAng;
    this.orbDist.setDirection(startAng);
    this.orbRad = orbRad;
    this.orbDist.setMagnitude(orbRad);
    this.orbiterLocation = JSVector.addGetNew(parentLoc, this.orbDist);
    this.pLoc = parentLoc;
    this.clr = clr;
    this.angularVelocity = angVel;
}
Orbiter.prototype.run = function (planetLoc) {
    this.render();
    this.update(planetLoc);
}
Orbiter.prototype.render = function () {
    context.beginPath();
    context.arc(this.orbLocation.x, this.orbLocation.y, this.orbiterRad, 0, Math.PI * 2);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "red";
    context.fill();
    context.stroke();
}
Orbiter.prototype.update = function (planetLoc) {
    this.pLoc.x = planetLoc.x;
    this.pLoc.y = planetLoc.y;
    this.orbDist.setDirection(this.orbDist.getDirection()+0.05);
    this.orbLocation.x = this.pLoc.x + this.orbRad * Math.cos(this.orbDist.getDirection());
    this.orbLocation.y = this.pLoc.x + this.orbRad * Math.sin(this.orbDist.getDirection());
}