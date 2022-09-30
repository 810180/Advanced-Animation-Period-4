function Orbiter(parentLoc, rad, orbRad, angVel, startAng, clr, oR) {
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
    this.orbiterRadius = oR;//size of the orbiter
}
Orbiter.prototype.run = function (planetLoc) {
    this.render();
    this.update(planetLoc);
}
Orbiter.prototype.render = function () {
    context.beginPath();
    context.arc(this.orbiterLocation.x, this.orbiterLocation.y, this.orbiterRadius, 0, Math.PI * 2);
    context.closePath();
    context.strokeStyle = this.clr;
    context.fillStyle = this.clr;
    context.fill();
    context.stroke();
}
Orbiter.prototype.update = function (planetLoc) {
    this.pLoc.x = planetLoc.x;//updates the planets location for the orbiter    
    this.pLoc.y = planetLoc.y;
    this.orbDist.setDirection(this.orbDist.getDirection()+this.angularVelocity);
    this.orbiterLocation.x = this.pLoc.x + this.orbRad * Math.cos(this.orbDist.getDirection());
    this.orbiterLocation.y = this.pLoc.y + this.orbRad * Math.sin(this.orbDist.getDirection());
}