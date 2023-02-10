

// global variables for canvas and context
var game, canvas, ctx;
var goal = "It can now write entire sentences!!";
var ltrs = [".","a","b","c","d","e","f","g","h","i","j","k","i","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," ", "A", "B", "C", "D", "E","F", "G", "H", "I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "!", ",", "'", "\"", "@"];
var cLtr, compTxt;//current letter and all compiled text
window.onload = init;//  After the window has been loaded, go to init

function init(){
  cLtr = 0;
  compTxt = "";
  canvas = document.createElement('canvas');
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(0,0,0, .95)';
  canvas.width = 1096;  // 800 - 4 for the border
  canvas.height = 696; // 700 - 4 for the border
  ctx = canvas.getContext('2d'); // This is the context
  game = new Game();
  document.getElementById("testDiv").innerHTML = "test";
  animate();
}

function animate(){
  if(cLtr < goal.length){
    let random = ltrs[Math.floor(Math.random()*ltrs.length)];
    if(goal[cLtr] == random){
      compTxt += random;
      cLtr++;
    }
    document.getElementById("testDiv").innerHTML = compTxt + random;
  } else {
    document.getElementById("testDiv").innerHTML = compTxt;
  }
  
  
  ctx.fillStyle = 'rgba(0,0,0,.05)'
  ctx.fillRect(0,0,canvas.width,canvas.height); 
  game.update();
  requestAnimationFrame(animate);
}

  
