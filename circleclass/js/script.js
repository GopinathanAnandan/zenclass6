class Circle {
    constructor(radius, color) {
        this._radius = radius; 
        this._color = color;
    }

    get radius() {
        return this._radius;
    }

    set radius(newRadius) {
        this._radius = newRadius;
    }

    get color() {
        return this._color;
    }

    set color(newColor) {
        this._color = newColor;
    }

    calculateArea() {
        return Math.PI * this._radius ** 2;
    }

    calculateCircumference() {
        return 2 * Math.PI * this._radius;
    }

    toString() {
        return `Circle[Radius=${this._radius}, Color=${this._color}]`;
    }
}


const myCircle = new Circle(1.0, "red");

console.log("Radius:", myCircle.radius);
console.log("Color:", myCircle.color);
console.log("Area:", myCircle.calculateArea());
console.log("Circumference:", myCircle.calculateCircumference());

console.log(myCircle.toString());

myCircle.radius = 3.14;
myCircle.color = "blue";

console.log("Radius:", myCircle.radius);
console.log("Color:", myCircle.color);
console.log("Area:", myCircle.calculateArea());
console.log("Circumference:", myCircle.calculateCircumference());

console.log(myCircle.toString());

