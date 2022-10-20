function oArms(bodyX, bodyY, zise, numberOfSegments) {
    this.headLoc = new JSVector(bodyX, bodyY);//location of the "head of the body"
    this.goalLoc = new JSVector(0, 0);
    this.loc = new JSVector(0, 0);//the location of the head when translated;   
    this.rad = zise;
    this.armSegments = [];
    this.armSegment(numberOfSegments);
}
oArms.prototype.armSegment = function (n) {
    for (let i = 0; i < n; i++) {
        this.armSegments.push(new JSVector(this.headLoc.x, this.headLoc.y));
    }
}
oArms.prototype.run = function (a, m, h) {
    this.headLoc = h;//actually manages to move the head loc to the current location of the head
    //this.update();
    this.render(a);//make sure to use translation so that everything works
    //translate to head loc, everythins is based off of that
    this.goToFood(m);
}
oArms.prototype.goToFood = function (m) {
    this.goalLoc = world.mover[m].loc;//location ofhte mover that I want to grab
    let temp;//for the temporary vecter where the arm should go to
    let distance;//distance between this and that
    for (let i = 0; i < this.armSegments.length; i++) {
        temp = JSVector.subGetNew(this.armSegments[i], this.headLoc);//gets the vector between the head and the body
        temp.setMagnitude(world.octopi[0].vel.getMagnitude());
        temp.multiply(-1);
        this.armSegments[i].add(temp);

        distance = this.armSegments[i].distance(this.loc);
    }
    //new JSVector from lead to food
    //set vel to that, but keep it limited
}
oArms.prototype.render = function (a) {
    for (let i = 0; i < this.armSegments.length; i++) {
        //world.ctxMain.save();
        //world.ctxMain.translate(this.headLoc.x, this.headLoc.y);//moves to the head location os my brain works
        world.ctxMain.beginPath();
        world.ctxMain.arc(this.armSegments[i].x, this.armSegments[i].y, this.rad, 0, Math.PI * 2);
        world.ctxMain.fillStyle = "black";
        world.ctxMain.strokeStyle = "black";
        world.ctxMain.fill();
        world.ctxMain.stroke();
        //world.ctxMain.restore();
    }
}