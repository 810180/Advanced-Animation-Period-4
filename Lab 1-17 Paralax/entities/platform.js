function Platform(x,y,width,clr){
    this.loc = new JSVector(x,y);
    //this is in relation to global world
    //loc is also the top left of the platform
    this.clr = clr;
    this.size = width;
    this.height = 10;//all platforms will have the same height.
    this.enemies = [];
    this.pickUps = [];
}
Platform.prototype.run = function(){
    this.render();
}
Platform.prototype.checkHero = function(){

}
//Platform.portotype.manageEnemies = function(){

//}
Platform.prototype.render = function(){
    ctx.beginPath();
    ctx.moveTo(this.loc.x,this.loc.y);//top left
    ctx.lineTo(this.loc.x+this.width,this.loc.y);//top right
    ctx.lineTo(this.loc.x+this.width,this.loc.y+this.height);
    ctx.lineTo(this.loc.x,this.loc.y+this.height);//bottom left
    ctx.fillStyle = "red";
    ctx.strokeStyle = "green";
    ctx.stroke();
    ctx.fill();
}