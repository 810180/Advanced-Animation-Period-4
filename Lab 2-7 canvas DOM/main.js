

// global variables for canvas and context
var game, canvas, ctx;
var goal = "Boom!!";
var ltrs = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\",.-1234567890`~';:<>/!@#$%^&*()[]-=_+{}\\ ";
var cLtr, compTxt;//current letter and all compiled text
window.onload = init;//  After the window has been loaded, go to init

function init(){
  this.counting = 10;
  this.increment = 60;
  cLtr = 0;
  compTxt = "";
  canvas = document.createElement('canvas');
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(0,0,0, .95)';
  canvas.width = 1096;  // 800 - 4 for the border
  canvas.height = 696; // 700 - 4 for the border
  ctx = canvas.getContext('2d'); // This is the context
  game = new Game();
  //creates the text within the test div
  document.getElementById("testDiv").innerHTML = "test";
  animate();
}

function animate(){
  //the text is then overwritted by this code
  if(cLtr < goal.length){
    let random = ltrs[Math.floor(Math.random()*ltrs.length)];
    if(goal[cLtr] == random){
      compTxt += random;
      cLtr++;
    }
    document.getElementById("testDiv").innerHTML = compTxt + random;
  } else {
    document.getElementById("testDiv").innerHTML = compTxt;
    document.getElementById("countdown").innerHTML = this.counting;
    this.increment--;
    if(this.increment <= 0 && this.counting >=0){
      this.increment = 60;
      this.counting--;
    } else if(this.counting < 0){
      this.counting = "Boom"
    }
  }
  
  
  ctx.fillStyle = 'rgba(0,0,0,.05)'
  ctx.fillRect(0,0,canvas.width,canvas.height); 
  game.update();
  requestAnimationFrame(animate);
}

  
