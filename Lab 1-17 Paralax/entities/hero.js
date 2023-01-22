function Hero(x, y, clr,) {
    //hero does not move left or right, but world moves around him
    this.loc = new JSVector(x, y);
    //vel and acc should only modify y, it works as gravity
    this.vel = new JSVector(0, 0);
    this.acc = new JSVector(0, 0);
    this.grav = new JSVector(0,0.05);
    this.ray = [];
    //short for Status Block
    this.sttBlk = {
        falling: true,
        onPlatform: false,
        alive: true,
        health: 100//to be implimented
    }
}
Hero.prototype.run = function(newX){
    this.loc.x=-newX;
    if(this.sttBlk.falling&&!this.sttBlk.onPlatform){
        this.loc.add(this.grav)
    }
    this.render();
}
Hero.prototype.render = function(){
    ctx.beginPath();
    ctx.moveTo(this.loc.x,this.loc.y);
    ctx.lineTo(this.loc.x+10,this.loc.y);
    ctx.lineTo(this.loc.x,this.loc.y+10);
    ctx.fill();
}