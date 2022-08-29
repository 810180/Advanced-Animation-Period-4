
// JSVector -- a Javascript 2D vector class

// The class constructor
function JSVector(x = 0,y = 0){
    this.x = x;
    this.y = y;
}


// Set the magnitude of the vector,
// retaining the angle (direction).
JSVector.prototype.setMagnitude = function(mag){

    return this;
}

// Return the magnitude of the vector using pythagorean theorem
JSVector.prototype.getMagnitude = function(){

 }

// Set the angle (direction) of the vector,
// retaining the magnitude.
JSVector.prototype.setDirection = function(angle){

    return this;
}

// Return the direction (angle) of the vector
JSVector.prototype.getDirection = function(){

}

// Add another vector to this vector
JSVector.prototype.add = function(v2){

    return this;
}

// Subtract another vector from this vector
JSVector.prototype.sub = function(v2){

    return this;
}

// Class method to return a new vector that is the sum of two vectors
JSVector.addGetNew = function(v1,v2){

}

// Class method to return a new vector that is the difference of two vectors
JSVector.subGetNew = function(v1,v2){

}

// Multiply this vector by a scalar
JSVector.prototype.multiply = function(scalar){

    return this;
}

// Divide this vector by a scalar
JSVector.prototype.divide = function(scalar){

    return this;
}

// Normalize this vector so that it has a magnitude of 1
JSVector.prototype.normalize = function(){

    return this;
}

// Limit the magnitude of this vector
JSVector.prototype.limit = function(lim){

    return this;
}

// Return the distance between this vector and another one
JSVector.prototype.distance = function(v2){

}

// Return the square of the distance between this vector and another one
JSVector.prototype.distanceSquared = function(v2){

}

// Rotate this vector by some number of radians
// using the rotation matrix |  cos   -sin  |
//                           |  sin   +cos  |
JSVector.prototype.rotate = function(angle) {

    return this;
}

// Return the angle between this vector and another one
JSVector.prototype.angleBetween = function(v2){

}

// Return a copy of this vector
JSVector.prototype.copy = function(){

}

// Override inherited toString() to return a description of this instance
JSVector.prototype.toString = function() {

}
