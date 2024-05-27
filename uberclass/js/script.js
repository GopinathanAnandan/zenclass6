class UberPrice {
    constructor(vehicleType = "UberX", distance = 10, constantFare = 75, ratePerKm = 15) {
      this.vehicleType = vehicleType;
      this.distance = distance;
      this.constantFare = constantFare;
      this.ratePerKm = ratePerKm;
    }
  
     pricecalculate (travelDistance) {
      
        let estimatedPrice;
      if (travelDistance <= this.distance) {
         estimatedPrice = this.constantFare;
      } else {
        const difference = travelDistance - this.distance;
         estimatedPrice = this.constantFare + (difference * this.ratePerKm);
      }
  
      return `Estimated price for an ${this.vehicleType} distance of ${travelDistance} km is Rs ${estimatedPrice.toFixed(2)}`;
    }
  }
 
  const uber = new UberPrice("UberX", 10, 75, 15); 
  console.log(uber.pricecalculate(30)); 
  console.log(uber.pricecalculate(20)); 
  