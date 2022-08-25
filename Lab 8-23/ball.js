

function Ball(x, y, dx, dy, r){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.r = r;
}

Ball.prototype.run = function(){
  this.update();
  this.bounce();
  this.render();
}


Ball.prototype.render = function(){

    context.beginPath();    //clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.arc(this.x,this.y,this.r, 0, 2*Math.PI);
    context.strokeStyle = 0xff0000; // fill color
    context.fillStyle = 0xff0000; //color to stroke
    context.fill();     //renders fill
    context.stroke();   //reners stroke

}

Ball.prototype.update = function(){

    this.x += this.dx;
    this.y += this.dy

}

Ball.prototype.bounce = function(){
  if((this.x+this.dx)>canvas.width)//checks if x+dx is going to go over the width and swaps it if necessary
    {
        this.dx = -(Math.random()*4)+0.01//math.random to make it more spicy
            //dont know if the +0.01 is necessary, but dont want to get it stuck on 0 speed 
    } else if((this.x+this.dx)<0)
    {
        this.dx = (Math.random()*4)+0.01
    }
    if((this.y+this.dy)>canvas.height)
    {
        this.dy = -(Math.random()*4)+0.01
    } else if((this.y+this.dy)<0)
    {
        this.dy = (Math.random()*4)+0.01
    }
}

