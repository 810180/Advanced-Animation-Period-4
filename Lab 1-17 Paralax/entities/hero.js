function Hero(x, y, clr,) {
    //hero does not move left or right, but world moves around him
    this.loc = new JSVector(x, y);
    //vel and acc should only modify y, it works as gravity
    this.vel = new JSVector(0, 0);
    this.acc = new JSVector(0, 0);
    this.ray = [];
    //short for Status Block
    this.sttBlk = {
        falling: false,
        onPlatform: false,
        alive: true,
        health: 100//to be implimented
    }
}
Hero.prototype.run = function(){

}
Hero.prototype.render= function(){

}