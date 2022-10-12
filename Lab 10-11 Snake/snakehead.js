function sHead(x,y,size,ctx1,ctx2,taleNo) {
    //initializes the head of the snake, this controls where it is and where it renders
    this.loc = new JSVector(x,y);
    this.vel = new JSVector(Math.random()*4-2,Math.random()*4-2);
    this.ctx1 = ctx1;
    this.ctx2 = ctx2;
    this.size = size;
    this.tails = [];
for(let i = 0;i<taleNo;i++){
        this.tails[i] = new sBody(this.loc.x,this.loc.y,5,this.ctx1,this.ctx2);
    }
}
sHead.prototype.run = function () {
    this.update();
    this.render();
    this.checkEdges();
    this.snail();
}
sHead.prototype.snail = function () {
    for(let i = 0; i<this.tails.length; i++){
        this.tails[i].run();
    }
}
sHead.prototype.update = function () {
    this.loc.add(this.vel);
    this.vel.limit(3);
}
sHead.prototype.render = function () {
    this.ctx1.beginPath();
    this.ctx1.arc(this.loc.x,this.loc.y,this.size,0,Math.PI*2);
    this.ctx1.closePath();
    this.ctx1.fill();
    this.ctx1.stroke();

    this.ctx2.beginPath();
    this.ctx2.arc(this.loc.x,this.loc.y,this.size,0,Math.PI*2);
    this.ctx2.closePath();
    this.ctx2.fill();
    this.ctx2.stroke();
}
sHead.prototype.checkEdges = function () {
    if(this.loc.x<world.dims.left+20){
        this.vel.x = this.vel.x + 0.05
      }
      if(this.loc.x>world.dims.right-20){
        this.vel.x = this.vel.x - 0.05
      }
      if(this.loc.y>world.dims.top-20){
        this.vel.x = this.vel.x - 0.05
      }
      if(this.loc.y<world.dims.bottom+20){
        this.vel.x = this.vel.x + 0.05
      }
}