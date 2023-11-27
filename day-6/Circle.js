class Circle{
  constructor(radius,color){
      this.radius = radius;
      this.color =color;
  }
  static getRadius(){
      return this.radius
  }
  static setRadius(radius = ""){
      this.radius = radius
  }
  static getColor(){
      return this.color
  }
  static setColor(color =""){
      this.color = color
  }
  static toString(radius,color){
      return [this.radius,this.color]
  }
  static getarea(radius){
      
      return (((22/7)*(Math.pow(this.radius,2)))).toFixed(2)
  }
  static getCircumference(radius){
      return (2*(22/7)*this.radius).toFixed(2)
  }
}

var circleArea = new Circle()
Circle.setRadius(1)
Circle.setColor("Red")
console.log(Circle.getarea())
console.log(Circle.getCircumference())
console.log(Circle.toString())