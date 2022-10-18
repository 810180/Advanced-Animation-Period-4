function Mover(x, y, d) {
    this.loc = new JSVector(x, y);//  add a location vector
    let dx = Math.random() * 4 - 2;
    let dy = Math.random() * 4 - 2;
    this.vel = new JSVector(dx, dy); // add a velocity vector
    this.acc = new JSVector(0, 0);//  add an acceleration vector
    this.rad = d;
    //  choose a random color from this array
    this.clrArray = ["#2255AA", "FF0022", "Chocolate", "FireBrick", "GreenYellow", "LightSeaGreen", "Teal"];
    //this.clrArray = ["FireBrick", "FireBrick"];
    this.clrIndex = Math.floor(Math.random() * this.clrArray.length);
    this.clr = this.clrArray[this.clrIndex];
}

Mover.prototype.run = function () {
    this.render();
    this.update();
    this.bounce();
}

Mover.prototype.render = function () {
    world.ctxMain.beginPath();
    world.ctxMain.arc(this.loc.x, this.loc.y, this.rad, 0, 2 * Math.PI);
    world.ctxMain.strokeStyle = "black";
    world.ctxMain.fillStyle = this.clr;
    world.ctxMain.fill();
    world.ctxMain.stroke();

    world.ctxMini.beginPath();
    world.ctxMini.arc(this.loc.x, this.loc.y, this.rad, 0, 2 * Math.PI);
    world.ctxMini.strokeStyle = "black";
    world.ctxMini.fillStyle = this.clr;
    world.ctxMini.fill();
    world.ctxMini.stroke();
}

Mover.prototype.update = function () {
    this.vel.limit(3);
    this.loc.add(this.vel);
}
Mover.prototype.bounce = function () {
    if (this.loc.x < world.dims.left + 20) {
        this.vel.x = this.vel.x + 0.05
    }
    if (this.loc.x > world.dims.right - 20) {
        this.vel.x = this.vel.x - 0.05
    }
    if (this.loc.y > world.dims.top + 20) {
        this.vel.y = this.vel.y - 0.05
    }
    if (this.loc.y < world.dims.bottom - 20) {
        this.vel.y = this.vel.y + 0.05
    }
}