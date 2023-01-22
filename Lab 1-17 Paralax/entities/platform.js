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
    this.checkHero();
    this.manageEnemies();
    this.managePickups();
}
Platform.prototype.checkHero = function(){
if(game.hero.loc.y>=this.loc.y && game.hero.loc.y<this.loc.y+10){
    //makes sure that the hero is above the platform
    if(game.hero.loc.x>this.loc.x && game.her.loc.x<(this.loc.x+this.size)){
        //if the hero is btweel left and right edges of the platform
        game.hero.sttBlk.falling = false;
        game.hero.sttBlk.onPlatform = true;
    } else {
        game.hero.sttBlk.falling = true;
        game.hero.sttBlk.onPlatform = false;
    }
}
}
Platform.prototype.manageEnemies = function(){

}
Platform.prototype.managePickups = function(){

}
Platform.prototype.render = function(){
    ctx.beginPath();
    ctx.moveTo(this.loc.x,this.loc.y);//top left
    ctx.lineTo(this.loc.x+this.size,this.loc.y);//top right
    ctx.lineTo(this.loc.x+this.size,this.loc.y+this.height);
    ctx.lineTo(this.loc.x,this.loc.y+this.height);//bottom left
    ctx.fillStyle = "red";
    ctx.strokeStyle = "green";
    ctx.stroke();
    ctx.fill();
}