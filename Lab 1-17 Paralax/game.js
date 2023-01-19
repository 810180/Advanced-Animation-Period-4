class Game{
    constructor(){
      this.gamePaused = false;
      this.ga = new GameArea();
      //equivilent of the canvasMainLocation
      this.camLoc = new JSVector(0,0);
      this.dims = {
        top : 0,
        bottom : 600,
        left : 0,
        right : 1000,
        width : 1000,
        height : 600
      }
      //entities loaded below
      this.platform = [];
      this.hero = new Hero();
    }
    loadPlatforms = function(){
      this.platform[0] = new Platform(400,450,100,"white")
    }

    update = function(){
      //ctx is global
      //clearing is dealt with by the main functoin
      ctx.save();
      ctx.translate(-this.camLoc.x,-this.camLoc.y);
      //run platforms
      for(let i = 0; i <this.platform.length;i++){
        this.platform[i].run();
      }
      //sets the world to the cameras locations
      ctx.restore();
    }
}//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  End of game class
