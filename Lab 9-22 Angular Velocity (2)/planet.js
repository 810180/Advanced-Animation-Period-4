function Planet(x, y, d, o, color) {
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(Math.random() * 4 - 2, Math.random() * 4 - 2)
    this.rad = d;
    this.orbs = [];
    this.clr = color
    //let orbDist = Math.random() * 40 + 30;//distance the orbiter is from the hub/planet
    //let orbRad = Math.random() * 15 + 10;//the size of the orbiter
    //let angSpeed = Math.random() * 0.1 + 0.01;//the speed the orbiter rotates at
    let orbDist = 60;
    let orbRad = 20;
    let angSpeed = 0.05;
    for (let i = 0; i < o; i++) {
        this.orbs[i] = new Orbiter(this.loc, orbRad, orbDist, 0.05, 0, this.clr);//o cannot be 0 bc x/0 is dne
    }
}

Planet.prototype.run = function () {
    this.render();
    this.update();
    this.translate();
    for (let i = 0; i < this.orbs.length; i++) {
        this.orbs[i].run(this.loc);
    }
}

Planet.prototype.render = function () {
    context.beginPath();
    //draws a hourglass shape   
    context.moveTo(this.rad + this.loc.x, this.rad + this.loc.y);
    context.lineTo(-this.rad + this.loc.x, this.rad + this.loc.y);
    context.lineTo(this.rad + this.loc.x, -this.rad + this.loc.y);
    context.lineTo(-this.rad + this.loc.x, -this.rad + this.loc.y);
    context.closePath();
    context.fillStyle = this.clr;
    context.strokeStyle = this.clr;
    context.stroke();
    context.fill();
}

Planet.prototype.update = function () {
    this.loc.add(this.vel);
}

Planet.prototype.translate = function () {
    //translates planet to other side
    if (this.loc.y > canvas.height+this.rad) {
        this.loc.y = 0;
    }
    if (this.loc.y < -this.rad) {
        this.loc.y = canvas.height;
    }
    if (this.loc.x > canvas.width+this.rad) {
        this.loc.x = 0;
    }
    if (this.loc.x < -this.rad) {
        this.loc.x = canvas.width;
    }
}