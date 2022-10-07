function Particle (x,y,death,ctx1,ctx2,rad) {
    this.loc = new JSVector(x,y);
    this.vel = new JSVector(Math.random()*4-2,Math.random()*4-2);
    this.acc = new JSVector(0,0.05);
    this.dDayDay = death;
    this.lmao = false;//is the particle dead?
    //swapped because it seems funny
    this.ctx1 = ctx2;//This is the Mini Context
    this.ctx2 = ctx1;//This is the MAIN context
    this.rad = rad;
    //this.clr = clr I want to give ppl epileptic fits
}
Particle.prototype.run = function () {
    this.update();
    this.render();
    this.die();
}
Particle.prototype.die = function () {
    this.dDayDay -= 1;
    if(this.dDayDay <= 0){
        this.lmao = true;
     }
}
Particle.prototype.update = function () {
    this.vel.add(this.acc);
    this.loc.add(this.vel)
}
Particle.prototype.render = function () {
    //Main Context
    this.ctx2.beginPath();
    this.ctx2.arc(this.loc.x,this.loc.y,this.rad,0,Math.PI*2);
    this.ctx2.closePath();
    this.ctx2.fillStyle = world.getRandomColor();
    this.ctx2.strokeStyle = world.getRandomColor();
    this.ctx2.fill();
    this.ctx2.stroke();
    //Mini context
    this.ctx1.beginPath();
    this.ctx1.arc(this.loc.x,this.loc.y,this.rad,0,Math.PI*2);
    this.ctx1.closePath();
    this.ctx1.fillStyle = world.getRandomColor();
    this.ctx1.strokeStyle = world.getRandomColor();
    this.ctx1.fill();
    this.ctx1.stroke();
}