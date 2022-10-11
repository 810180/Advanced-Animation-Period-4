function particleSystems(x,y,ctx1,ctx2){
    this.sLoc = new JSVector(x,y);
    this.sVel = new JSVector(Math.random()*4-2,Math.random()*4-2)
    this.particles = [];
    this.ctx1 = ctx1;
    this.ctx2 = ctx2;
    //random death day
}
particleSystems.prototype.newparticle = function () {
    this.particles[this.particles.length] = (new Particle(this.sLoc.x,this.sLoc.y, Math.random()*100 + 100,this.ctx1,this.ctx2, 2));
}
particleSystems.prototype.lmaoF = function () {
    for(let i = this.particles.length-1;i>=0;i--){
        if(this.particles[i].lmao == true){
            this.particles.splice(i,1);
        }
    }
}
particleSystems.prototype.run = function () {
    this.newparticle();//creates a new particle every phrame
    for(let i = 0; i<this.particles.length; i++){
        this.particles[i].run();
    }
    this.lmaoF();//checks to make sure the particle shouldnt die
}

//world.addEventListener("mousedown", )