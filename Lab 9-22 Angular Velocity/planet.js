function Planet(x, y, d, o) {
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(Math.random() * 4 - 2, Math.random() * 4 - 2)
    this.rad = d;
    this.orbs = [];
    for (let i = 0; i < o; i++) {
        this.orbs[i] = new Orbiter(this.loc.x, this.loc.y, 5, 15, 1);
    }
}

Planet.prototype.run = function () {
    this.render();
    this.update();
    this.translate();
    for (let i = 0; i < this.orbs.length; i++) {
        this.orbs[i].run();
    }
}

Planet.prototype.render = function () {
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.rad, 0, 2 * Math.PI);
    context.fillStyle = "#808080";
    context.strokeStyle = "#808080";
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