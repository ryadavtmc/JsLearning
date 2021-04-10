var num1 = 5;
var num2 = 3.2;

console.log(num1+num2);

console.log("****************")

var listPrice = 20;
var sPrice = 15;
var L = 12;
var Discount = ((listPrice-sPrice)/ L) * 100;

console.log("Discount Percentage is: " +Discount);

displayDiscountPercentage = Math.round(Discount);

var result = listPrice > sPrice;
console.log(result);
console.log(displayDiscountPercentage + "% off");

console.log(typeof result);