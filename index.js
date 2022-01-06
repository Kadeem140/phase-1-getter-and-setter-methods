// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return 2 * this.radius
    }

    get circumference(){
        return 2 * Math.PI * this.radius
    }

    get area(){
        //A = pi* r squared
       return Math.PI * Math.sqrt(this.radius)
    }

    set diameter(radius){
        this.radius = radius
    }
    set circumference(radius){
        this.radius = radius
    }
    set area(radius){
        this.radius = radius
    }
}

const newCircle = new Circle(5)
console.log(newCircle.diameter)
newCircle.diameter = 10
console.log(newCircle.diameter)
console.log(newCircle.area)