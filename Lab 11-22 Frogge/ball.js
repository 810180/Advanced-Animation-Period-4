function Ball(x, y, d) {
  this.loc = new JSVector(x,y);//  add a location vector
  let dx = Math.random() * 4 - 2;
  let dy = Math.random() * 4 - 2;
  this.vel = new JSVector(dx,dy); // add a velocity vector
  this.acc = new JSVector(0,0.0);//  add an acceleration vector
  this.diam = d;
//  choose a random color from this array
  this.clrArray = ["#2255AA", "FF0022", "Chocolate", "FireBrick", "GreenYellow", "LightSeaGreen", "Teal"];
  //this.clrArray = ["FireBrick", "FireBrick"];
  this.clrIndex = Math.floor(Math.random() * this.clrArray.length);
  this.clr = this.clrArray[this.clrIndex];
}

Ball.prototype.run = function () {
  this.render();
  //this.collision();
  this.update();
  this.bounce();
}

Ball.prototype.render = function () {
  context.beginPath();    // clear old path
  //this.loc.x goes to this ball, then to loc, then to x
  context.arc(this.loc.x, this.loc.y, this.diam, 0, 2 * Math.PI);  //  change x and y to this.loc.x and this.loc.y
  context.strokeStyle = "black";  // color to fill
  context.fillStyle = this.clr;     // color to stroke
  context.fill();     // render the fill
  context.stroke();   // render the stroke
}

Ball.prototype.update = function () {
  this.vel.add(this.acc);
  this.loc.add(this.vel);
}

Ball.prototype.bounce = function () {
  if(this.loc.y > canvas.height){//"bounces" ball against wall
    this.vel.y = Math.abs(this.vel.y)*-1
    this.y = canvas.height - 1;
  }
  if(this.loc.y<0){
    this.vel.y = -this.vel.y;
  }
  if(this.loc.x > canvas.width|| this.loc.x < 0){//bounces ball on both sides
    this.vel.x = -this.vel.x;
  }
}
Ball.prototype.collision = function () {
  //experimental - enables the balls to bounce
  for(let i = 0; i<balls.length-1;i++){
    for(let j = i+1; j<balls.length;j++){
      if(balls[i].loc.distance(balls[j])<=this.diam){//dont do .loc cause code already referenecs that
        balls[i].vel.add(balls[j].vel);
      }
    }
  }
}