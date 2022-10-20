function Octopode(x,y,rad,numberOfArms,) {
    //location and move variables
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(Math.random() * 4 - 2, Math.random() * 4 - 2);
    this.rad = rad;
    this.clr = "red";
    //arms
    this.numArms = numberOfArms;
    this.arms = [];
    this.yum;
    this.loadArms(this.numArms);
}
Octopode.prototype.loadArms = function (n) {
    for(let i = 0; i<n;i++){
        this.arms[i] = new oArms(this.loc.x,this.loc.y, 3, 12);
    }
}
Octopode.prototype.run = function () {
    this.checkEdges();
    this.update();
    this.render();
    this.testRender();
    this.detectFood();
}
//rendering of the octopus
Octopode.prototype.update = function () {
    this.loc.add(this.vel);

}
Octopode.prototype.checkEdges = function () {
    if (this.loc.x < world.dims.left + 20) {
        this.vel.x = this.vel.x + 0.05
    }
    if (this.loc.x > world.dims.right - 20) {
        this.vel.x = this.vel.x - 0.05
    }
    if (this.loc.y > world.dims.top + 20) {
        this.vel.y = this.vel.y - 0.05
    }
    if (this.loc.y < world.dims.bottom - 20) {
        this.vel.y = this.vel.y + 0.05
    }
}
Octopode.prototype.render = function () {
    world.ctxMain.beginPath();
    world.ctxMain.arc(this.loc.x, this.loc.y, this.rad, 0, 2 * Math.PI);  //  change x and y to this.loc.x and this.loc.y
    world.ctxMain.strokeStyle = "black";  // color to fill
    world.ctxMain.fillStyle = this.clr;     // color to stroke
    world.ctxMain.fill();     // render the fill
    world.ctxMain.stroke();   // render the stroke

    world.ctxMini.beginPath();
    world.ctxMini.arc(this.loc.x, this.loc.y, this.rad, 0, 2 * Math.PI);  //  change x and y to this.loc.x and this.loc.y
    world.ctxMini.strokeStyle = "black";  // color to fill
    world.ctxMini.fillStyle = this.clr;     // color to stroke
    world.ctxMini.fill();     // render the fill
    world.ctxMini.stroke();   // render the stroke
}
//rendering of the grabbers
Octopode.prototype.testRender = function () {
    for(let i = 0; i<world.mover.length;i++){
        let disdance = this.loc.distance(world.mover[i].loc)
        if(disdance < 100){
            world.ctxMain.beginPath();
            world.ctxMain.moveTo(this.loc.x,this.loc.y);
            world.ctxMain.lineTo(world.mover[i].loc.x,world.mover[i].loc.y);
            world.ctxMain.closePath();
            world.ctxMain.fill();
            world.ctxMain.stroke();
        }
    }
}
Octopode.prototype.detectFood = function () {
    for(let i = 0; i<world.mover.length;i++){
        let dist = this.loc.distance(world.mover[i].loc);
        if(dist<100){//will only send out arm while thing is within range
            //let angle = this.loc.getAngle(world.mover[i].loc);//the angle between these two 
            this.runGrabbers(0,i);
            //how to run closest grabber not just the first one
            //get angle between this and the other, compare to angle of the arms -- angle between
            //one with the closest vector reaches forward
            //run grabber has an input that is which arm runs
        }
    }
}
Octopode.prototype.runGrabbers = function (armNumber,moverNumber) {
    this.arms[0].run(armNumber,moverNumber,this.loc);
}