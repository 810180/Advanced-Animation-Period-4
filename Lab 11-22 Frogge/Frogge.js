function Frogge(loc,vel,chunky,clr){
    this.statblock = {
        loc : loc.copy,
        vel : vel.copy,
        rad : chunky,
        tongs : [],
        clr : clr
    }
}
Frogge.prototype.run = function () {
    
}