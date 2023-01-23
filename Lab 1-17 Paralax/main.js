

// global variables for canvas and context
var game, canvas, ctx;
var gamestate;
window.onload = init;//  After the window has been loaded, go to init

function init(){
  gamestate = 0;
  //sets the gamestate to 0 to start the game
  canvas = document.createElement('canvas');
  canvas.style.border = 'solid black 2px';
  //canvas.style.backgroundColor = 'rgba(0,0,0, .95)';
  canvas.width = 1096;  // 800 - 4 for the border
  canvas.height = 696; // 700 - 4 for the border
  ctx = canvas.getContext('2d'); // This is the context
  game = new Game();
  //the game variable will the world larger then the canvas
  animate();
}


function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  //ctx.fillStyle = 'rgba(0,0,0,.05)'
  //ctx.fillRect(0,0,canvas.width,canvas.height); 
  game.update()
  requestAnimationFrame(animate);
}
window.addEventListener("keypress", function (event) {
  switch (event.code) {
    case "KeyA":
      if (game.camLoc.x+100 > game.dims.left)
        game.camLoc.x -= 2;
      break;
    case "KeyD":
      if (game.camLoc.x + canvas.width -100 < game.dims.right)
        game.camLoc.x += 2;
      break;
    case "KeyW":
      console.log("key registered");
      if(game.hero.sttBlk.onPlatform){
        console.log("on platform");
        game.hero.sttBlk.onPlatform = false;
        game.hero.sttBlk.falling = true;
        game.hero.acc.y =-.75;
        game.hero.loc.y +=10;
      }
      break;
    //left and right cam movements
  }
}, false);