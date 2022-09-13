function Mover(x, y, d) {
  this.loc = new JSVector(x,y);//  add a location vector
  let dx = Math.random() * 4 - 2;
  let dy = Math.random() * 4 - 2;
  this.vel = new JSVector(dx,dy); // add a velocity vector
  this.acc = new JSVector(0,0);//  add an acceleration vector
  this.diam = d;
//  choose a random color from this array
  this.clrArray = ["#2255AA", "FF0022", "Chocolate", "FireBrick", "GreenYellow", "LightSeaGreen", "Teal"];
  //this.clrArray = ["FireBrick", "FireBrick"];
  this.clrIndex = Math.floor(Math.random() * this.clrArray.length);
  this.clr = this.clrArray[this.clrIndex];
}

Mover.prototype.run = function () {
  this.render();
  this.attract();
  //this.repel();
  this.update();
  this.bounce();
}

Mover.prototype.render = function () {
  context.beginPath();    // clear old path
  //this.loc.x goes to this ball, then to loc, then to x
  context.arc(this.loc.x, this.loc.y, this.diam, 0, 2 * Math.PI);  //  change x and y to this.loc.x and this.loc.y
  context.strokeStyle = "black";  // color to fill
  context.fillStyle = this.clr;     // color to stroke
  context.fill();     // render the fill
  context.stroke();   // render the stroke
}

Mover.prototype.update = function () {
  this.vel.add(this.acc);
  this.loc.add(this.vel);
  //set accel to 0 and change accel to be the attraction?
  this.acc.multiply(0);
}

Mover.prototype.bounce = function () {
  if(this.loc.y > canvas.height || this.loc.y < 0){//"bounces" ball against wall
    this.vel. y *= -1;
  }
  if(this.loc.x > canvas.width|| this.loc.x < 0){//bounces ball on both sides
    this.vel.x = -this.vel.x;
  }
}

Mover.prototype.attract = function () {
  for(let i = 0; i<movers.length; i++){
    if(attractor.loc.distance(movers[i].loc)<50){
      let newVec;
      newVec = JSVector.addGetNew(movers[i].loc, attractor.loc);
      //need to normalize then add to movers, drifts right?
      newVec.normalize();
      newVec.setMagnitude(newVec.getMagnitude());//it always gets pulled to the right
      movers[i].acc.setMagnitude(newVec.getMagnitude());
      movers[i].acc.setDirection(newVec.getDirection());
    }
  }
}

Mover.prototype.repel = function () {
  for(let i = 0; i<movers.length; i++){
    if(repeller.loc.distance(movers[i].loc)<50){
      let newVec;
      newVec = JSVector.subGetNew(movers[i].loc, attractor.loc);
      //need to normalize then add to this
      newVec.normalize();
      newVec.setMagnitude(newVec.getMagnitude()*0.05);
      movers[i].acc.setMagnitude(newVec.getMagnitude());
      movers[i].acc.setDirection(newVec.getDirection());
    }
  }
}