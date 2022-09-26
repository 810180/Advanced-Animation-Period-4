function Orbiter(x, y, r, or, s, num) {
    //x loc, y loc, radius, orbital radius, angular speed, starting angle
    this.loc = new JSVector(x, y);
    this.rad = r;
    this.orbRad = or;
    this.angVel = s;
    this.ang = num;//maybe 2pi/number of orbiters * index of orbiter- bruh why it no work
}

Orbiter.prototype.run = function (x, y) {
    this.render();
    this.update(x, y);
}

Orbiter.prototype.render = function () {
    context.save();
    //unsaved portion begining
    context.translate(this.loc.x, this.loc.y);
    context.rotate(this.ang);//the angle is gonna be very high lmao
    context.beginPath();
    //line is drawn here
    context.moveTo(this.orbRad,0);
    context.lineTo(0, 0);
    context.closePath();
    context.strokeStyle = "white";;
    context.stroke();
    //orbiter drawn here
    context.beginPath();
    context.arc(this.orbRad+this.rad, 0, this.rad, 0, 2 * Math.PI);//I spent over an hour trying to debut and Math.PI wasn't captitalized 
    context.fillStyle = "red";
    context.strokeStyle = "white";
    context.fill();
    context.stroke();
    //end of unsaved portion
    context.restore();
}

Orbiter.prototype.update = function (x, y) {
    this.loc.x = x;
    this.loc.y = y;
    this.ang += this.angVel;//adds the angular velocity to current angle
}