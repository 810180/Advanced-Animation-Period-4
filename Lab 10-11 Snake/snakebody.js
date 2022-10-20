function sBody(headX, headY, size, ctx1, ctx2) {
    this.loc = new JSVector(headX, headY);
    this.vel = new JSVector(0, 0)
    this.size = size;
    this.ctx1 = ctx1;
    this.ctx2 = ctx2;
    this.sWeight;
}
sBody.prototype.run = function (upperLoc, mag) {
    this.render(upperLoc);
    this.update(upperLoc, mag);
}
sBody.prototype.render = function (upperLoc) {
    //Circle Rendering
    this.ctx1.beginPath();//draws body on the main cnavas
    this.ctx1.arc(this.loc.x, this.loc.y, this.size, 0, Math.PI * 2);
    this.ctx1.closePath();
    this.ctx1.fill();
    this.ctx1.stroke();
    this.ctx2.beginPath();//draws body on the minimap
    this.ctx2.arc(this.loc.x, this.loc.y, this.size, 0, Math.PI * 2);
    this.ctx2.closePath();
    this.ctx2.fill();
    this.ctx2.stroke();
    //Line Rendering
    this.ctx1.beginPath();
    this.ctx1.moveTo(this.loc.x, this.loc.y);
    this.ctx1.lineTo(upperLoc.x, upperLoc.y);
    this.ctx1.closePath();
    this.ctx1.stroke();
    this.ctx2.beginPath();
    this.ctx2.moveTo(this.loc.x, this.loc.y);
    this.ctx2.lineTo(upperLoc.x, upperLoc.y);
    this.ctx2.closePath();
    this.ctx2.stroke();

}
sBody.prototype.update = function (upperLoc, mag) {

    this.vel.add(JSVector.subGetNew(upperLoc, this.loc));//adds the new direction tothe velocity vector
    this.vel.limit(mag - 0.5);

    if (this.loc.distance(upperLoc) < 10) {//makes sure that the bodies are a sufficient distance fron the head/next link
        this.vel.setMagnitude(this.vel.getMagnitude() - 0.5)
    }
    if (this.loc.distance(upperLoc) > 30) {
        this.vel.setMagnitude(this.vel.getMagnitude() + 1)
    }
    this.loc.add(this.vel);
}