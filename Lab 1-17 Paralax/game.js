class Game {
  constructor() {
    this.gamePaused = false;
    this.ga = new GameArea();
    //equivilent of the canvasMainLocation
    this.camLoc = new JSVector(0, 0);
    this.dims = {
      top: 0,
      bottom: 600,
      left: 0,
      right: 2000,
      width: 2000,
      height: 600
    }
    //entities loaded below
    this.platform = [];
    this.hero = new Hero(canvas.width/2,100);
    this.loadPlatforms();
  }
  loadPlatforms = function () {
    this.platform[0] = new Platform(canvas.width/2-50, canvas.height/2, 100, "white");
    this.platform[1] = new Platform(canvas.width/2+100, canvas.height/2, 100, "black");
  }
  loadHero = function () {

  }
  update = function () {
    //ctx is global
    //clearing is dealt with by the main functoin
    ctx.save();
    ctx.translate(-this.camLoc.x, -this.camLoc.y);
    //all coordinates are in relation to world x,y this makes it so that the camera properly renders them
    //run platforms
    for (let i = 0; i < this.platform.length; i++) {
      this.platform[i].run();
    }
    this.hero.run((this.camLoc.x)+(canvas.width/2));
    //this works dont tuch
    //sets the hero's location to the middle of the screen
    ctx.restore();
  }
}//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  End of game class
