function Bubble(x, y, d) {
  this.loc = new JSVector(x, y);//  add a location vector
  let dx = Math.random() * 4 - 2;
  let dy = Math.random() * 4 - 2;
  this.vel = new JSVector(dx, dy); // add a velocity vector
  this.acc = new JSVector(0, 0);//  add an acceleration vector
  this.diam = d;
  //  choose a random color from this array
  this.clrArray = ["#FFA500"];
  this.clrIndex = Math.floor(Math.random() * this.clrArray.length);
  this.clr = this.clrArray[this.clrIndex];
}

Bubble.prototype.run = function () {
  this.render();
  this.clr = "#FFA500"//sets color to orange at the beginning of the frame, so that it may be changed later
  this.overlap();
  this.update();
  this.bounce();
}

Bubble.prototype.render = function () {
  context.beginPath();    // clear old path
  //this.loc.x goes to this ball, then to loc, then to x
  context.arc(this.loc.x, this.loc.y, this.diam, 0, 2 * Math.PI);  //  change x and y to this.loc.x and this.loc.y
  context.strokeStyle = "black";  // color to fill
  context.fillStyle = this.clr;     // color to stroke
  context.fill();     // render the fill
  context.stroke();   // render the stroke
}

Bubble.prototype.update = function () {
  this.vel.x += Math.random() * 2 - 1;
  this.vel.y += Math.random() * 2 - 1;
  this.vel.limit(2);
  this.vel.add(this.acc);
  this.loc.add(this.vel);
}

Bubble.prototype.overlap = function () {
  for (let i = 0; i < bubbles.length; i++) {
    if (this.loc.distance(bubbles[i].loc) < this.diam + bubbles[i].diam && !this.loc.distance(bubbles[i].loc) == 0) {
      this.acc = JSVector.subGetNew(this.loc, bubbles[i].loc);
      this.acc.normalize();
      this.acc.multiply(0.05);
      this.clr = "#FF0000"//only works if the one above is overlaping
      }
      if(this.loc.distance(bubbles[i].loc)<50 && !this.loc.distance(bubbles[i].loc)==0){
      context.beginPath();
      context.moveTo(this.loc.x, this.loc.y);
      context.lineTo(bubbles[i].loc.x, bubbles[i].loc.y);
      context.strokeStyle = 'white';
      context.lineWidth = 1;
      context.stroke();
    }
  }
}

Bubble.prototype.bounce = function () {
  if (this.loc.y > canvas.height) {//"bounces" ball against wall
    this.vel.y = -3;
    this.loc.y = canvas.height-3;
  } else if(this.loc.y < 0){
    this.vel.y = 3
    this.loc.y = 3
  }
  if (this.loc.x > canvas.width) {//bounces ball on both sides
    this.vel.x = -3;
    this.loc.x = canvas.width-3;
  } else if(this.loc.x < 0){
    this.vel.x = 3;
    this.loc.x = 3;
  }
}