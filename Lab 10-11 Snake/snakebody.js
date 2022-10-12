function sBody(headX,headY,size,ctx1,ctx2) {
    this.loc = new JSVector(20,20);
    this.hLoc = new JSVector(headX,headY);
    this.vel = JSVector.subGetNew(this.loc,this.hLoc);
    this.size = size;
    this.ctx1 = ctx1;
    this.ctx2 = ctx2;
}
sBody.prototype.run = function () {
    this.render();
    this.update();
}
sBody.prototype.render = function () {
    this.ctx1.beginPath();
    this.ctx1.arc(this.loc.x,this.loc.y,this.size,0,Math.PI*2);
    this.ctx1.closePath();
    this.ctx1.fill();
    this.ctx1.stroke();
    //minicanvas rendering
    this.ctx2.beginPath();
    this.ctx2.arc(this.loc.x,this.loc.y,this.size,0,Math.PI*2);
    this.ctx2.closePath();
    this.ctx2.fill();
    this.ctx2.stroke();
}
sBody.prototype.update = function () {
    this.vel = JSVector.subGetNew(this.loc,this.hLoc);
    this.vel.limit(2);
    this.loc.add(this.vel);
    
}