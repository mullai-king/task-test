class Circle{
  constructor(radius=1.0,color="red"){
      this.radius = radius;
      this.color =color;
  }
   getRadius(){
      return this.radius
  }
   setRadius(radius){
      this.radius = radius
  }
   getColor(){
      return this.color
  }
   setColor(color){
      this.color = color
  }
   toString(radius,color){
      return `Circle[radius =${this.radius},radius =${this.color}]`
  }
   getarea(radius){
      
      return (((22/7)*(Math.pow(this.radius,2)))).toFixed(2)
  }
   getCircumference(radius){
      return (2*(22/7)*this.radius).toFixed(2)
  }
}

let circleArea = new Circle()

//testcase 1
//empty value
console.log(circleArea.getRadius())
console.log(circleArea.getColor())
console.log(circleArea.getarea())
console.log(circleArea.getCircumference())
console.log(circleArea.toString())

//testcase 2
//passing value 5 and blue
circleArea.setRadius(5)
circleArea.setColor("blue")
console.log(circleArea.getarea())
console.log(circleArea.getCircumference())
console.log(circleArea.toString())

//testcase 2
//passing value 7 and white
circleArea.setRadius(7)
circleArea.setColor("white")
console.log(circleArea.getarea())
console.log(circleArea.getCircumference())
console.log(circleArea.toString())
