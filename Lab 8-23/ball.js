function Ball(x, y, dx, dy, r, c, vector) {//acts like a class
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.c = c;
    //this.vector = {
    //    vx = vx;
    //    vy = vy;
    //}
}
//function nomenclature: Prototype name.prototype.Function name = function(){}
Ball.prototype.run = function () {//runs everything locally
    this.update();
    this.bounce();
    this.render();
}



Ball.prototype.render = function () {
    context.beginPath();                //clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    context.strokeStyle = this.c;     // fill color
    context.fillStyle = this.c;       //color to stroke
    context.fill();                     //renders fill
    context.stroke();                   //reners stroke
}

Ball.prototype.update = function () {

    this.x += this.dx;
    this.y += this.dy

}

Ball.prototype.bounce = function () {
    if ((this.x + this.dx) > canvas.width) {//checks if x+dx is going to go over the width and swaps it if necessary
        this.dx = -(Math.random() * 4) + 1
        //dont know if the +0.01 is necessary, but dont want to get it stuck on 0 speed 
    } else if ((this.x + this.dx) < 0) {
        this.dx = (Math.random() * 4) + 1
    }
    if ((this.y + this.dy) > canvas.height) {
        this.dy = -(Math.random() * 4) + 1
    } else if ((this.y + this.dy) < 0) {
        this.dy = (Math.random() * 4) + 1
    }
}

    