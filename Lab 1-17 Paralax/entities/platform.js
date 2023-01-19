function Platform(x,y,width,clr){
    this.loc = new JSVector(x,y);
    //this is in relation to global world
    //loc is also the top left of the platform
    this.clr = clr;
    this.size = width;
}
Platform.prototype.run = function(){

}
Platform.prototype.checkHero = function(){

}
Platform.prototype.render = function(){
    ctx.beginPath();
    ctx.moveTo(this.loc.x,this.loc.y);

}