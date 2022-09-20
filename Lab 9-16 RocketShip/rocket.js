function Rocket(x, y, d) {
  this.loc = new JSVector(x, y);//  add a location vector
  let dx = Math.random() * 4 - 2;
  let dy = Math.random() * 4 - 2;
  this.vel = new JSVector(dx, dy); // add a velocity vector
  this.acc = new JSVector(0, 0);//  add an acceleration vector
  this.diam = d;
  this.clr;
}

Rocket.prototype.run = function () {
  this.render();
  //trail velocity and accel have to be manually matched here(could be set in update?)
  trail.vel.x = rocket.vel.x;
  trail.vel.y = rocket.vel.y;
  trail.acc.x = rocket.acc.x;
  trail.acc.y = rocket.acc.y;
  this.update();
  this.edgeCheck();
}

Rocket.prototype.render = function () {
  for (let i = 0; i < asteroid.length; i++) {
    if (this === asteroid[i]) {
      //asteroid rendering
      this.clr = "#808080";//this.clr is set here instead of in initialzing portion to make it keep colors for objects seperate
      context.beginPath();
      context.arc(this.loc.x, this.loc.y, this.diam, 0, 2 * Math.PI);
      context.strokeStyle = this.clr;
      context.fillStyle = this.clr;
      context.fill();
      context.stroke();
    }
  }
  if (this === rocket) {
    this.clr = "#FFC0CB";
    context.beginPath();    // clear old path
    context.save();
    context.translate(this.loc.x, this.loc.y);
    context.rotate(this.vel.getDirection());
    //rocket drawing here
    context.strokeStyle = this.clr;
    context.moveTo(this.diam, 0);
    context.lineTo(0, this.diam / 4);
    context.lineTo(this.diam / 8, 0);//divot of the rocket
    context.lineTo(0, -this.diam / 4);
    context.closePath();
    context.fillStyle = this.clr;
    context.fill();
    context.restore();
    context.stroke();   // render the stroke
  }
  if (this === trail) {//the trail and rocket have to be seperate objects
    this.clr = "red";
    context.save();
    context.translate(this.loc.x, this.loc.y);
    context.rotate(this.vel.getDirection());
    context.strokeStyle = this.clr;
    //flame drawing here
    context.moveTo(0, 0);//starts in the divot
    context.lineTo(-this.diam / 8, this.diam / 8);
    context.lineTo(-this.diam / 4 * Math.abs(rocket.vel.getMagnitude()), 0);
    context.lineTo(-this.diam / 8, -this.diam / 8);
    context.closePath();//close path will help fill the object
    context.fillStyle = this.clr;
    context.fill();
    context.restore();
    context.stroke();
  }
  if (this === planet) {
    this.clr = "red";
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.diam, 0, 2 * Math.PI);//standard circle generation
    context.strokeStyle = "black";
    context.fillStyle = this.clr;
    context.fill();
    context.stroke();
  }
}

Rocket.prototype.update = function () {
  if (this === rocket || this === trail) {

    let d = this.loc.distance(planet.loc);
    this.acc = JSVector.subGetNew(planet.loc, this.loc);
    this.acc.normalize();
    this.acc.multiply(0.05);
    this.vel.add(this.acc);
    this.vel.limit(4.05);//rocket must be slighly faster in order to catch up to planet

  } else if (this === planet && this.loc.distance(rocket.loc) < 150) {//mmoves the plant when the rocket gets close
    let d = this.loc.distance(rocket.loc);
    this.acc = JSVector.subGetNew(this.loc, rocket.loc);
    //acceleration is calculated and limited here
    this.acc.normalize();
    this.acc.multiply(0.05);
    this.vel.add(this.acc);
    this.vel.limit(3);
    if (this.loc.distance(rocket.loc) < this.diam * 2) {//checks if the rocket touches the planet to moves planet
      this.loc.x = Math.random() * canvas.width;
      this.loc.y = Math.random() * canvas.height;
    }
  } else if (this === planet && this.loc.distance(rocket.loc) > 200 && this.vel.getMagnitude() > 0) {
    //if the planet is far from the rocket then it stops acceleration
    this.vel.setMagnitude(this.vel.getMagnitude() - 0.05);
  }
  this.loc.add(this.vel);
}

Rocket.prototype.edgeCheck = function () {
  //rocket/trail/planet/asteroids will loop back to other side once they reach the edge
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
