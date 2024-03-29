class UberPrice {
  constructor(baseFare, distanceMultiplier, timeMultiplier) {
    this.baseFare = baseFare;
    this.distanceMultiplier = distanceMultiplier;
    this.timeMultiplier = timeMultiplier;
  }

  calculatePrice(distance, time) {
    const distanceCost = distance * this.distanceMultiplier;
    const timeCost = time * this.timeMultiplier;
    return Math.max((distanceCost + timeCost ), this.baseFare)
  }
}
let totalcoast =new UberPrice(50,25,10)
console.log(totalcoast.calculatePrice(5,1))