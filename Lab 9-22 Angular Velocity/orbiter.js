function Orbiter(x, y, r, or, s, num) {
    //x loc, y loc, radius, orbital radius, angular speed, starting angle
    this.loc = new JSVector(x, y);//location vector of the planet
    this.rad = r;//radius of the orbiter
    this.orbRad = or;//distance of the orbiter from the plante
    this.angVel = s;
    this.ang = num;//maybe 2pi/number of orbiters * index of orbiter- bruh why it no work
    this.orbLoc = new JSVector(this.orbRad * Math.cos(this.ang), this.orbRad * Math.sin(this.ang));//location vector of the orbiter
    this.clr = clrList[Math.floor(Math.random() * clrList.length)];
}

Orbiter.prototype.run = function (x, y) {
    this.render();
    this.update(x, y);
}

Orbiter.prototype.render = function () {//NO ROTATION
    //draws the line
    context.beginPath();
    context.moveTo(this.loc.x + this.orbLoc.x, this.loc.y + this.orbLoc.y);
    context.lineTo(this.loc.x, this.loc.y);
    context.closePath();
    context.strokeStyle = "white";
    context.stroke();

    //save for the planet
    context.save();
    context.beginPath();
    context.translate(this.loc.x + this.orbLoc.x, this.loc.y + this.orbLoc.y);
    context.rotate(this.orbLoc.getDirection() + Math.PI / 2);//Rotation changes direction of the triangle to align with the angle
    //draws a triangle
    context.moveTo(this.rad, 0);
    context.lineTo(0, this.rad / 2);
    context.lineTo(0, -this.rad / 2);
    context.closePath();
    //want to rotate thing to the place
    context.closePath();
    //draws the planet
    context.strokeStyle = this.clr;
    context.fillStyle = this.clr;
    context.stroke();
    context.fill();
    context.restore();
}

Orbiter.prototype.update = function (x, y) {
    //updates the location of the planet
    this.loc.x = x;
    this.loc.y = y;
    //updates the location of the planet, in relation to the planet
    this.ang = this.ang + this.angVel;
    this.orbLoc.x = this.orbRad * Math.cos(this.ang);
    this.orbLoc.y = this.orbRad * Math.sin(this.ang);
}