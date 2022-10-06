function particleSystems(x,y,ctx1,ctx2){
    this.sLoc = new JSVector(x,y);
    this.particles = [];
    this.ctx1 = ctx1;
    this.ctx2 = ctx2;
    //random death day
}
particleSystems.prototype.newparticle = function () {
    this.particles[this.particles.length] = (new Particle(this.sLoc.x,this.sLoc.y, Math.random()*500 + 500,this.ctx1,this.ctx2));
}
particleSystems.prototype.lmaoF = function () {
    for(let i = this.particles.length-1;i>=0;i++){
        if(this.particles[i].lamo == true){
            this.particles.splice(i,1);
        }
    }
}
particleSystems.prototype.run = function () {
    this.newparticle();
    this.lmaoF();
    for(let i = 0; i<this.particles.length; i++){
        this.particles[i].run()
    }
}