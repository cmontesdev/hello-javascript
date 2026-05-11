class Circle {
    constructor(radius) {
        this.radius = radius
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    perimeter() {
        return 2 * Math.PI * this.radius
    }
}

const sub = (a = 0, b = 0) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both arguments must be numbers")
  }
  return a - b
}

const MULTIPLICATIVE_IDENTITY = 1

export { sub, MULTIPLICATIVE_IDENTITY, Circle }