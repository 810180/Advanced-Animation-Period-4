function Orbiter(x, y, r, or, s) {
    //x loc, y loc, radius, orbital radius, angular speed
    this.loc = new JSVector(x, y);
    //these need to be scalars
    this.ang = 5;//maybe 360/number of orbiters * index of orbiter
    this.angVel = s;
    //radii
    this.orbRad = or;
    this.rad = r;
}

Orbiter.prototype.run = function () {
    this.render();
    //this.update();
}

Orbiter.prototype.render = function () {
    context.save();
    //unsaved portion
    context.translate(this.loc.x, this.loc.y);
    context.beginPath();
    context.rotate(this.ang);
    context.arc(20, 20, this.rad, 0, 2 * Math.pi);
    context.fillStyle = "red";
    context.strokeStyle = "red";
    context.fill();
    context.stroke();
    //end of unsaveed portion
    context.restore();
}

Orbiter.prototype.update = function () {
}