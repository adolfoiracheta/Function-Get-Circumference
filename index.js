//Function Scope Task 1

function getCircumference(r) {
  const pi = 3.14159
    let circumference = 2 * pi * r
      return circumference 
}
console.log(getCircumference(3))

function getArea(r) {
  const pi = 3.14159
    let area = pi * r**2
      return area
}
//console.log(getArea(10))

function calcGeometery(r) {
  return "Circumference: " + getCircumference(r) + " Area: " + getArea(r)
}
console.log(calcGeometery(5))