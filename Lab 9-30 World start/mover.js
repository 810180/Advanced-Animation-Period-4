function Mover(x, y, rad, clr, ctx1, ctx2) {
  //mover properties
  this.loc = new JSVector(x, y);//location
  this.vel = new JSVector(Math.random() * 4 - 2, Math.random() * 4 - 2)
  this.rad = rad;//size
  this.clr = clr;
  this.ctx1 = ctx1;//this is the MAIN context
  this.ctx2 = ctx2;//this is the MINI context

}//++++++++++++++++++++++++++++++++ end mover constructor

//++++++++++++++++++++++++++++++++ mover methods
Mover.prototype.run = function () {
  this.update();
  this.checkEdges();
  this.render();
}

Mover.prototype.update = function () {
  this.loc.add(this.vel);
}


Mover.prototype.checkEdges = function () {
  if(this.loc.x<world.dims.left+this.rad){
    this.vel.x = -this.vel.x;
  }
  if(this.loc.x>world.dims.right-this.rad){
    this.vel.x = -this.vel.x;
  }
  if(this.loc.y>world.dims.top+this.rad){
    this.vel.y = -this.vel.y;
  }
  if(this.loc.y<world.dims.bottom-this.rad){
    this.vel.y = -this.vel.y;
  }
}


Mover.prototype.render = function () {
  //  render balls in world
  this.ctx1.beginPath();
  this.ctx1.arc(this.loc.x, this.loc.y, this.rad, 0, Math.PI * 2);
  this.ctx1.closePath();
  this.ctx1.strokeStyle = this.clr;
  this.ctx1.fillStyle = this.clr;
  this.ctx1.fill();
  this.ctx1.stroke();
  //  render balls in mini map
  this.ctx2.beginPath();
  this.ctx2.arc(this.loc.x, this.loc.y, this.rad, 0, Math.PI * 2);
  this.ctx2.closePath();
  this.ctx2.strokeStyle = this.clr;
  this.ctx2.fillStyle = this.clr;
  this.ctx2.fill();
  this.ctx2.stroke();

}
