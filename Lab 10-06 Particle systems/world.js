function World() {

  this.cnvMain = document.getElementById('cnv1');
  this.ctxMain = this.cnvMain.getContext('2d');
  this.cnvMini = document.getElementById('cnv2');
  this.ctxMini = this.cnvMini.getContext('2d');
  //  vector to locate canvas in the world
  this.dims = {
    top: -1500,
    left: -2000,
    bottom: 1500,
    right: 2000,
    width: 4000,
    height: 3000
  }

  this.particlesS = [];
  

  //Step 1::reduce world to fit inside of mini Canvas
  this.scaleX = this.cnvMini.width / this.dims.width;
  this.scaleY = this.cnvMini.height / this.dims.height;
  this.cnvMainLoc = new JSVector(0, 0);
  //checks for mouse click to move starting location to mouse
  this.cnvMain.addEventListener("click", function (event) {
    //listens to canvas for click: then calls this function
    let nPLoc = new JSVector(event.offsetX,event.offsetY);//creates JSVector at mouse location
    nPLoc.add(world.cnvMainLoc);//need to add mous elocatin to canvas location to get actual location
    world.particlesS.push( new particleSystems(nPLoc.x,nPLoc.y, world.ctxMain,world.ctxMini));
  }, false);
}//++++++++++++++++++++++++++++++  end world constructor


// run the world in animation
World.prototype.run = function () {
  // Step Two:  Move cnvMain in the world and run movers  ########################################################
  //  Clear the rectangle in the main Canvas
  this.ctxMain.clearRect(0, 0, this.cnvMain.width, this.cnvMain.height);
  this.ctxMini.clearRect(0, 0, this.cnvMini.width, this.cnvMini.height);
  this.ctxMain.save();
  this.ctxMini.save();
  //  move the main canvas inside of the world
  this.ctxMain.translate(-this.cnvMainLoc.x, -this.cnvMainLoc.y);
  this.ctxMini.translate(this.cnvMini.width / 2, this.cnvMini.height / 2);

  let ctx = this.ctxMain;
  //the two axes
  ctx.beginPath();//draws a red line from the very top to the bottom of the main canvas
  ctx.moveTo(0, this.dims.top);
  ctx.lineTo(0, this.dims.bottom);
  ctx.closePath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "red";
  ctx.stroke();

  ctx.beginPath();//draws a centered line from the far left to the far right
  ctx.moveTo(this.dims.left, 0);
  ctx.lineTo(this.dims.right, 0);
  ctx.closePath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "blue";
  ctx.stroke();
  //the outline
  ctx.beginPath();
  ctx.moveTo(this.dims.left, this.dims.top);
  ctx.lineTo(this.dims.right, this.dims.top);
  ctx.lineTo(this.dims.right, this.dims.bottom);
  ctx.lineTo(this.dims.left, this.dims.bottom);
  ctx.closePath();
  ctx.strokeStyle = "green";
  ctx.stroke();

  //  scale the world to fit into the miniCanvas
  this.ctxMini.scale(this.scaleX, this.scaleY);

  
  for(let i =0; i<this.particlesS.length;i++){
    this.particlesS[i].run();
  }

  //  restore the context
  this.ctxMain.restore();
  let ctx2 = this.ctxMini;
  // Step Three:  Draw the mainCanv and axes in the miniCanv ########################################################
  //    scale cnvMini to contain the entire world
  //done above
  //    center the world in miniCnv
  //done above
  //    draw x and y axes on miniMap
  ctx2.beginPath();
  ctx2.moveTo(0, this.dims.top);
  ctx2.lineTo(0, this.dims.bottom);
  ctx2.closePath();
  ctx2.lineWidth = 20;
  ctx2.strokeStyle = "red";
  ctx2.stroke();
  //:)
  ctx2.beginPath();//draws a centered line from the far left to the far right
  ctx2.moveTo(this.dims.left, 0);
  ctx2.lineTo(this.dims.right, 0);
  ctx2.closePath();
  ctx2.lineWidth = 20;
  ctx2.strokeStyle = "blue";
  ctx2.stroke();
  //    outline box inside of cnvMini
  ctx2.beginPath();
  ctx2.moveTo(this.cnvMainLoc.x, this.cnvMainLoc.y);
  ctx2.lineTo(this.cnvMainLoc.x + this.cnvMain.width, this.cnvMainLoc.y);
  ctx2.lineTo(this.cnvMainLoc.x + this.cnvMain.width, this.cnvMainLoc.y + this.cnvMain.height);
  ctx2.lineTo(this.cnvMainLoc.x, this.cnvMainLoc.y + this.cnvMain.height)
  ctx2.closePath();
  ctx2.lineWidth = 15;
  ctx2.strokeStyle = "black";
  ctx2.stroke();


  this.ctxMini.restore();
}

World.prototype.getRandomColor = function () {
  //  List of hex color values for movers
  let colors = [
    "#7102AB",
    "#ab0256",
    "#0285ab",
    "#02ab1a",
    "#ab5302",
    "#773e26",
    "#ab0256",
    "#257874",
    "#78254e",
    "#787725"
  ];
  let index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

