function Platform(x, y, width, clr) {
    this.loc = new JSVector(x, y);
    //this is in relation to global world
    //loc is also the top left of the platform
    this.clr = clr;
    this.size = width;
    this.height = 10;//all platforms will have the same height.
    this.enemies = [];
    this.pickUps = [];
}
Platform.prototype.run = function () {
    this.render();
    this.checkHero();
    this.manageEnemies();
    this.managePickups();
}
Platform.prototype.checkHero = function () {
    //resets the heros falling and on platform at the beginning of the her so it doenst interfere here
    if (game.hero.loc.x > this.loc.x && game.hero.loc.x < (this.loc.x + this.size)) {
        if (game.hero.loc.y >= this.loc.y && game.hero.loc.y < (this.loc.y + 10)) {
            game.hero.sttBlk.falling = false;
            game.hero.sttBlk.onPlatform = true;
            game.hero.loc.y = this.loc.y - 1;
            if (game.hero.vel.y > 0) {
                //needs ifstatement to keep it from stopping the jump
                game.hero.vel.y = 0;//sets the velocity to 0 so it doesnt fall thru the platform
            }
        }
    }
}
Platform.prototype.manageEnemies = function () {

}
Platform.prototype.managePickups = function () {

}
Platform.prototype.render = function () {
    ctx.beginPath();
    ctx.moveTo(this.loc.x, this.loc.y);//top left
    ctx.lineTo(this.loc.x + this.size, this.loc.y);//top right
    ctx.lineTo(this.loc.x + this.size, this.loc.y + this.height);
    ctx.lineTo(this.loc.x, this.loc.y + this.height);//bottom left
    ctx.closePath();
    ctx.fillStyle = this.clr;
    ctx.strokeStyle = "green";
    ctx.stroke();
    ctx.fill();
}