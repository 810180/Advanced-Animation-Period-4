function oArms(bodyX, bodyY,zise) {
    this.headLoc = new JSVector(bodyX,bodyY);
    this.loc = new JSVector(0,0);//maybe array of location vector to determine arm position    
    this.rad = 20;
}
oArms.prototype.run = function (a,m) {
    //this.update();
    this.render(a);//make sure to use translation so that everything works
    //translate to head loc, everythins is based off of that
    this.goToFood(m);
}
oArms.prototype.goToFood = function (m) {
    let vel; 
    vel = JSVector.subGetNew(this.headLoc,world.mover[m].loc);
    vel.limit(3)
    this.loc.add(vel)
    //new JSVector from lead to food
    //set vel to that, but keep it limited
}
oArms.prototype.render = function (a) {
    world.ctxMain.save();
    world.ctxMain.translate(this.headLoc.x,this.headLoc.y);
    world.ctxMain.beginPath();
    world.ctxMain.arc(this.loc.x,this.loc.y,this.rad,0,Math.PI*2);
    world.ctxMain.fillStyle = "black";
    world.ctxMain.strokeStyle = "black";
    world.ctxMain.fill();
    world.ctxMain.stroke();
    world.ctxMain.restore();
}