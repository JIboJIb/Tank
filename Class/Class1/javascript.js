class circle {
    constructor(r) {
        this.r = r
    }

    get radius() {
        return [this.r]
    }

    set radius(newR) {
        [this.r] = [...newR]
        console.log(radius())
    }

    ///як вивести?

    get diametr() {
        let d = this.r * 2
        return d
        console.log(diametr())
    }

    square() {
        var s = 3.14 * this.r ** 2
        return s
        console.log(square())
    }

    long() {
        var l = 2 * 3.14 * this.r
        return l
        console.log(long())
    }
}


let ball = new circle(5)


console.log(ball.radius)
let r = 4
console.log(ball.diametr)
console.log(ball.square())
console.log(ball.long())