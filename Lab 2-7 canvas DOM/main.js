

// global variables for canvas and context
var game, canvas, ctx,textTest,wrldText;
var goal = "Hello World";
var ltrs = ["a","b","c","d","e","f","g","h","i","j","k","i","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];
window.onload = init;//  After the window has been loaded, go to init

function init(){
  canvas = document.createElement('canvas');
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(0,0,0, .95)';
  canvas.width = 1096;  // 800 - 4 for the border
  canvas.height = 696; // 700 - 4 for the border
  ctx = canvas.getContext('2d'); // This is the context
  game = new Game();
  wrldText = "Hello World";
  textTest = document.getElementById("testDiv");
  this.text = document.createElement("div");
  this.writing = document.createTextNode(wrldText);
  textTest.appendChild(this.writing);
  animate();
}

function animate(){
  ctx.fillStyle = 'rgba(0,0,0,.05)'
  ctx.fillRect(0,0,canvas.width,canvas.height); 
  game.update();
  requestAnimationFrame(animate);
}

  
