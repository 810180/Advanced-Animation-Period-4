function oArms(bodyX,bodyY){
    this.headLoc = new JSVector();
    this.loc = new JSVector();//maybe array of location vector to determine arm position    
}
oArms.prototype.run = function () {
    this.update();
    this.render();//make sure to use translation so that everything works
    //translate to head loc, everythins is based off of that
    this.goToFood();
}
oArms.prototype.goToFood = function (){
    //new JSVector from lead to food
    //set vel to that, but keep it limited
}
oArms.prototype.update = function () {

}
oArms.prototype.goToFood = function () {
    
}