function Planet(x, y, d, o, color) {
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(Math.random() * 4 - 2, Math.random() * 4 - 2)
    this.rad = d;
    this.orbs = [];
    this.clr = color
    let orbDist = Math.random()*40 +30;//distance the orbiter is from the hub/planet
    let orbRad = Math.random()*5 + 3;//the size of the orbiter
    let angSpeed = Math.random()*0.1 +0.01;//the speed the orbiter rotates at
    for (let i = 0; i < o; i++) {
        this.orbs[i] = new Orbiter(this.loc.x, this.loc.y, orbRad, orbDist, 0.05, (i) * (Math.PI * 2 / o), this.clr);//o cannot be 0 bc x/0 is dne
        //code for the seperation of orbiters is: (i) * (Math.PI * 2 / o)
    }
}

Planet.prototype.run = function () {
    //orbs no worky
    for (let i = 0; i < this.orbs.length; i++) {
        this.orbs[i].run(this.loc.x, this.loc.y);
    }
    this.render();
    this.update();
    this.translate();
}

Planet.prototype.render = function () {
    context.beginPath();
    //context.arc(this.loc.x, this.loc.y, this.rad, 0, 2 * Math.PI);
    //draws a hourglass shape   
    context.moveTo(this.rad+this.loc.x,this.rad+this.loc.y);
    context.lineTo(-this.rad+this.loc.x,this.rad+this.loc.y);
    context.lineTo(this.rad+this.loc.x,-this.rad+this.loc.y);
    context.lineTo(-this.rad+this.loc.x,-this.rad+this.loc.y);
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
    if (this.loc.y > canvas.height) {
        this.loc.y = 0;
    }
    if (this.loc.y < 0) {
        this.loc.y = canvas.height;
    }
    if (this.loc.x > canvas.width) {
        this.loc.x = 0;
    }
    if (this.loc.x < 0) {
        this.loc.x = canvas.width;
    }
}