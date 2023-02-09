function GameArea() {
  //  Wrapper Div
  this.wrapperDiv = document.getElementById("wrapperDiv");
  this.wrapperDiv.setAttribute("style", " background-color:yellow; border: 5px solid black; width:1300px; height:800px;");
  //left tile menu div
  this.tileMenuDivL = document.createElement("div");
  this.wrapperDiv.appendChild(this.tileMenuDivL)
  this.tileMenuDivL.setAttribute("style", "background-color:#FFFFFF; width:100px; height:800px;float:left;");
  // create tileMenuDiv
  this.tileMenuDiv = document.createElement("div");
  this.wrapperDiv.appendChild(this.tileMenuDiv)
  this.tileMenuDiv.setAttribute("style", " background-color:#FFFFFF; width:1100px; height:100px;float:left;");
  //right tile menu div
  this.tileMenuDivR = document.createElement("div");
  this.wrapperDiv.appendChild(this.tileMenuDivR)
  this.tileMenuDivR.setAttribute("style", " background-color:#FFFFFF; width:100px; height:800px;float:right;");

  // create canvasDiv
  this.canvasDiv = document.createElement("div");
  this.wrapperDiv.appendChild(this.canvasDiv)
  this.canvasDiv.setAttribute("style", " background-color:pink; width:1100px; height:700px;float:left;");

  // place canvas in div and style
  this.canvasDiv.appendChild(canvas);
  //  create tiles for tile menu
  this.tiles = [];
  this.tileText = [];
  //top tiles
  for (let i = 0; i < 6; i++) {
    this.tiles[i] = document.createElement("div");
    this.tileMenuDiv.appendChild(this.tiles[i]);
    this.tiles[i].setAttribute("class", "tile");
    this.tileText[i] = document.createTextNode("Tile " + (i + 1) + "");
    //this.t1Text.style.padding = "10px";
    this.tiles[i].appendChild(this.tileText[i]);
  }
  this.tilesR = [];
  this.tileTextR = [];
  this.dumbCats = ["https://www.cnet.com/a/img/resize/5a6311df239e2d09ecf35fbef4ae6e186e28c164/hub/2014/01/12/b3815b11-8533-11e3-bc97-14feb5ca9861/cats9.png?auto=webp&fit=crop&height=675&width=1200","https://i.ytimg.com/vi/fjdyDwU4W9s/maxresdefault.jpg", "https://pbs.twimg.com/profile_images/530292596740866048/nR0ZmD3x_400x400.jpeg", "https://pyxis.nymag.com/v1/imgs/d29/4a6/d8b19f15856697769dc1c586d59ce82bd8-22-cat-video-truth-smoking.rsquare.w700.jpg", "https://i.chzbgr.com/full/9703372544/hB62E276C/cat", "https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/70/5b/e3/705be3a5-8071-0d84-7dfd-0ab82485d25f/source/512x512bb.jpg"];
  for (let i = 0; i < 6; i++) {
    this.tilesR[i] = document.createElement("div");
    this.tileMenuDivR.appendChild(this.tilesR[i]);
    this.tilesR[i].setAttribute("class", "tileV");
    this.imgTextR = document.createElement("IMG");
    this.imgTextR.setAttribute("src", this.dumbCats[i]);
    this.imgTextR.setAttribute("width", "50");
    this.imgTextR.setAttribute("width", "70");
    this.tileTextR[i] = this.imgTextR
    this.tilesR[i].appendChild(this.tileTextR[i]);
  }
  this.tilesL = [];
  this.tileTextL = [];
  for (let i = 0; i < 6; i++) {
    this.tilesL[i] = document.createElement("div");
    this.tileMenuDivL.appendChild(this.tilesL[i]);
    this.tilesL[i].setAttribute("class", "tileV");
    this.tileTextL[i] = document.createTextNode("Tile " + (i + 1) + "");
    this.tilesL[i].appendChild(this.tileTextL[i]);
  }
  //  Add listeners to tile objects
  for (let i = 0; i < this.tiles.length; i++) {
    this.tiles[i].addEventListener('mouseover', // mouseover is the name of an event
      function () {//  JavaScript has anonymous functions
        //  'this' is the listener target object: tile
        //  'this' does not refer to the PlayArea object
        this.style.backgroundColor = "#ac8fe3"
      },
      false);
    this.tiles[i].addEventListener('mouseout', function () {
      this.style.backgroundColor = "#d5dee0"
    }, false);
    this.tiles[i].addEventListener('click', function () {
      game.gamePaused = !game.gamePaused;
      console.log("Mouse Clicked");
    }, false);
    //right tiles
    this.tilesR[i].addEventListener('mouseover', // mouseover is the name of an event
      function () {
        this.style.backgroundColor = "#ac8fe3"
      },
      false);
    this.tilesR[i].addEventListener('mouseout', function () {
      this.style.backgroundColor = "#d5dee0"
    }, false);
    this.tilesR[i].addEventListener('click', function () {
      game.gamePaused = !game.gamePaused;
      console.log("Mouse Clicked");
    }, false);
    this.tilesL[i].addEventListener('mouseover', // mouseover is the name of an event
      function () {
        this.style.backgroundColor = "#ac8fe3"
      },
      false);
    this.tilesL[i].addEventListener('mouseout', function () {
      this.style.backgroundColor = "#d5dee0"
    }, false);
    this.tilesL[i].addEventListener('click', function () {
      game.gamePaused = !game.gamePaused;
      console.log("Mouse Clicked");
    }, false);
  }//end of mouse over loop
}
