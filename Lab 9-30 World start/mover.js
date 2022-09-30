function Mover(x, y, rad, clr) {
  //mover properties
  this.loc = new JSVector(x,y);
  this.vel = new JSVector(Math.random*4-2, Math.random*4-2)
  this.rad = rad;
  this.clr = clr;

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
}


Mover.prototype.render = function () {
   //  render balls in world
   
   //  render balls in mini map
    
}
