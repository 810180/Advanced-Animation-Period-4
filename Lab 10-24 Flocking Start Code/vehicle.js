//  Vehicle constructor function +++++++++++++++++++++++++++++
function Vehicle(loc) {
  this.loc = new JSVector(loc.x, loc.y);
  let dx = Math.random() * 4 - 2;
  let dy = Math.random() * 4 - 2;
  this.vel = new JSVector(dx, dy);
  this.acc = new JSVector(0, 0);

  this.clr = "rgba(180,0,220,.8)";
  this.maxSpeed = document.getElementById("slider2").value;  // %%%%%%%%%%%%%%%%%
  this.maxForce = document.getElementById("slider1").value;  // %%%%%%%%%%%%%%%%%
  //############################################################################# not attached to slider
  this.desiredSep = 10;//  desired separation between vehicles
  this.scl = 3;
}

//  placing methods in the prototype 
Vehicle.prototype.run = function (vehicles) {
  this.flock(vehicles);
  this.update();
  this.checkEdges()
  this.render();
}

Vehicle.prototype.flock = function (vehicles) {
  //  flock force is the accumulation of all forces
  let flockForce = new JSVector(0, 0);
  // set up force vectors to be added to acc
  let sep = this.separate();
  let ali = this.align(vehicles);
  let coh = this.cohesion(vehicles);
  //  set multiples via sliders 
  let sepMult = document.getElementById("slider3").value; // %%%%%%%%%%%%%%%%%%
  let aliMult = document.getElementById("slider4").value;;  // %%%%%%%%%%%%%%%%%%
  let cohMult = document.getElementById("slider5").value;;    // %%%%%%%%%%%%%%%%%%
  //  calculate three forces
  sep.multiply(sepMult);
  ali.multiply(aliMult);
  coh.multiply(cohMult);
  // //  add each of these to flockForce
  flockForce.add(sep);
  //flockForce.add(ali);
  flockForce.add(coh);
  this.applyForce(flockForce);//adds to acceleration
}
//+++++++++++++++++++++++++++++++++  Flocking functions
Vehicle.prototype.applyForce = function (force) {
  this.acc.add(force);
}

Vehicle.prototype.separate = function () {
  // A vector for average of separation forces
  let v = world.vehicles;
  let ds = this.desiredSep * this.desiredSep;//this is the desired distance squared
  let sum = new JSVector(0, 0);
  let steer = new JSVector(0, 0);//creates the JSVector so no errors happen
  //for (let cV = 0; cV < v.length; cV++) {
  let count = 0;
  for (let other = 0; other < v.length; other++) {
    if (this !== v[other]) {//makes sure it doesnt reference itself please to me, v[other]
      let d = this.loc.distanceSquared(v[other].loc);//uses distance squared to save time - distance from me to another
      if (d < ds) {
        let diff = JSVector.subGetNew(this.loc, v[other].loc);//vector from this location to the other
        diff.normalize();
        sum.add(diff);//adds them all to find the average
        count++;//again to find the average
      }
    }
  }
  if (count !== 0) {//Makes sure you dont divide by 0
    sum.divide(count);//gets the average direction of the one you are currently in.
    sum.normalize();
    sum.multiply(this.maxSpeed);
    steer = JSVector.subGetNew(sum, this.vel);
    steer.limit(this.maxForce);//makes sure that you dont exceed the max speed.
    //this.acc.add(steer);
  }
  //}
  
  let separationForce = steer.copy();
  return separationForce;
}

Vehicle.prototype.align = function () {
  let steeringForce = new JSVector();
  let v = world.vehicles;
  let sum;
  let ds = this.desiredSep * this.desiredSep;
  let count = 0;
  for(let i = 0; i<v.length; i++){
    let d= this.loc.distanceSquared(v[i].loc);
    if(d<ds){
      sum += v[i].vel.getDirection();
      count++;
    }
  }
  if(count != 0){
    sum /= count;
    steeringForce = new JSVector(1,1);
    steeringForce.setMagnitude(1);
    steeringForce.setDirection(sum);
  }
  // for (let i = 0; i < v.length; i++) {
  //   sum.add(v[i].vel);
  // }
  // sum.divide(v.length);
  // let steer = JSVector.subGetNew(sum, this.vel);
  // steer.limit(this.maxForce);
  // let steeringForce = steer.copy();
  // // A vector for average of align forces
  return steeringForce;
}

Vehicle.prototype.cohesion = function () {
  let cohesionForce = new JSVector(0,0);
  let v = world.vehicles;
  let distSq = this.desiredSep * this.desiredSep;
  let count = 0;
  let sum = new JSVector(0, 0);
  for (let i = 0; i < v.length; i++) {
    let d = this.loc.distanceSquared(v[i].loc);
    if (d < distSq) {
      sum.add(v[i].loc);
      count++;
    }
    if (count != 0) {
      sum.divide(count);
      cohesionForce = this.seek(sum)
      return cohesionForce;
    }
  }
  // A vector for average of cohesion forces
  return cohesionForce;
}

Vehicle.prototype.seek = function (target) {
  // A vector pointing from the location to the target
  let desired = JSVector.subGetNew(target, this.loc);
  desired.normalize();
  desired.multiply(this.maxSpeed);
  let steer = JSVector.subGetNew(desired, this.vel);
  steer.limit(this.maxForce);
  //this.applyForce(steer);
  return steer;
}
//+++++++++++++++++++++++++++++++++  Flocking functions

Vehicle.prototype.update = function () {
  //this.seek(world.herder);
  this.flock();
  //this.separate(this.loc);
  //this.separate();//temp to fix stuff should be claled in flock
  this.vel.add(this.acc);
  this.vel.limit(1);
  this.loc.add(this.vel);

}

Vehicle.prototype.checkEdges = function () {
  if (this.loc.x > world.canvas.width) this.loc.x = 5;
  if (this.loc.x < 0) this.loc.x = world.canvas.width;
  if (this.loc.y > world.canvas.height) this.loc.y = 0;
  if (this.loc.y < 0) this.loc.y = world.canvas.height;
}

Vehicle.prototype.render = function () {
  let ctx = world.ctx;
  ctx.save();
  ctx.translate(this.loc.x, this.loc.y);
  ctx.rotate(this.vel.getDirection() + Math.PI / 2); //offset 90 degrees
  ctx.beginPath();
  ctx.strokeStyle = this.clr;
  ctx.fillStyle = this.clr;
  ctx.moveTo(0, -this.scl);
  ctx.lineTo(-this.scl, this.scl);
  ctx.lineTo(0, 0);
  ctx.lineTo(this.scl, this.scl);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  ctx.restore();
}

