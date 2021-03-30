// Add your Circle class here
class Circle {
    constructor(radius){
        this._radius = radius
    }

    get radius(){
        return this._radius
    }

    get area(){
        return (Math.PI * this._radius**2)
    }

    get circumference(){
        return (Math.PI * this.diameter)
    }

    get diameter(){
        return (this._radius * 2)
    }

    set area(area){
        this._radius = (area / Math.PI)**(1/2)
    }

    set circumference(circumference){
        this._radius = (circumference / (Math.PI * 2))
    }

    set diameter(diameter){
        this._radius = (diameter / 2)
    }
}