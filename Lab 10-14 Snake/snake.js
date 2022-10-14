// Snake constructor

function Snake(location, numSegs, segLength) {
    //  number of segments, segment length
    this.loc = new JSVector(location.x, location.y);
    this.vel = new JSVector(Math.random() * 4 - 2, Math.random() * 4 - 2);
    this.numSegs = numSegs;
    this.segLength = segLength;
    this.segments = [];
    this.zise = 12;
    this.loadSegments();
}

Snake.prototype.loadSegments = function () {
    for (let i = 0; i < this.numSegs; i++) {
        this.segments[i] = new JSVector(this.loc.x, this.loc.y);
    }
}

Snake.prototype.run = function () {
    this.update();
    this.render();
    this.checkEdges();
}

Snake.prototype.update = function () {
    this.loc.add(this.vel);//moves the head
    for (let i = 0; i < this.segments.length; i++) {
        if (i == 0) {
            let acc = JSVector.subGetNew(this.loc, this.segments[i]);
            acc.multiply(this.vel.getMagnitude());
            this.segments[i].add(acc);
        } else {
            let acc = JSVector.subGetNew(this.segments[i - 1], this.segments[i]);
            acc.normalize();
            this.segments[i].add(acc);
        }
    }
}

Snake.prototype.render = function () {
    world.ctx.beginPath();
    world.ctx.arc(this.loc.x, this.loc.y, this.zise, 0, Math.PI * 2);
    world.ctx.closePath();
    world.ctx.fillStyle = "red";
    world.ctx.strokeStyle = "blue";
    world.ctx.fill();
    world.ctx.stroke();
    for (let i = 0; i < this.segments.length; i++) {
        world.ctx.beginPath();
        world.ctx.arc(this.segments[i].x, this.segments[i].y, this.zise/this.segments.length * i, 0, Math.PI * 2);
        world.ctx.closePath();
        world.ctx.fillStyle = "red";
        world.ctx.strokeStyle = "blue";
        world.ctx.fill();
        world.ctx.stroke();
    }

}
Snake.prototype.checkEdges = function () {
    if (this.loc.x < 10) {
        this.vel.x = this.vel.x + 0.05;
    }
    if (this.loc.x > world.canvas.width - 10) {
        this.vel.x = this.vel.x - 0.05;
    }
    if (this.loc.y > world.canvas.height - 10) {
        this.vel.y = this.vel.y - 0.05;
    }
    if (this.loc.y < 10) {
        this.vel.y = this.vel.y + 0.05;
    }
}
