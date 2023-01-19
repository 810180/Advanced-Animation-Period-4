class Game{
    constructor(){
      this.platforms = [];
      this.gamePaused = false;
      this.ga = new GameArea();
      //equivilent of the canvasMainLocation
      this.camLoc = new JSVector(0,0);
      this.dims = {
        top : 0,
        left :
      }
      //entities loaded below
      this.platformes = [];
      this.hero = new Hero();
    }
    loadPlatforms = function(){

    }

    update = function(){
      //ctx is global
      //clearing is dealt with by the main functoin
      ctx.save();
      ctx.translate(-this.camLoc.x,-this.camLoc.y);
      //sets the world to the cameras locations
      ctx.restore();
    }


}//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  end Ball constructor
