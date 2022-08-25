window.addEventListener("load", init);
let canvas2,context2//, x, y, dx, dy;//header
//https://yogeshchauhan.com/how-to-create-bouncing-balls-using-html-canvas-and-javascript/
function init()
{
    canvas2 = document.getElementById("500");
    context2 = canvas2.getContext("2d");
    animate();
}
class ballClass{
    constructor(x,y,id){
        this.x = x;
        this.y = y;
        this.id = id;
    }
    get gX()
    {
        //No thoughts head empty
        return this.x;
    }
    get gY()
    {
        return this.y;
    }
}

let b500 = [];
for(let index = 0; index<500;index++)
{
    b500.push(new ballClass(Math.random()*500,Math.random()*500,index));//adds a new item to the end of the b500 array
}
function animate()
{
    context2.clearRect(0,0,canvas2.width,canvas2.height);//clears the canvas
//    render();
    for(let index = 0; index<b500.length;index++)
    {
        bounce(b500[index]);
        update(b500[index]);
        render(b500[index]);
    }
}
function render(input)
{
    let radius = 15;
    context2.arc(input.gX(),input.gY(), 0, 2*Math.PI);
    context2.strokeStyle = "red"; // fill color
    context2.fillStyle = "blue"; //color to stroke
    context2.fill();     //renders fill
    context2.stroke();   //reners stroke
}