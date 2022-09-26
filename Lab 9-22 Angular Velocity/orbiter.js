function Orbiter(x, y, r, or, s, num) {
    //x loc, y loc, radius, orbital radius, angular speed, starting angle
    this.loc = new JSVector(x, y);
    this.rad = r;
    this.orbRad = or;
    this.angVel = s;
    this.ang = num;//maybe 2pi/number of orbiters * index of orbiter- bruh why it no work
    //this.ang = 0.05;
}

Orbiter.prototype.run = function (x, y) {
    this.render();
    this.update(x, y);
}

Orbiter.prototype.render = function () {
    context.save();
    //unsaved portion
    context.translate(this.loc.x, this.loc.y);
    context.rotate(this.ang);
    //rely on the angle changing to move the ball
    context.beginPath();
    context.arc(this.orbRad, 0, this.rad, 0, 2 * Math.PI);//I spent over an hour trying to debut and Math.PI wasn't captitalized 
    context.fillStyle = "red";
    context.strokeStyle = "red";
    context.fill();
    context.stroke();
    //end of unsaveed portion
    context.restore();
}

Orbiter.prototype.update = function (x, y) {
    this.loc.x = x;
    this.loc.y = y;
    //need to be able to change location
    this.ang += this.angVel;//adds the current angle to this
}