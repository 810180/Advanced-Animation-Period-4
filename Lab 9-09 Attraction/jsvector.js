
// JSVector -- a Javascript 2D vector class

// The class constructor
function JSVector(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}


// Set the magnitude of the vector,
// retaining the angle (direction).
JSVector.prototype.setMagnitude = function (mag) {//Tested - Works
    let d = this.getDirection();
    this.x = mag * Math.cos(d);
    this.y = mag * Math.sin(d);
    return this;
}

// Return the magnitude of the vector using pythagorean theorem
JSVector.prototype.getMagnitude = function () {//Tested - Works
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
}

// Set the angle (direction) of the vector,
// retaining the magnitude.
JSVector.prototype.setDirection = function (angle) {//Tested - Worls
    let Cmag = this.getMagnitude();
    //get x and y of angle value(cosine and sine/magnitude) set x and y value to that
    //magnitude times cosine or sine of angle
    this.x = Cmag * Math.cos(angle);
    this.y = Cmag * Math.sin(angle);
    return this;
}

// Return the direction (angle) of the vector
JSVector.prototype.getDirection = function () {//Tested - Works
    return Math.atan2(this.y, this.x);
}

// Add another vector to this vector
JSVector.prototype.add = function (v2) {//Tested - Works
    this.x += v2.x;
    this.y += v2.y;
    return this;
}

// Subtract another vector from this vector
JSVector.prototype.sub = function (v2) {//Tested - Works
    this.x -= v2.x;
    this.y -= v2.y;
    return this;
}

// Class method to return a new vector that is the sum of two vectors
JSVector.addGetNew = function (v1, v2) {//Tested - Works
    let output = new JSVector(v1.x + v2.x, v1.y + v2.y);
    return output;
}

// Class method to return a new vector that is the difference of two vectors
JSVector.subGetNew = function (v1, v2) {//Tested - Works
    let output = new JSVector(v1.x - v2.x, v1.y - v2.y);
    return output;
}

// Multiply this vector by a scalar
JSVector.prototype.multiply = function (scalar) {//Tested - Works
    this.x *= scalar;
    this.y *= scalar;
    return this;
}

// Divide this vector by a scalar
JSVector.prototype.divide = function (scalar) {//Tested - Works
    this.x /= scalar;
    this.y /= scalar;
    return this;
}

// Normalize this vector so that it has a magnitude of 1
JSVector.prototype.normalize = function () {//Tested - Works
    this.setMagnitude(1);
    return this;
}

// Limit the magnitude of this vector
JSVector.prototype.limit = function (lim) {//Tested - Works
    if (this.getMagnitude() > lim) {
        this.setMagnitude(lim);
    }
    return this;
}

// Return the distance between this vector and another one
JSVector.prototype.distance = function (v2) {//Tested - Works
    return Math.sqrt(Math.pow((v2.x - this.x), 2) + Math.pow((v2.y - this.y), 2));
}

// Return the square of the distance between this vector and another one
JSVector.prototype.distanceSquared = function (v2) {// Tested - Works
    return Math.pow(this.distance(v2),2);
}

// Rotate this vector by some number of radians
// using the rotation matrix |  cos   -sin  |
//                           |  sin   +cos  |
JSVector.prototype.rotate = function (angle) {//Tested - Works
    let d = this.getDirection();
    this.setDirection(d+angle);//How to matrixes
    //this.x = this.x * Math.cos(angle) - this.y * Math.sin(angle);
    //this.y = this.x * Math.sin(angle) + this.x * Math.cos(angle);
    //x = xcos - ysin
    //y = sxin + ycos
    return this;
}

// Return the angle between this vector and another one
JSVector.prototype.angleBetween = function (v2) {//Tested - Works
    return this.getDirection() - v2.getDirection();
}

// Return a copy of this vector
JSVector.prototype.copy = function () {//Tested - Works
    return new JSVector(this.x, this.y);
}

// Override inherited toString() to return a description of this instance
JSVector.prototype.toString = function () {//Tested - Works
    return "Magnitude:" + this.getMagnitude() + " Direction:" + this.getDirection() + " X value" + this.x + " Y value" + this.y;
}